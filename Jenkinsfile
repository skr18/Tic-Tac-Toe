pipeline {
    agent any

    environment {
        IMAGE_NAME = "sujeetaws/html-app"
        IMAGE_TAG  = "latest"
        DOCKER_CREDS = credentials('dockerhub-creds')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/skr18/Tic-Tac-Toe'
            }
        }

        stage('Docker Login') {
            steps {
                sh '''
                  echo "$DOCKER_CREDS_PSW" | docker login \
                  -u "$DOCKER_CREDS_USR" --password-stdin
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }

    }
}

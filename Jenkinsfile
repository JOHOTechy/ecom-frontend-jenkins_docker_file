pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {

        REPO_URL = 'https://github.com/JOHOTechy/ecom-frontend.git'

        IMAGE_NAME = 'ecom-react-app'

        CONTAINER_NAME = 'react-container'
    }

    stages {

        stage('Checkout Code') {

            steps {

                git branch: 'master', url: "${REPO_URL}"
            }
        }

        stage('Install Dependencies') {

            steps {

                sh 'npm install'
            }
        }

        stage('Build React App') {

            steps {

                sh 'npm run build'
            }
        }

        stage('Verify Build Files') {

            steps {

                sh 'ls -la dist'
            }
        }

        stage('Build Docker Image') {

            steps {

                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Remove Old Container') {

            steps {

                sh '''
                docker rm -f $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Docker Container') {

            steps {

                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 80:80 \
                $IMAGE_NAME
                '''
            }
        }

        stage('Verify Deployment') {

            steps {

                sh 'docker ps'
            }
        }
    }

    post {

        success {

            echo '✅ React application deployed successfully using Docker!'
        }

        failure {

            echo '❌ Deployment failed.'
        }

        always {

            cleanWs()
        }
    }
}

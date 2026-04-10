pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/deyonagoshica/DevOps-Microservices-App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'echo "No tests configured - simulate test pass"'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t user-service .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker stop user-service-container || exit 0
                docker rm user-service-container || exit 0
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker run -d -p 3003:3001 --name user-service-container user-service'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline SUCCESS 🚀'
        }
        failure {
            echo 'Pipeline FAILED ❌'
        }
    }
}
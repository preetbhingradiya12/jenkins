pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using Jest
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                // Optional: Add a build step if necessary
                // e.g., compile code, create artifacts
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Optional: Deploy application to a server or a cloud service
                // This part depends on your deployment strategy
                echo 'Deploy step is not configured.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

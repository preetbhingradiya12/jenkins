pipeline {
    agent any

    environment{
        PATH = "${env.PATH}:/home/crawlapps/.nvm/versions/node/v20.12.0/bin"
    }

    stages {
        stage('Check Node.js and npm') {
            steps {
                script {
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    retry(3) {
                        timeout(time: 3, unit: 'MINUTES') {
                            sh 'npm install --verbose'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        // stage('Run Code'){
        //     steps{
        //         script{
        //             sh 'npm run start'
        //         }
        //     }
        // }
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

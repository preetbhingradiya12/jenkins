pipeline{

    agent any

    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage('Npm install'){
            steps{
                sh '''
                echo "npm install"
                npm install --verbose
                '''
            }
        }

        stage('Print Environment') {
            steps { 
                sh '''
                echo "Node version:"
                node --version
                echo "NPM version:"
                npm --version
                '''
            }
        }
    }
}
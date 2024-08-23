pipeline{

    agent any
    environment {
        PATH = "/home/crawlapps/.nvm/versions/node/v20.12.0/bin:${PATH}"
    }

    stages{
        stage("checkout"){
            step{
                checkout scm
            }
        }

        stage('Npm install'){
            step{
                sh '''
                echo "npm install"
                npm install
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
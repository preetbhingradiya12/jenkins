pipeline{

    agent any

    stages{
        stage("checkout"){
            steps{
                checkout scm
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
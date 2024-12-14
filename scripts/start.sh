#!/bin/bash
 
if [ "$DEPLOYMENT_GROUP_NAME" == "Leedana-Dev-App-Deployment-Group" ]
then
    cd  /var/www/dev.leedana.technology
    npm install
    npm run build
fi
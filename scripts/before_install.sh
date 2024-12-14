#!/bin/bash

if [ "$DEPLOYMENT_GROUP_NAME" == "Leedana-Dev-App-Deployment-Group" ]
then
    sudo rm -rf /var/www/dev.leedana.technology/*
    sudo chown -R ubuntu:ubuntu /var/www/dev.leedana.technology
	cp /var/www/data/dev.leedana.technology/.env /var/www/dev.leedana.technology/
fi
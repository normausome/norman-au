#!/bin/bash

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 763831530139.dkr.ecr.us-east-2.amazonaws.com

# docker build --platform linux/amd64 -t normanau .
docker build --platform linux/arm64/v8 -t normanau .

docker tag normanau:latest 763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau:latest

docker push  763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau:latest

echo "######### FINISHED PUSHING IMAGE TO ECR/DOCKER #########"
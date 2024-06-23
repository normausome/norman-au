#!/bin/bash

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 763831530139.dkr.ecr.us-east-2.amazonaws.com

docker pull 763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau:latest

docker stop normanau

docker rm normanau

docker run -d -p 3000:3000 --name normanau 763831530139.dkr.ecr.us-east-2.amazonaws.com/normanau



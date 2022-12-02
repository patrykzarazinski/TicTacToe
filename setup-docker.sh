#!/bin/bash

#build the flask container
docker build -t server/flask-app .

#run the flask app container
docker run -p 5000:5000 --name flask-app server/flask-app
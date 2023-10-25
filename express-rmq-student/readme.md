# Kubernetes mini experiment

This repository represents my initaial research into Docker and Kubernetes in preperation for a cloud engineering role.
It's based on two lab exercises from Aarhus University Advanced Backend Course, which I did not enroll in but audited after graduation.

The lab exersise descriptions were roughly as follows:

1 create a express app web application for input of sets of students and their grades to be stored in a mongodb database.

2 Extend the previous lab excercis to incorporate a RabbitMQ message queue. The previous exppression application agould only rread from the database, all write operations should be
performed by a new second application which receives the the informatiion too be stored from the first app through the message queue.

A simple solution for the exersise are availabe in this repository for the two applications to be developed. The exercise is solved running the two apps along with a standard rabbitmq container..

## Running solution in a kubernetes cluster

To familiarize myself with kubernetes my goal was to run my precious solution on a cluster, running each applition in their own pod communicating throuhgh a 3rd, rabbitmq pod.
For this purpose I aim to running on minikube

## Development Process

1 Dockerfiles have been created for each of the buisness logic applications
2 Using each docker file corresponding images have been built
3 Each of the two images express-webpi and writer have been tagged and pushed to a private AWS Elastic coontaiiner repository
4 Create a mongo atlas cluster and cofigure a secret for correct authentication
5 run kubectl apply -f

This ensures a more relient ressiliant and scalable application as a whole

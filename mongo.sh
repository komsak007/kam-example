#!/bin/bash

sudo docker rm mongo
sudo docker run -p 27017:27017 -it -d mongo
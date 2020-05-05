#!/usr/bin/env bash

docker build -t quay.io/mechevarria/demo-nginx-angular .

docker push quay.io/mechevarria/demo-nginx-angular
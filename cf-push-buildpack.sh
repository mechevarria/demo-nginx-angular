#!/usr/bin/env bash

set -e

envsubst < dist/assets/js/env.template.js > dist/assets/js/env.js

cf push demo-nginx-angular \
    -m 64M \
    -k 256M \
    -b https://github.com/cloudfoundry/nginx-buildpack.git

#!/usr/bin/env bash

echo "Running custom pre-run hook"
node_modules/.bin/envsub ./dist/assets/js/env.template.js ./dist/assets/js/env.js

echo "Running buildpack command"
varify -buildpack-yml-path ./buildpack.yml ./nginx.conf $HOME/modules $DEP_DIR/nginx/modules && nginx -p $PWD -c ./nginx.conf
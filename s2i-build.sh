#!/bin/bash

app_path=.
builder_image=rhscl/nodejs-8-rhel7
output_image=patternfly-ng-seed

s2i build ${app_path} ${builder_image} ${output_image}

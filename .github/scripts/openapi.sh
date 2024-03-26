#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -eu

# Bundle OpenAPI specification using redocly
redocly bundle -d "/app/spec/openapi.yml" -o "/app/src/openapi.json"

#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -eu

# Install required npm packages
npm install -g --ignore-scripts --quiet @redocly/cli@latest nodemon

# Function to check if redocly is available
check_redocly() {
    which redocly >/dev/null 2>&1
}

# Wait until redocly is available
until check_redocly; do
    echo "Waiting for redocly to be available..."
    sleep 1
done

# Once redocly is available, bundle OpenAPI specification
redocly bundle -d "/app/spec/openapi.yml" -o "/app/src/openapi.json"

#!/bin/bash

# Check if correct number of arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <GitHub Repository> <Docker Hub Repository>"
    exit 1
fi

# Clone the GitHub repository
echo "Cloning GitHub repository $1..."
git clone "https://github.com/$1"
cd "$(basename "$1")"

# Build Docker image
echo "Building Docker image..."
docker build -t "$2" .

# Read Docker credentials from environment file
if [ -f "../cred.env" ]; then
    echo "Reading Docker credentials from environment file..."
    source "../cred.env"
else
    echo "Error: cred.env file not found."
    exit 1
fi

# Login to Docker Hub
echo "Logging in to Docker Hub..."
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

# Tag the Docker image
echo "Tagging Docker image..."
docker tag "$2" "$2:latest"

# Push the Docker image to Docker Hub
echo "Pushing Docker image to Docker Hub..."
docker push "$2"
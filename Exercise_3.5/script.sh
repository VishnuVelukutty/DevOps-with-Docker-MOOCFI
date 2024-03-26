#!/bin/bash

# Check if correct number of arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <GitHub Repository> <Docker Hub Repository>"
    exit 1
fi

# Clone the GitHub repository
echo "Cloning GitHub repository $1..."
git clone $1
cd $(basename $1)

# Build Docker image
echo "Building Docker image..."
docker build -t $2 .

# Login to Docker Hub
echo "Logging in to Docker Hub..."
docker login

# Tag the Docker image
echo "Tagging Docker image..."
docker tag $2 $2:latest

# Push the Docker image to Docker Hub
echo "Pushing Docker image to Docker Hub..."
docker push $2

# Clean up
echo "Cleaning up..."
cd ..
rm -rf $(basename $1)

echo "Script completed successfully!"

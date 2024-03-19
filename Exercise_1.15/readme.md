## Exercise 1.15: Homework 
### Prerequisites  
Install [node](https://nodejs.org/en/download/). 
Example node install instructions for LTS node:
```
curl -sL https://deb.nodesource.com/setup_x.x | bash
sudo apt install -y nodejs
```
Check your install with `node -v && npm -v`

## Starting in production mode

First you need to build the static files with `npm run build`

This will generate them into `build` folder.

An example for serving static files:

Use npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `serve -s -l 3000 build`

Test that the project is running by going to <http://localhost:3000>  

## Running locally
- Clone the project in folder using `git clone`.  
- Move inside the folder using `cd frontend`.
- Run the following commands 
    - `npm init` to initalize npm directory. 
    - `npm install` to install al the required packages mentioned in the package.json.
    - `npm start` to run locally and Test that the project is running by going to <http://localhost:3000>.

## Running the Dockerized version
- Build the image by running `docker build . -t fe-demo`
- Run the docker image `docker run -p 3000:3000 fe-demo` 

## Pushing the image to docker repo
- Tag the image by running the command `docker tag fe-demo:latest vishnuve/devops_for_docker:fe-demo`
- Login into Docker and push `docker push vishnuve/devops_for_docker:fe-demo`  

Link to [Docker Image](https://hub.docker.com/repository/docker/vishnuve/devops_for_docker/general) 

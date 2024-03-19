## Exercise 1.4: Missing dependencies
### SOLUTION - LIST OF COMMANDS  
- docker run -d -it --name task ubuntu sh -c "echo 'Input website:'; read website; echo 'Searching..'; sleep 1; curl http://$website;"
- docker exec task sh -c "apt-get update && apt-get -y install curl"
- docker attach task
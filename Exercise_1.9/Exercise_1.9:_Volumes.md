### SOLUTION - LIST OF COMMANDS  
- mkdir logs && touch logs/log_file.log
- docker run -d -v "$(pwd)/Desktop/logs/log_file.log:/usr/src/app/text.log" --name webserver devopsdockeruh/simple-web-service
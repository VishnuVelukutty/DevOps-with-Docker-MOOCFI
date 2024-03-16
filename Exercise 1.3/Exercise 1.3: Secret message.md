### LIST OF COMMANDS USED  

- ``` docker run -d -it --name webserver devopsdockeruh/simple-web-service:ubuntu ```

- ``` docker exec -it webserver bash ``` 
--> then in bash terminal -- > 
``` tail -f ./text.log ```

OR 

- ``` docker exec webserver tail -f ./text.log ```


### SOLUTION - SECRET MESSAGE   

> Secret message is: 'You can find the source code here: https://github.com/docker-hy'
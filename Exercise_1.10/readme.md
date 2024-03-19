## Exercise 1.10: Ports open
### SOLUTION - LIST OF COMMANDS  
- docker build -f Exercise_1.8\:_Two_line_Dockerfile . -t port_open
- docker run -p 127.0.0.1:8080:8080 -d port_open
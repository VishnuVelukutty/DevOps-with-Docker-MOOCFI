## Exercise 1.14: Environment
### SOLUTION - LIST OF COMMANDS  
- docker build -f  <filename> . -t fe
- docker build -f <filename> . -t be
- docker run -p 5000:5000 fe
- docker run -p 8080:8080 be
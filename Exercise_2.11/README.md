### Explanation 
This is a demo fulstack application using React and Spring Boot

1. Courses API: A backend application that provides REST APIs for listing courses
being offered
2. Frontend application, that provides an interface to consume the above APIs and
display on a web browser  

- Course Entity
1. A course has the following attributes
    a. Title of course, Eg. Introduction to Computer Architecture
    b. Course code, Eg. CS 102
    c. Description, Eg. This course provides a basic introduction to the architecture and algorithms of computer systems
2. An instance of the course delivery contains following attributes
    a. Year (YYYY) of delivery: Eg. 2022, 2023
    b. Semester of delivery (N): Eg: 1,2
    c. Course ID, Eg: 23

- Courses API
    1. POST /api/courses
        a. Create a new course
    2. GET /api/courses
        a. list of all courses available
    3. GET /api/courses/23
        a. View detailed information about a course with ID = 23:
    4. DELETE /api/courses/24
        a. delete a course with ID = 24
    5. POST /api/instances
        a. Create a new instance of a course delivery
    6. GET /api/instances/2020/1
        a. list of courses delivered in year YYYY=2020, and semester=1
    7. GET /api/instances/2023/1/19
        a. View detailed information about an instance of a course ID = 19, delivered in YYYY=2023, and semester = 1
    8. DELETE /api/instances/2022/2/8
        a. Delete an instance of a course ID = 8, delivered in YYYY=2022, and semester = 2

- Course Listing User Interface
    1. Create a course
    2. Create an instance of a course delivery
    3. List courses
        a. View details of a particular course
        b. Delete a particular course
    4. List course delivery instances in a particular year and semester
        a. View details of a particular course instance
        b. Delete a particular course instance

Course Listing User Interface

Commands to run Docker yaml file  
```
docker compose -f fullstack-compose.yaml up
```
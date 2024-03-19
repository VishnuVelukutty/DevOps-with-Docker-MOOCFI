import APP_API_URL from "../config.js";

class AddCourseSrv {
    async addCourse(data) {
        try {
            const response = await fetch(`${APP_API_URL}/courses`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                },
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error occurred", error);
        }
    }

    async getCourse(courseId) {
        try {
            const response = await fetch(`${APP_API_URL}/courses/${courseId}`);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error occurred", error);
        }
    }

    // Add more methods for other API calls if needed
}

export default new AddCourseSrv();

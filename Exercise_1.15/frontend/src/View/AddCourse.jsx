import AddCourseSrv from "../Controller/AddCourseCtrl.js"
export default function AddCourse(){

    const [courseData, setCourse] = useState([]);

    const handleSubmit = async (data) => {
        await AddCourseSrv.addCourse(data);
        setCourse([...courseData, data]);
        // Clear input fields
        document.getElementById("CourseTitle").value = "";
        document.getElementById("CourseCode").value = "";
        document.getElementById("CourseDesc").value = "";
    };


    return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
                <form>

                <div className="mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseCode"
                            aria-describedby="CourseCode"
                            placeholder="Course Code"
                        />
                    </div>
                    
                    <div className="mt-3 mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseTitle"
                            aria-describedby="CourseTitle"
                            placeholder="Course Title"
                        />
                    </div>

                    <div className="mb-3 col-6 mx-auto">
                        <input
                            type="text"
                            className="form-control"
                            id="CourseDesc"
                            aria-describedby="CourseDesc"
                            placeholder="Course Description"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Add Course
                    </button>
                </form>
            </div>
        </div>
    );
}
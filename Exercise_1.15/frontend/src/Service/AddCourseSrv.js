import AddCourseCtrl from "../Controller/AddCourseCtrl.js"

const handleCourseSubmission = async (data, setCourseData) => {
    await AddCourseCtrl.addCourse(data);
    setCourseData(prevCourseData => [...prevCourseData, data]);
    // Clear input fields
    document.getElementById("CourseTitle").value = "";
    document.getElementById("CourseCode").value = "";
    document.getElementById("CourseDesc").value = "";
};

export { handleCourseSubmission };
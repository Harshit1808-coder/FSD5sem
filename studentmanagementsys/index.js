// Get students from localStorage
let students = JSON.parse(localStorage.getItem("students")) || [];


// Add Student
document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const rollNo = document.getElementById("rollNo").value.trim();
    const course = document.getElementById("course").value.trim();

    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);
    const mark4 = Number(document.getElementById("mark4").value);

    // Check duplicate roll number
    const duplicate = students.some(student =>
        student.rollNo.toLowerCase() === rollNo.toLowerCase()
    );

    if (duplicate) {
        alert("Roll number already exists!");
        return;
    }

    // Calculate percentage
    const total = mark1 + mark2 + mark3 + mark4;
    const percentage = total / 4;

    // Calculate grade
    const grade = calculateGrade(percentage);

    // Create student object
    const student = {
        name: name,
        rollNo: rollNo,
        course: course,
        marks: [mark1, mark2, mark3, mark4],
        percentage: percentage,
        grade: grade
    };

    // Add student
    students.push(student);

    // Save to localStorage
    saveStudents();

    // Display students
    displayStudents();

    // Clear form
    document.getElementById("studentForm").reset();

    alert("Student added successfully!");
});


// Calculate Grade
function calculateGrade(percentage) {

    if (percentage >= 90) {
        return "A+";
    } 
    else if (percentage >= 80) {
        return "A";
    } 
    else if (percentage >= 70) {
        return "B";
    } 
    else if (percentage >= 60) {
        return "C";
    } 
    else if (percentage >= 50) {
        return "D";
    } 
    else {
        return "F";
    }
}


// Display Students
function displayStudents(studentList = students) {

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    if (studentList.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="7">No student records found</td>
            </tr>
        `;

        return;
    }

    studentList.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.rollNo}</td>

            <td>${student.name}</td>

            <td>${student.course}</td>

            <td>${student.marks.join(" , ")}</td>

            <td>${student.percentage.toFixed(2)}%</td>

            <td class="${getGradeClass(student.grade)}">
                ${student.grade}
            </td>

            <td>
                <button class="delete-btn"
                        onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}


// Search Student
function searchStudent() {

    const searchValue =
        document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    if (searchValue === "") {
        displayStudents();
        return;
    }

    const result = students.filter(student =>

        student.name.toLowerCase().includes(searchValue) ||

        student.rollNo.toLowerCase().includes(searchValue)
    );

    displayStudents(result);
}


// Delete Student
function deleteStudent(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");

    if (!confirmDelete) {
        return;
    }

    students.splice(index, 1);

    saveStudents();

    displayStudents();
}


// Save students
function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// Get grade CSS class
function getGradeClass(grade) {

    if (grade === "A+" || grade === "A") {
        return "grade-A";
    }

    if (grade === "B") {
        return "grade-B";
    }

    if (grade === "C") {
        return "grade-C";
    }

    if (grade === "D") {
        return "grade-D";
    }

    return "grade-F";
}


// Display existing records when page loads
displayStudents();

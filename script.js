let gradeScales = [];
let courses = [];
let cgpa = 0.0;
let totalCredits = 0;

let editingIndex = -1; // Default value indicating no course is being edited

function addCourse() {
  //   const courseName = document.getElementById("courseName").value;
  //   const credit = parseFloat(document.getElementById("credit").value);
  //   const grade = parseFloat(document.getElementById("grade").value);

  const courseNameInput = document.getElementById("courseName");
  const creditInput = document.getElementById("credit");
  const gradeInput = document.getElementById("grade");

  // Getting Index of Select option and text of the grade
  const selectedGradeIndex = gradeInput.selectedIndex;
  const selectedGrade = gradeInput.options[selectedGradeIndex].textContent;
  // const selectedGPAValue = gradeInput.value;

  const courseName = courseNameInput.value;
  const credit = parseFloat(creditInput.value);
  const gpaValue = parseFloat(gradeInput.value);

  if (courseName === "" || isNaN(credit) || isNaN(gpaValue)) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  if (editingIndex === -1) {
    // Adding a new course
    const course = {
      name: courseName,
      credit: credit,
      grade: selectedGrade,
      gpaValue: gpaValue,
    };

    courses.push(course);
  } else {
    // Editing an existing course
    // courses[editingIndex] = {
    //   name: courseName,
    //   credit: credit,
    //   grade: grade,
    // };

    // Editing an existing course
    courses[editingIndex].name = courseName;
    courses[editingIndex].credit = credit;
    courses[editingIndex].grade = selectedGrade;
    courses[editingIndex].gpaValue = gpaValue;

    // Reset editingIndex
    editingIndex = -1;

    // Change the button back to "Add Course"
    addButton.textContent = "Add Course";
    addButton.style = "background-color: #6FB262";
  }

  // Clear the input fields
  courseNameInput.value = "";
  creditInput.value = "3";
  gradeInput.value = 4.0;

  updateCourseList();
  calculateCGPA();
  //   console.log("Add");
}

function editCourse(index) {
  const courseNameInput = document.getElementById("courseName");
  const creditInput = document.getElementById("credit");
  const gradeInput = document.getElementById("grade");

  // Clear the input fields
  courseNameInput.value = "";
  creditInput.value = "";
  gradeInput.value = "";

  editingIndex = index;
  const editedCourse = courses[index];

  // Populate input fields with the values of the selected course
  document.getElementById("courseName").value = editedCourse.name;
  document.getElementById("credit").value = editedCourse.credit;
  //   document.getElementById("grade").value = parseFloat(editedCourse.grade);

  const gradeSelect = document.getElementById("grade");
  for (let i = 0; i < gradeSelect.options.length; i++) {
    if (parseFloat(gradeSelect.options[i].value) === editedCourse.gpaValue) {
      gradeSelect.selectedIndex = i;
      break;
    }
  }

  // Optionally, you can focus on the courseName input for a better user experience
  document.getElementById("courseName").focus();

  // Remove the edited course from the array
  //   courses.splice(index, 1);

  // Change the button to "Edit Course"
  document.getElementById("addButton").textContent = "Edit Course";
  document.getElementById("addButton").style = "background-color: #DE983B";

  // Update the course list and CGPA
  //   updateCourseList();
  //   calculateCGPA();
  //   console.log("Edit");
}

function deleteCourse(index) {
  // Prompt the user for confirmation before deleting the course
  const confirmation = confirm("Are you sure you want to delete this course?");

  if (confirmation) {
    // Remove the selected course from the array
    courses.splice(index, 1);

    // Reset editingIndex
    editingIndex = -1;

    // Change the button back to "Add Course"
    document.getElementById("addButton").textContent = "Add Course";
    document.getElementById("addButton").style = "background-color: #6FB262";

    // Update the course list and CGPA
    updateCourseList();
    calculateCGPA();
    // console.log("Delete");
  }
}

// function updateCourseList() {
//   const courseListContainer = document.getElementById("courseList");
//   courseListContainer.innerHTML = "<h3>Course List:</h3>";

//   const ul = document.createElement("ul");
//   courses.forEach((course) => {
//     const li = document.createElement("li");
//     li.textContent = `${course.name} - Credits: ${course.credit}, Grade: ${course.grade}`;
//     ul.appendChild(li);
//   });

//   courseListContainer.appendChild(ul);
// }

function updateCourseList() {
  const courseTableBody = document
    .getElementById("courseTable")
    .getElementsByTagName("tbody")[0];

  // Clear the table body
  courseTableBody.innerHTML = "";

  if (courses.length === 0) {
    // Show the message row
    // Add a "No Courses" message row
    const noCourseRow = courseTableBody.insertRow();
    const noCourseCell = noCourseRow.insertCell();
    noCourseCell.colSpan = 4; // Set colspan to the number of columns in your table
    noCourseCell.textContent = "No Courses";
    noCourseCell.style.textAlign = "center"; // Center the text
  } else {
    // Render courses
    //   courses.forEach((course) => {
    courses.forEach((course, index) => {
      const row = courseTableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      cell1.textContent = course.name;
      cell2.textContent = course.credit;
      cell3.textContent = course.grade;

      // Create a div to wrap the Edit and Delete buttons
      // const buttonsContainer = document.createElement("div");
      // buttonsContainer.classList.add("buttons-container");

      // Add Edit button
      const editButton = document.createElement("button");
      // editButton.setAttribute("id", "editButton");
      editButton.classList.add("edit");

      // editButton.textContent = "Edit";
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.addEventListener("click", () => editCourse(index));
      cell4.appendChild(editButton);
      // buttonsContainer.appendChild(editButton);

      // Add Delete button
      const deleteButton = document.createElement("button");
      // editButton.setAttribute("id", "deleteButton");
      deleteButton.classList.add("delete");

      // deleteButton.textContent = "Delete";
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteButton.addEventListener("click", () => deleteCourse(index));
      cell4.appendChild(deleteButton);
      // buttonsContainer.appendChild(deleteButton);

      // Append the buttons container to the cell
      // cell4.appendChild(buttonsContainer);

      // console.log(index);
    });
  }

  //   console.log("UpdateList");
}

// Function to calculate and display total credit hours earned
// function calculateTotalCredit() {
//   const totalCreditElement = document.getElementById("totalCredit");
//   const totalCredit = courses.reduce(
//     (total, course) => total + course.credit,
//     0
//   );
//   totalCreditElement.textContent = `Credit earned: ${totalCredit}`;
// }

function calculateCGPA() {
  // calculateTotalCredit();
  // const totalCreditElement = document.getElementById("totalCredit");

  // Calculate total Credits
  totalCredits = courses.reduce((total, course) => total + course.credit, 0);
  const weightedGrades = courses.reduce(
    (total, course) => total + course.credit * course.gpaValue,
    0
  );
  // Calculate CGPA
  cgpa = (weightedGrades / totalCredits).toFixed(2);

  document.getElementById("cgpa").textContent = courses == 0 ? "0.00" : cgpa;
  document.getElementById("totalCredit").textContent =
    courses == 0 ? "0" : totalCredits;

  // totalCreditElement.textContent = `Credit earned: ${totalCredit}`;
}

function saveData() {
  // Check if there are courses available
  if (courses.length === 0) {
    alert("No courses available to save.");
    return;
  }

  // Create a JSON object with courses and CGPA
  const dataToSave = {
    courses: courses,
    cgpa: cgpa,
    credits: totalCredits,
  };
  console.log(dataToSave);

  // Convert the data to JSON string
  const jsonData = JSON.stringify(dataToSave, null, 2); // Using null and 2 for indentation

  // Create a Blob object
  const blob = new Blob([jsonData], { type: "application/json" });

  // Create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "course_data.json";

  // Append the link to the body and click it programmatically
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);
}

// Add a click event listener to the Save button
document.getElementById("saveButton").addEventListener("click", saveData);

// Function to trigger file input click event
function importData() {
  document.getElementById("fileInput").click();
}

// Function to handle file input change event
function handleFileInputChange(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      try {
        const jsonData = JSON.parse(e.target.result);
        // Assuming the JSON structure has "courses" and "cgpa" properties
        const importedCourses = jsonData.courses;
        const importedCGPA = jsonData.cgpa;
        const importedCredits = jsonData.credits;

        // Update the courses array with the imported data
        courses = importedCourses;

        // Update the CGPA display
        cgpa = importedCGPA;

        // Update the Total Credits display
        totalCredits = importedCredits;
        // (You may have a function that updates the UI with the calculated CGPA)
        updateCourseList();
        calculateCGPA();

        alert("Data imported successfully!");
      } catch (error) {
        console.error("Error parsing JSON file:", error);
        alert("Error importing data. Please check the file format.");
      }
    };

    reader.readAsText(file);
  }
}
// Add a click event listener to the Import button
document.getElementById("importButton").addEventListener("click", importData);

// Add a change event listener to the file input
document
  .getElementById("fileInput")
  .addEventListener("change", handleFileInputChange);

// Read the Json Grade Scales file
document.addEventListener("DOMContentLoaded", function () {
  fetch("grade_scales.json") // Replace with the correct path to your JSON file
    .then((response) => response.json())
    .then((data) => {
      gradeScales = data.gradeScales;
      displayGradeScales(gradeScales);
      populateGradeSelect(gradeScales);
    })
    .catch((error) => console.error("Error fetching and parsing JSON:", error));
});

// Display the GradeScales into the HTML GradeScalesTable
function displayGradeScales(gradeScales) {
  const tableBody = document.querySelector("#GPAScaleTable tbody");

  gradeScales.forEach((scale) => {
    const row = tableBody.insertRow();
    const gradeCell = row.insertCell(0);
    const gpaValueCell = row.insertCell(1);
    // const scaleDescriptionCell = row.insertCell(2);

    gradeCell.textContent = scale.grade;
    gpaValueCell.textContent = scale.gpaValue;
    // scaleDescriptionCell.textContent = scale.scaleDescription;
  });
}

// Passing the GradeScales into the Select-Option in HTML
function populateGradeSelect(gradeScales) {
  const gradeSelect = document.getElementById("grade");

  gradeScales.forEach((scale) => {
    const option = document.createElement("option");
    option.value = scale.gpaValue;
    option.textContent = scale.grade;
    gradeSelect.appendChild(option);

    // Set 4.0 as the default selected option
    if (scale.gpaValue === 4.0) {
      option.selected = true;
    }
  });
}

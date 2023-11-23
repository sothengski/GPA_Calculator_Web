# GPA Calculator Web

A simple GPA (Grade Point Average) calculator implemented with HTML, CSS, and JavaScript. Calculate and manage your courses, credits, and GPA effortlessly.

## Features

- Add and manage multiple courses with credit hours and grades.
- Calculate cumulative GPA based on entered course details.
- Import and export your course data in JSON format.
- Responsive design for a seamless user experience.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/sothengski/GPA_Calculator_Web.git
   cd GPA_Calculator_Web

## File Structure
```plaintext
GPA_Calculator_Web/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Screenshots

Add Course
![Add Course Screenshot](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Add.png)[(GitHub)](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Add.png)

Edit Course
![Edit Course Screenshot](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Edit.png)[(GitHub)](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Edit.png)


Delete Course
![Edit Course Screenshot](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Delete.png)[(GitHub)](https://github.com/sothengski/GPA_Calculator_Web/blob/f6438820e605f17759ba56874722ccbdecf762c5/Delete.png)

## Example JSON Object:

```json
{
  "courses": [
    {
      "name": "Course 1",
      "credit": 3,
      "grade": 4.0
    },
    {
      "name": "Course 2",
      "credit": 2,
      "grade": 3.7
    },
    // ... (additional course objects) ...
  ],
  "cgpa": 3.85,
  "credits": 5
}
```

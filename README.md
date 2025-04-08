# Smart Bridge Weekly Assignments

This repository contains a series of weekly tasks completed as part of the Smart Bridge program. Each week introduces different technologies and concepts, building from basic web development to full-stack applications using React.js and Express.js.

## Table of Contents

- [Week 1: HTML & CSS Basics](#week-1-html--css-basics)
- [Week 2: JavaScript Fundamentals](#week-2-javascript-fundamentals)
- [Week 3: React.js with Tailwind CSS](#week-3-reactjs-with-tailwind-css)
- [Week 4: Full-Stack Development with React.js & Express.js](#week-4-full-stack-development-with-reactjs--expressjs)
- [Getting Started](#getting-started)

---

## Week 1: HTML & CSS Basics

**Objective:** Develop foundational skills in HTML and CSS by creating structured and styled web pages.

### Tasks:

1. Create a webpage with:
   - A title
   - A main heading
   - Two paragraphs

2. Add a centered image with a caption below it.

3. Style all paragraphs with:
   - A different font family
   - Adjusted line height
   - Text alignment

4. Design a styled button with:
   - Padding
   - Border
   - Hover effect

5. Create:
   - A simple table with three columns and three rows
   - A basic form with two input fields and a submit button

---

## Week 2: JavaScript Fundamentals

**Objective:** Strengthen understanding of core JavaScript concepts including variables, control structures, loops, and functions.

### Tasks:

1. Declare a variable `age` and assign it a value of `25`. Then declare `isAdult` as `true` if `age` is 18 or more, otherwise `false`.

2. Given `x = 10` and `y = 5`, perform:
   - Addition
   - Multiplication
   - Modulus

3. Write a program to check whether a number `n` is even or odd and store the result.

4. Use a `for` loop to store numbers from 1 to 5 in an array.

5. Write a function `square` that takes a number as input and returns its square.

---

## Week 3: React.js with Tailwind CSS

**Objective:** Develop interactive user interfaces using React.js functional components with Tailwind CSS for styling.

### Tasks:

1. Create a `TextUpdater` component:
   - An input field that displays text as the user types using the `useState` hook.

2. Build a React form:
   - A text input and a submit button that logs the input value to the console.

3. Develop a `UserCard` component:
   - Takes `name` and `email` as props.
   - Displays them inside a styled card using Tailwind CSS.

4. Create a `Button` component:
   - Styled with Tailwind (blue background, white text, rounded corners).
   - Log `"Button clicked!"` on click.

5. Build a `LoginForm` component:
   - Email and password fields using `useState`.
   - Display an alert with entered details upon submission.

---

## Week 4: Full-Stack Development with React.js & Express.js

**Objective:** Combine frontend and backend development using React.js and Express.js to build a full-stack web application.

### Frontend Tasks (React.js + Tailwind CSS):

1. Build a responsive landing page with:
   - Hero section (title & description)
   - Product section (list of products with images, names, prices)
   - Responsive navbar
   - Footer with social media links

2. Create a product details page:
   - Shows more information when a product is clicked.

### Backend Tasks (Express.js):

1. Set up an Express.js server:
   - Run on port `5000`.
   - Middleware to parse JSON requests.

2. Define a GET route `/welcome`:
   - Returns `{ message: "Welcome to Express!" }`.

3. Create an in-memory array to store users (`id`, `name`, `email`) and implement routes:
   - `GET /users`
   - `POST /users`
   - `PUT /users/:id`
   - `DELETE /users/:id`

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/pra9711/smartbridge-assignment.git

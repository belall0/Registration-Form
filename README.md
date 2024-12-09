# Registration Form

This project is a user registration form that allows users to sign up by providing their personal information. The form includes validation for various input fields and integrates with a database to store user data. Additionally, it fetches and displays actors born on the user's birthday using the IMDb API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Integration](#api-integration)
- [Database](#database)
- [License](#license)

## Features

- User registration with validation for full name, username, email, date of birth, phone number, address, password, and profile image.
- Fetch and display actors born on the user's birthday using the IMDb API.
- Store user data in a MySQL database.
- Responsive design using Bootstrap.

## Technologies Used

- HTML, CSS, JavaScript
- PHP
- MySQL
- Bootstrap
- IMDb API

## Installation

1. Clone the repository.
2. Create a MySQL database and import the `users.sql` file.
3. Update the database connection parameters in inc/DB_Ops.php.
4. Run the project on a local server (e.g., XAMPP).

## Usage

1. Open the project in a web browser. (e.g., http://localhost/registration-form)
2. Fill in the registration form with your personal information.
3. Click the "Register" button to submit the form.
4. View the list of actors born on your birthday.
5. If the form is valid, your data will be stored in the database.
6. If the form is invalid, error messages will be displayed.

## API Integration

The project integrates with the IMDb API to fetch and display actors born on the user's birthday. The relevant code can be found in scripts/main.js.

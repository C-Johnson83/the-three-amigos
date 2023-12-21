# the-three-amigos
Repository for Project 2 - 3Dsettings hub

## Description
Welcome to The Three Amigos, a repository for Project 2 - 3Dsettings Hub.  
 This application is designed for 3D printing enthusiasts who want a centralized hub for managing their printers, filaments, and settings.   
 The Three Amigos provides a user-friendly interface to easily make adjustments and modifications to your 3D printing setup.

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## User Story
User Story
AS a 3d printing enthusiast  
I WANT to see my different printers, filaments, and settings  
SO that I can make adjustments and modifications easily

## Acceptance Criteria
WHEN I start the application  
THEN I will see the homepage with a login button  
WHEN I press the login button  
THEN I am taken to the login page to login or sign-up  
WHEN I fill out the sign-up fields and press the button  
THEN I am taken to the profile page where I can add my printers, filaments, and go to settings  
WHEN I fill out the login and press the button  
THEN I am taken to the profile page and can see any previously added printers, filaments, and go to settings  
WHEN I press add a printer  
THEN I am taken to the add printer page  
WHEN I fill out the form to add a printer and press the button
Then I am taken back to the profile page and my printer is now listed  
WHEN I press add filament  
THEN I am taken to the add filament page  
WHEN I fill out the form to add a filament and press the button  
THEN I am taken back to the profile page and my filament is now listed  
WHEN I press the settings button  
THEN I am taken to the settings page  
AND a table of my settings is visible and an add settings button  
WHEN I press the add settings button  
THEN a form appears below the settings table  
WHEN I fill out the form to add the settings  
THEN the new settings are added to the table




## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/c-johnson83/the-three-amigos.git
2. Change to the project directory:
    ```bash  
    cd the-three-amigos 
3. Install the required dependencies using npm:  
    ```bash
    npm install   
4. Launch mysql:  
    ```bash
    mysql -u root -p  
5. When prompted, enter your password    
6. To create the database  
    ```bash
    source db/schema.sql;  
7. Exit mysql   
    ```bash
    exit;  
8. Create a .env file (this file contains sensitive information and is not included in the repository. This is why you must create your own)
    ```bash
    touch .env  
9. Enter the text editor for the .env file 
    ```bash
     nano .env
10. Include the DB_Name, DB_USER, and DB_PASSWORD with your user and password
    ```bash
     DB_NAME='3d_printing_db'  
     DB_USER='your user name here'  
     DB_PASSWORD='your password here'
11. Exit the editor 
    ```bash
    Ctrl + x   
12. Confirm the changes with 'Y' then press enter

13. Seed the data (load the data into the tables)
    ```bash
    npm run seed  
14. Run the following command to start the app
    ```bash
    npm start  
15. Access the application  
    Open your web browser and navigate to http://localhost:3001


## Usage
The Three Amigos provides a comprehensive platform for managing 3D printing setups.   
Follow the user-friendly interface to add printers, filaments, and settings effortlessly.
   

## Features
1. User Authentication  
    Homepage:  
    Displays a login button.  
    Login Page:  
    Allows users to log in or sign up.  
    Sign-up Page:  
    Enables users to create a new account.  
             
2. Profile Management  
Profile Page:  
Lists previously added printers and filaments.  
Provides access to settings.  
3. Printer Management  
Add Printer Page:  
Allows users to add a new printer.  
Form submission redirects to the profile page.  
4. Filament Management  
Add Filament Page:  
Enables users to add a new filament.  
Form submission redirects to the profile page.  
5. Settings Management  
Settings Page:  
Displays a table of user settings.  
Provides an "Add Settings" button.  
Add Settings Form:  
Appears dynamically below the settings table.  
Enables users to add new settings.


## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]  






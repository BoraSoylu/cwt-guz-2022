# ESOGU Client Side Web Technologies 2022 Fall Project 5 Student Management System in Vanilla Javascript

## 

## Setup development environment:
1. run "npm install" in root directory
2. run "npm run dev" in root directory

These commands install the necessary npm packages and starts the following packages in parallel with watch mode on: {json-server, webpack, tailwindcss, live-server}. It also resets the data.json (the database that json-server uses, holds mock student data) to the original file provided with the assignment. To start the development environment without resetting the data.json file, run 'npm run dev: no-db-reset' instead of the original command in step 2.

**Reminder:** You need node.js installed to use npm.

## Set server url: 

1. Set "BASE_URL" in src/config.json.

## Packages used:

**Disclaimer:** None of these packages are JavaScript frameworks and none of them include business logic that trivialises the skills that this assignment is testing. All of them are industry standard tools used to streamline production and write better maintainable and readable code. All descriptions are taken from relevant npmjs.com pages of the packages.
  
- **eslint:** ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. 
- **json-server:** Get a full fake REST API with zero coding in less than 30 seconds (seriously). **Required by assignment**
- **live-server:** This is a little development server with live reload capability. Use it for hacking your HTML/JavaScript/CSS files, but not for deploying the final site.
- **npm-run-all:** A CLI tool to run multiple npm-scripts in parallel or sequential.
- **tailwindcss:**  A utility-first CSS framework for rapidly building custom user interfaces. 
- **webpack:** Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 
- **webpack-cli:** The official CLI of webpack.
# GitHub API

#### An App for viewing people's GitHub Repositories

#### Made by Charles Ewel

## Description

This webapp allows users to enter a username and see the public GitHub repos that person has

## Instructions

* Clone the repository
* If on a mac, install node.js on your machine by running >"brew install node" (must have Homebrew installed). if on PC or Linux google node.js, go their website and follow the instructions there. This will install npm automatically
* In the console, run ">npm install bower -g" to install bower globally
* In the console, run ">npm install" to set up the node modules
* In the console, run ">bower install" to set up the bower components
* Create a file called .env and write: exports.apiKey = "YOUR_ACCESS_TOKEN"; where YOUR_ACCESS_TOKEN is the personal access token you have for the GitHub API
* In the console, run ">gulp build; gulp serve" to launch the website

## Specs

The program should handle: | Example Input | Example Output
----- | ----- | -----
Search by User Name | Charles Ewel | Returns a list of public github repos by charlesewel


## Technologies Used

* Node.js
* Bower
* GitHub API

## Known Bugs

None

### License

Licensed under the MIT License.

# Team-member-ID-fabricator
This is a command line application that assists organizations in helping build team member ID cards

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

[Link to a video walkthrough](https://drive.google.com/file/d/1BDtj8ZrZlY2uwJdoFanXE-VP1qu8OP1V/view)

<img width="1329" alt="Screen Shot 2022-07-20 at 3 39 26 PM" src="https://user-images.githubusercontent.com/105159702/180067553-e6696637-f87f-4b97-a5d2-06287111a544.png">

## How to use this app

You will clone the code from the repo and then run the command node index from the command line.  You will be presented with a serires of prompts.
Upon answering the prompts you will be presented wtih your new cards and they will be available in an index.html file in the dist folder


## Requirements
[Node](https://nodejs.org/en/)

[Inquirer](https://www.npmjs.com/package/inquirer)

# E-voting-system
<<<<<<< HEAD
This is an online zetech voting system 
This is a campus based online voting system used by students to vote for their required leader and see a real time system.
## Table of Contents
- [E-voting-system](#E-voting-system)
  - [Table of Contents](#table-of-contents)
  - [Problem Statement](#problem-statement)
  - [Objectives](#objectives)
  - [Users](#users)
  - [Technologies](#technologies)
  - [Contributing Guide](#contributing-guide)
  - [REQUIREMENTS SPECIFICATION](#requirements-specification)
    - [Technical Requirements](#technical-requirements)
    - [Non-functional requirements](#non-functional-requirements)
    - [Functional Requirements](#functional-requirements)
      - [Users Module](#users-module)
      - [E-voting-system-log in system](#E-voting-system-log in system)
      - [pages module](#pages-module)
  - [Software Design Description](#software-design-description)
    - [User Interface Design](#user-interface-design)
      - [Login Page](#login-page)
      - [Registration Page](#registration-page)
      - [campaign Page](#campaign-page)
      - [voting Page](#voting-page)
    - [Database package](#database-package)
      - [Users Table](#users-table)
      - [access Table](#access-table)

## Problem Statement
An E-voting system that allows student to register,follow campaigns,commenting and voting their learders in. This will reduce time wastage ,and it will increase transparency to voters because its a real time voting system. Currently students vote using a voting website that is shared by a number of university and its not transparent and it doesn't allow the votes to know their leaders batter.This will reduce the rate of cheating among the students during the voting time.

## Objectives
The main objective of this project is to create an E-voting system  web based application. This can broken down into:
1. To create a users management module that will allow registration of students for voting purposes,login.
2. To create a  system that will allow users to follow along in the campaing.
3. To create an voting system log in system  that will allow users to votes and campaign.
4. To create an event management module that will allow creation of new events, notification and archiving of due events.
5. To create ideation module that will creation of proposal for new ideas.
6. to create a real time project that when someone votes they see their code.

## Users
1. campus students
2. System administrators/moderators.

## Technologies
The system we build on JAM stack with the following technologies
- Javascript - React.......node js
- HTML,CSS
- mango db

## Contributing Guide
To contribute to this project follow the steps below.
1. Fork this repository to your account.
2. clone the repository to your local machine.
3. Create a branch with the name of feature you want to add or a issue you want to fix.
4. Add the feature and push to github.
5. Create a pull request with the develop branch.

## REQUIREMENTS SPECIFICATION

### Technical Requirements
You need to use a phone or laptop to access the website.

### Non-functional requirements
- Data should be encrypted.
- The system should be light weight for ease of access and should within two seconds.
- Should be responsive to different screen sizes.

### Functional Requirements

#### Users Module
- Registration
- login
- Password reset
- verify email
- profile update

#### campaing module
- log in
- upload your campaign

#### president module
- you just get in to the page and vote 

#### Clubs/Societies Module
- view club
- create new club
- Enroll/unenroll to/from a club
- add/delete/edit Members
- Invite a friend


## Software Design Description

### User Interface Design


#### Landing Page





The landing page is expected to look as shown below.
![Landing Page](./documentation/landing.PNG)
![Landing Page](./documentation/landing-page.png)

#### Dashboard

#### Login Page

The Login Page Design:
![Login Page](documentation/login-page.png)

#### Registration Page

The sign up design:
![Sign Up page](documentation/sign-up-page.png)

#### Create Event Page

### Database Design

#### Users Table
- Id - This will be auto increment which will the unique identifier for the user
- email - This will be a school email
- name - User given name
- username - will be unique for each user
- gender - This should be male, female or other
- password - should be atleast 8 characters
- is_staff - a boolean value identifying whether a user is a staff or not.
- is_super_admin - a boolean value identifying whether a user is super admin or not. False by default.
- last_updated - Will be a timestamp.
- campus - Identify the users campus.
#### Events Table
- Event_id
- Date
- Time
- Added_by
- Title
- Description
- Last_updated
=======
This is an online zetech polls
>>>>>>> 78568ebaf0637a4574776bf11f9060c2008beabf

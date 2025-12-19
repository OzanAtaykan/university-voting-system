# University Voting System

Full-stack web application for managing course representative elections

## Overview

This platform will allow university staff to manage the entire election lifecycle: candidate nominations to data analysis; while providing students with a secure and anonymous way to vote

## Technical Stack
* **Backend:** Django (Python) - Chosen for its robust security (CSRF/SQLi protection)
* **Frontend:** VueJS - Handles the reactive user interface
* **Database:** SQLite3 - A lightweight, file-based database for development
* **Data Visualization:** Chart.js (integrated with Vue) for turnout analytics

## Login
### Existing users
Everyone logs in as either a student (normal user) or staff (admin user). To log in, you need to give in your email and password.

### New users
When creating an account, you first need to choose whether you're logging as a student or member of staff

### Creating an account as student
Students need to provide:

- personal details (first and last name, email, profile picture?)
- school details (university name, course name, year group, type of degree?)
- account details (password, maybe display name?)

### Creating an account as staff
Staff members need to provide:

- personal details (first and last name, email, profile picture?)
- school details (university name, course name, year group, type of degree?)
- account details (password, maybe display name?)
#### Once you're logged in
Students are the default users, they can see information about their university and any course rep electioncs

Staff users can start election cycles, choose which students will be candidates, and end election cycles.

At the end of elections, all users will see the results, and staff users can see an analysis of the election such as the turnout, which dates people voted the most, etc.

### Login Suggestions
learn to use email API and send verification code?
use google API to get list of universities? instead of letting user type it out
maybe do this "list of universiteis" per country?

## Installation
1.  **Clone Repo:** `git clone https://github.com/OzanAtaykan/university-voting-system.git`
2.  **Backend:**
    * `python -m venv venv`
    * `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
    * `pip install -r requirements.txt`
    * `python manage.py migrate`
3.  **Frontend:**
    * `cd frontend`
    * `npm install`
    * `npm run serve`

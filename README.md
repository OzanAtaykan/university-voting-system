# University Voting System

Full-stack web application for managing course representative elections

## Overview

This platform will allow university staff to manage the entire election lifecycle: candidate nominations to data analysis; while providing students with a secure and anonymous way to vote

## Technical Stack
* **Backend:** Django (Python) - Chosen for its robust security (CSRF/SQLi protection)
* **Frontend:** VueJS - Handles the reactive user interface
* **Database:** SQLite3 - A lightweight, file-based database for development
* **Data Visualization:** Chart.js (integrated with Vue) for turnout analytics

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

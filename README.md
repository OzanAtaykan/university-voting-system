# university-voting-system

A website that will allow course representatives from different universities to run and gather their votes

# Technologies in use  
- HTML 
- CSS
- VueJS 
- SQLite3 (database)
- Python library: (djago or flask or maybe javascript framework?)

# Order of operations (how the app works)
## Login 
### Existing users
Everyone logs in as either a student (normal user) or staff (admin user). To log in, you need to give in your email and password. 

### New users
When creating an account, you first need to choose whether you're logging as a student or member of staff

#### Creating an account as student
Students need to provide:
- personal details (first and last name, email, profile picture?)
- school details (university name, course name, year group, type of degree?)
- account details (password, maybe display name?)

#### Creating an account as staff
Staff members need to provide:
- personal details (first and last name, email, profile picture?)
- school details (university name, course name, year group, type of degree?)
- account details (password, maybe display name?)

### Once you're logged in
Students are the default users, they can see information about their university and any course rep electioncs

Staff users can start election cycles, choose which students will be candidates, and end election cycles. 

At the end of elections, all users will see the results, and staff users can see an analysis of the election such as the turnout, which dates people voted the most, etc.


### Login Suggestions
- learn to use email API and send verification code?
- use google API to get list of universities? instead of letting user type it out
- maybe do this "list of universiteis" per country?

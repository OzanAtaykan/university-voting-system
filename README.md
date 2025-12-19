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

### Login Suggestions (extra challenges for ourselves)
- learn to use email API and send verification code?
- use google API to get list of universities? instead of letting user type it out
- maybe do this "list of universiteis" per country?


## Main Page
This is what users see after log-in. The main functionaility here is the following:
- User Profile/Settings: this shows the user's details, and the log out button
- Candidates Dashboard: this shows all courses/subjects/classes the user is involved in
- Notices (new): this is a like a feed page where users can see announcements from staff and candidates
- Admin functions: this is only availabel for staff, and this is where admin funcions such as "end election cycle" are found


## User Profile/Settings
This is where users see their personal data (name, uni, etc). Users can also click a "log out" button.

### Settings Suggestions (extra challenges for ourselves)
- Aesthetics: users can also choose a dark mode or change the font size of the website
- Users can upload a profile picture
- Users can change their course (with approval from staff members)

## Candidates Dashboard
### Who do users vote for?
Users vote for candidates for their course representative. Users will see candidates from their university and their course.

### How to become candidate?
Users can send requests to staff members asking to be a candidate. In the Admin functions page, staff members can accept or reject requests. If a user's request is rejected, they cannot send any more requests for that election cycle.

### How do users vote
Using HTTPS (secure protocol), the frontend encrypts the user's vote, sends it to the backend where its decrypted and then stored on database.
The user can chose from a selection of available candidates
Then the user clicks "vote".
A time token is created, to record when the vote was made, and a request (which includes the userID, candidadeID and time_token) is encrypted and then sent.

Plan One: Centralised Version
-> All votes are stored on the database
-> To add some security, all data inside database should be encrypted 
-> At the end of election cycles, vote count is tallied and election data deleted (so data leaks don't expose previous elections)

Plan Two: Blockchain Version
-> Frontend communicates with Smart Contracts to register votes on the block chain
-> We still have to encrypt outgoing messages from frontend 
-> At the end of election cycle, Smart Contracts can start rejecting new votes 
-> Then the block chain can be searched to count up the votes


## Notices (new)
### For candidates...
As a candidate, you can make a "post" to users in the same university and course as you. This helps you try and convince people to vote for you. 
If we want to make this sophisticated, people can send photos, comment and upload documents to each post.

### For staff...
As a staff member, you can also make posts. When you start an election cycle, an automatic post is made announcing the start of the election. The same goes for when you end an election. Staff can also make their own custom posts. Staff posts are sent to everyone in the same university, no matter their course.


## Admin Functions
This is the page with the tools only staff users can use. These tools primarily involve:
- Start/End election cycle
- Manage candidate requests
- Analyse previous election (view results of previous elections)


### Election cycles
People can only vote when there's an actual election. The staff member is responsible for starting an election cycle. The staff member must chose a date and time to officially start and officialy end. Any votes made after the official end date and time will be ignored. An automatic post should be made when the election begins or ends.

### Manage candidate requests
Aspiring candidates must send requests to staff members. Each candidate will only be able to stand for their course, so their request goes to a staff member also in that course. When a staff member rejects or accepts a request, the user should be notified. Those who are accepted are allowed to use additional functionality (such as making posts) whilst the election happens. After elections, all candidates are stripped of their candidate status.

### Analyse previous election (view results of previous election)
As soon as an election ends, staff members can see and share the results. Staff can also see the percentage turnout (how many people that could vote did actually vote), at which dates and time people voted the most, etc.
Staff can also check the results of previous elections (we will store previous elections in database).
Staff will **NOT** be able to see who users voted for.


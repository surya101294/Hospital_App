# Hospital (FullStack)

# TechStack
 # Front-End
- HTML
- CSS
- JavaScript
- React

# Back-End
- NodeJS
- Express
- MongoDB

# External CSS Library
-Material UI

#Front-End Deployment - vercel
#Back-End Deployment - Cyclic 

# Homepage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230497963-1c596709-0057-4622-9402-d57619c0b1c0.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498140-3a3e2fdb-7e24-4c07-9e60-080b8183d78a.gif"/></td>
  </tr>
</table>

# SignUpPage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498679-7d1d19db-b04e-491c-9392-248a0ae749cb.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498764-9530c1bd-93b7-418a-baea-9e25dd8f5013.gif"/></td>
  </tr>
</table>

# SignInPage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498644-24bd3a3f-ebd9-4bca-9e80-e4adef6b236e.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498785-cbd706d9-0376-49a1-ad45-c11db35de77e.gif"/></td>
  </tr>
</table>

# CreateAppointmentPage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498997-d06e8da6-e8a8-458d-a4a5-bdb454a763f3.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230498853-4583ba32-1013-4b26-8fbd-be38ac7a7254.gif"/></td>
  </tr>
</table>


# BookAppointmentPage
<table>
  <tr>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230499025-b6257a30-7a08-418a-b2a0-a9d2df04fe09.png"/></td>
    <td valign="top"><img src="https://user-images.githubusercontent.com/112858852/230499040-fc8dfc9a-63f2-48b2-a38a-4296eaa8a81f.png"/></td>
  </tr>
</table>
## `**Problem Statement**`

- The objective is to create a Full Stack application using **React** as frontend and **NEM** as backend which facilitates seamless booking of medical appointments with doctors by the patients.
- App should have the following routes
    - Signup & Login
    - Create Appointments
    - Book Appointments

---

## **`Signup & Login`**

- This route should have a login and register form, which the user should be able to toggle between login and register, and the corresponding form should be shown.
    
   
   

- This user should be prompted by a signup form, where the user will enter the following credentials
    - Email
    - Password
    - Confirm Password
- On form submit store this credential in your backend using the API “**/signup**”.
- Follow all the coding standards, hash the password using any encrypting library such as “**bcrypt**” or “**argon2**”  before storing in database.

- This user should be prompted by a login form, where the user will enter the following credentials
    - Email
    - Password
- On form submit, match the entered credentials with the data stored in your backend (Verify both email and password) using the backend API “**/login**”
- On successful validation alert “**Login Successful**”, generate a token for the user using **jsonwebtoken** (store the token in **localStorage)**  and redirect the user to **Create Appointments** Route.
- On entering wrong credential, alert “**Invalid Credentials**” and re-prompt the user to enter valid credentials.

---

## **`Create Appointments Route`**

- The user should be prompted by an appointment form with the following details
    - Name
    - Image URL
    - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, Psychiatrist** as options)
    - Experience
    - Location
    - Date (Appointment creation date, populate from backend)
    - Slots (Number of slots available for the day)
    - Fee
- On form submit, store data in backend server on API “**/appointments**”.

## **`Book Appointments`**

- Fetch all the appointments posted from the backend server and list them in the form of cards.
- Sample API Response




- Your app should have the following functionalities and **should be implemented using backend.**
    - **Filter** by Specialization (**Cardiologist, Dermatologist, Pediatrician, Psychiatrist**)
    - **Sort** by date (based on the posted date)
    - **Search** by doctor name
    - **Pagination** (4 Cards per page)
- Each card should have a “**Book Now**” button, which when clicked, the number of slots for that particular doctor should decrement by 1.
- If the number of slots becomes 0, the Book Now button should be disabled.

---

## `**Backend`**

- Creating all relevant APIs for user auth, posting, and fetching appointments.
- Filter, Sort, Search and Pagination should be done through API. (**Doing this manually through fronted will be considered null and void**)
- Take care of all good practices - naming conventions, MVC structure etc.

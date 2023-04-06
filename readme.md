# Masai Hospital (FullStack)

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into the code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use **React** for Frontend.
- Use **Redux** for state management.
- Use **Chakra-UI or MUI** for styled components.
- Use **Node, Express, Mongo (NEM)** for backend.

---

## `**Problem Statement**`

- The objective is to create a Full Stack application using **React** as frontend and **NEM** as backend which facilitates seamless booking of medical appointments with doctors by the patients.
- Your app should have the following routes
    - Signup & Login
    - Create Appointments
    - Book Appointments

---

## **`Signup & Login`**

- This route should have a login and register form, which the user should be able to toggle between login and register, and the corresponding form should be shown.
    
    
    ![                                                          Toggling Signup and Login Form](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/374f7f3b-743d-437f-ae3f-531636bccc26/3.gif)
    
                                                              Toggling Signup and Login Form
    

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

---

## **`Book Appointments`**

- Fetch all the appointments posted from the backend server and list them in the form of cards.
- Sample API Response
    
    ```jsx
    [
    	{
    	  "name": "Jane Doe",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Dermatologist",
    	  "experience": 10,
    	  "location": "Los Angeles",
    	  "date": "2023-04-05T12:00:00.000Z",
    		"slots" : 2,
    	  "fee": 150
    	},
    	{
    	  "name": "Mark Johnson",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Pediatrician",
    	  "experience": 5,
    	  "location": "Chicago",
    	  "date": "2023-04-06T09:30:00.000Z",
    		"slots" : 1,
    	  "fee": 100
    	}
    ]
    ```
    

- The UI should look like

![                                                                             UI Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3dddd88-5054-43fc-a28b-d1d2105ca525/Masai_Hospital.png)

                                                                             UI Reference Image

- Your app should have the following functionalities and **should be implemented using backend.**
    - **Filter** by Specialization (**Cardiologist, Dermatologist, Pediatrician, Psychiatrist**)
    - **Sort** by date (based on the posted date)
    - **Search** by doctor name
    - **Pagination** (4 Cards per page)
- Each card should have a “**Book Now**” button, which when clicked, the number of slots for that particular doctor should decrement by 1.
- If the number of slots becomes 0, the Book Now button should be disabled.

---

## `**Backend`**

- Create all relevant APIs for user auth, posting, and fetching appointments.
- Filter, Sort, Search and Pagination should be done through API. (**Doing this manually through fronted will be considered null and void**)
- Take care of all good practices - naming conventions, MVC structure etc.

---

## `**Submission`**

- Please submit deployed link and GitHub link of code.
- **Deploy backend as well**.
- **Push your code into `masai-repo`, don’t submit personal repo links.**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

---

## `**Rubrics`**

- React
- Node, Express and Mongo
- Backend APIs and code structure
- Filter, Sort, Search, and Pagination functionality through backend.
- Pixel perfect UI.
- Code cleanliness.
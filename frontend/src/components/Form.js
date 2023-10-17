import React, { useState } from 'react';

import './Form.css';

export default function UserInformation() {
 
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userGender, setUserGender] = useState('');
  const [enjoyedLearning, setEnjoyedLearning] = useState(false);
  const [firstNameIsValid, setEnteredfirstNameIsValid] = useState(true);
  const [lastNameIsValid, setEnteredLastNameIsValid] = useState(true);
  const [emailIsValid, setEnteredEmailIsValid] = useState(true);


  async function handleForm(e) {
    e.preventDefault();

    if(firstName.trim() === ''){
      setEnteredfirstNameIsValid(false)
      return;
    }else if(lastName.trim() === ''){
      setEnteredLastNameIsValid(false)
      return;
    }else if(userEmail.trim() === ''){
      setEnteredEmailIsValid(false)
      return;
    }
  
    const usersData = {
      firstName,
      lastName,
      userEmail,
      userGender,
      enjoyedLearning
    };
  
    try {
      const response = await fetch('/api/user-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersData),
      });
  
      if (response.ok) {
        const userData = await response.json();
        console.log(userData);
      } else {
        console.error('Failed to send user data to the server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }  
  

  return (
    <div>
      <form className="info" onSubmit={handleForm}>
        <div>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            name='firstName'
            onChange={(e)=>{setFirstName(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name='lastName'
            onChange={(e)=>{setLastName(e.target.value)}}
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email Address:</label>
          <input
            type="text"
            name='userEmail'
            onChange={(e)=>{setUserEmail(e.target.value)}}
          />
        </div>
          {!firstNameIsValid && <p className='error-text'>Invalid First Name!</p>}
          {!lastNameIsValid && <p className='error-text'>Invalid Last Name!</p>}
          {!emailIsValid && <p className='error-text'>Invalid Email Address</p>}
          <label>Gender</label>
        <div className='radios'>
          <div>
            <label>
              <input
                type='radio'
                name='gender'
                value="male"
                onChange={()=> setUserGender('male')}
              />
              Male
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='gender'
                value="female"
                onChange={()=> setUserGender('female')}
              />
              Female
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='gender'
                value="other"
                onChange={()=> setUserGender('other')}
              />
              Other
            </label>
          </div>
        </div>
        <div>
            <label>
              I enjoyed learning <strong>useState</strong> Hook!
            </label>          
            <input
              type='checkbox'
              onChange={(e) => setEnjoyedLearning(e.target.checked)}
            />
        </div>
        <button type="submit">Submit</button>        
      </form>
    </div>
  );
}

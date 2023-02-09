import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'

export default function UserDetails() {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const response = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01`)
        const result = await response.json()
        console.log(result.data[0])
        setUser(result.data[0])
    }

  return (
    
    <div className='user-details-container'>
        <h1 className='content-heading'>User Details</h1>
        <div className='user-details-content'>
            <div className='imp-details-container'>
                <div className='user-image'>
                    <img src={user.image} />
                </div>

                <div className='user-primary-details'>
                    <div>
                        <span className='label'>First Name: </span>
                        <span>{user?.firstname}</span>
                    </div>
                    <div>
                        <span className='label'>Last Name: </span>
                        <span>{user?.lastname}</span>
                    </div>
                    <div>
                        <span className='label'>Gender: </span>
                        <span>{user?.gender}</span>
                    </div>
                    <div>
                        <span className='label'>Phone: </span>
                        <span>{user?.phone}</span>
                    </div>
                </div>
            </div>
            <div className='user-secondary-details'>
                <div>
                    <span className='label'>Birthday: </span>
                    <span>{user?.birthday}</span>
                </div>
                <div>
                    <span className='label'>Email: </span>
                    <span>{user?.email}</span>
                </div>
                <div>
                    <span className='label'>Website: </span>
                    <span>{user?.website}</span>
                </div>
                <div>
                    <span className='label'> Address: </span> 
                    <span>{user?.address?.buildingNumber
    }, {user?.address?.street
    }, {user?.address?.streetName
    }, {user?.address?.city
    }, {user?.address?.country} - {user?.address?.zipcode}
                    </span>
                </div>
            </div>   
        </div>
    </div>
  )
}

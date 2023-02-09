import React from 'react'
import { useState, useEffect } from 'react'

export default function CreditCardDetails() {

    const [card, setCard] = useState({})

    useEffect(() => {
        getCardDetails()
    }, [])

    const getCardDetails = async () => {
        const response = await fetch(`https://fakerapi.it/api/v1/credit_cards?_quantity=1`)
        const result = await response.json()
        console.log('credit card', result.data[0])
        setCard(result.data[0])
    }

  return (
    <div className='card-details-container'>
        <h1 className='content-heading'>Credit Card Details</h1>
        <div className='card-details-content'>
            <div className='card-details'>
                <span className='label'>Credit Card Owner: </span>
                <span>{card?.owner}</span>
            </div>
            <div className='card-details'>
                <span className='label'>Credit Card Type: </span>
                <span>{card?.type}</span>
            </div>
            <div className='card-details'>
                <span className='label'>Credit Card Number: </span>
                <span>{card?.number}</span>
            </div>
            <div className='card-details'>
                <span className='label'>Credit Card Expiration: </span>
                <span>{card?.expiration}</span>
            </div>
            
        </div>
    </div>
  )
}

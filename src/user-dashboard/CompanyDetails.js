import React from 'react'
import { useState, useEffect } from 'react'

export default function CompanyDetails() {

    const [company, setCompany] = useState({})

    useEffect(() => {
        getCompanyDetails()
    }, [])

    const getCompanyDetails = async () => {
        const response = await fetch(`https://fakerapi.it/api/v1/companies?_quantity=1`)
        const result = await response.json()
        console.log('company', result.data[0])
        setCompany(result.data[0])
    }

  return (
    <div className='company-details-container'>
        <h1 className='content-heading'>Company Details</h1>
        <div className='company-details-content'>
            <div className='imp-details-container'>
                <div className='company-image'>
                    <img src={company.image} />
                </div>

                <div className='company-primary-details'>
                    <div>
                        <span className='label'>Company Name: </span>
                        <span>{company?.name}</span>
                    </div>
                    {/* <div>
                        <span className='label'>Last Name: </span>
                        <span>{user?.lastname}</span>
                    </div> */}
                    <div>
                        <span className='label'>Email: </span>
                        <span>{company?.email}</span>
                    </div>
                    <div>
                        <span className='label'>Phone: </span>
                        <span>{company?.phone}</span>
                    </div>
                </div>
            </div>
            <div className='company-secondary-details'>
                {/* <div>
                    <span className='label'>Birthday: </span>
                    <span>{company?.birthday}</span>
                </div> */}
                <div>
                    <span className='label'>Vat: </span>
                    <span>{company?.vat}</span>
                </div>
                <div>
                    <span className='label'>Website: </span>
                    <span>{company?.website}</span>
                </div>
                <div>
                    <span className='label'> Address: </span> 
                    <span>{company?.contact?.address?.buildingNumber
    }, {company?.contact?.address?.street
    }, {company?.contact?.address?.streetName
    }, {company?.contact?.address?.city
    }, {company?.contact?.address?.country} - {company?.contact?.address?.zipcode}
                    </span>
                </div>
            </div>
            
              
        </div>
    </div>
    // <div>
    //     {(typeof company != "undefined") ? (
    //         <>  
            
    //             <img src={company.image} />
    //             <div>{company.name}</div>
    //             <div>{company.country}</div>
    //             {/* <div>{company.gender}</div>
    //             <div>{company.birthday}</div> */}
    //             <div></div>
    //             <div>{company.email}</div>
    //             {/* <div>{company.address}</div> */}
    //             <div>{company.phone}</div>
    //             <div>{company.website}</div>  
    //         </>
    //     ) : ('No data found') }
    // </div>
  )
}

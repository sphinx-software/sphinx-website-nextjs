import React from 'react'
import { Contact } from '../services/sendEmail'

export const ContactUsTemplate = (contact: Contact) => {
  return (
    `<div>` +
    `<div style="display: flex"><p><b>Name: </b></p><p>${contact.name}</p></div>` +
    `<div style="display: flex"><p><b>Company name: </b></p><p>${contact.companyName}</p></div>` +
    `<div style="display: flex"><p><b>Work email: </b></p><p>${contact.workEmail}</p></div>` +
    `${
      contact.phoneNumber &&
      `<div style="display: flex"><p><b>Phone number: </b></p><p>${contact.phoneNumber}</p></div>`
    }` +
    `<div style="display: flex"><p><b>Reason: </b></p><p>${contact.reason}</p></div>` +
    `</div>`
  )
}

export const ApplyJobTemplate = (
  positionID: string,
  positionName: string,
  name: string,
  email: string,
  cv_link: string,
  phone_number?: string
) => {
  return (
    `<div>` +
    `<div style="display: flex"><p><b style="padding-right: 7px">Position ID: </b></p><p>${positionID}</p></div>` +
    `<div style="display: flex"><p><b style="padding-right: 7px">Position Name: </b></p><p>${positionName}</p></div>` +
    `<div style="display: flex"><p><b style="padding-right: 7px">Full Name: </b></p><p>${name}</p></div>` +
    `<div style="display: flex"><p><b style="padding-right: 7px">Email: </b></p><p>${email}</p></div>` +
    `${
      phone_number &&
      `<div style="display: flex"><p><b style="padding-right: 7px">Phone number: </b></p><p>${phone_number}</p></div>`
    }` +
    `<div style="display: flex"><p><b style="padding-right: 7px">CV Link: </b></p><p>${cv_link}</p></div>` +
    `</div>`
  )
}

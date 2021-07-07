import React from 'react'

export const ContactUsTemplate = (name: string, company_name: string, work_email: string, reason: string, phone_number?: string) => {
  return `<div>`
    + `<div style="display: flex"><p><b>Name: </b></p><p>${name}</p></div>`
    + `<div style="display: flex"><p><b>Company name: </b></p><p>${company_name}</p></div>`
    + `<div style="display: flex"><p><b>Work email: </b></p><p>${work_email}</p></div>`
    + `${phone_number && `<div style="display: flex"><p><b>Phone number: </b></p><p>${phone_number}</p></div>`}`
    + `<div style="display: flex"><p><b>Reason: </b></p><p>${reason}</p></div>`
  + `</div>`
}

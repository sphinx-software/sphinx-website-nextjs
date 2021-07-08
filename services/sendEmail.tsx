import emailJs from 'emailjs-com'
import { emailConfig, tableConfig } from '../config'
import { ApplyJobTemplate, ContactUsTemplate } from '../ui/EmailContentTemplate'

emailJs.init(emailConfig.user_id)

export type Contact = {
  name: string
  companyName: string
  workEmail: string
  phoneNumber: string
  reason: string
}
export const sendContactUsEmail = (
  contact: Contact,
  setSubmitting: (value: boolean) => void
) => {
  setSubmitting(true)

  emailJs
    .send(
      emailConfig.email_service_ids.gmail_test,
      emailConfig.template_ids.custom_template,
      {
        subtitle: `Contact form ${contact.name}`,
        email_content: ContactUsTemplate(contact),
        to_email: emailConfig.contact_receive_email,
        from_name: 'Sphinx Software',
        reply_to: contact.workEmail
      }
    )
    .then(
      function () {
        setSubmitting(false)
      },
      function () {
        setSubmitting(false)
      }
    )
}

export const sendRequestJobEmail = (
  event: any,
  setSubmitting: (value: boolean) => void
) => {
  setSubmitting(true)
  const positionID: string = event.target.position.value
  const name: string = event.target.name.value
  const email: string = event.target.email.value
  const phone_number: string | undefined = event.target.phoneNumber.value
  const cv_link: string = event.target.cvLink.value
  const positionData = tableConfig.resource.find(
    (item) => item.id === positionID
  )

  emailJs
    .send(
      emailConfig.email_service_ids.gmail_test,
      emailConfig.template_ids.custom_template,
      {
        subtitle: `Apply Job ${event.target.name.value}`,
        email_content: ApplyJobTemplate(
          positionID,
          positionData?.position || positionID,
          name,
          email,
          cv_link,
          phone_number
        ),
        to_email: emailConfig.apply_job_receive_email,
        from_name: 'Sphinx Software',
        reply_to: email
      }
    )
    .then(
      function () {
        setSubmitting(false)
      },
      function () {
        setSubmitting(false)
      }
    )
}

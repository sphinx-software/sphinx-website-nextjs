import emailJs from 'emailjs-com'
import { emailConfig } from '../config'
import { ApplyJobTemplate, ContactUsTemplate } from '../ui/EmailContentTemplate'

emailJs.init(emailConfig.user_id)

export const sendContactUsEmail = (
  event: any,
  setSubmitting: (value: boolean) => void
) => {
  setSubmitting(true)
  let reason
  const name: string = event.target.name.value
  const company_name: string = event.target.companyName.value
  const work_email: string = event.target.workEmail.value
  const phone_number: string | undefined = event.target.phoneNumber.value

  if (
    event.target.reason.value &&
    event.target.reason.value !== 'otherReason'
  ) {
    reason = event.target.reason.value
  } else {
    reason = event.target.otherReasonDescription.value
  }

  emailJs
    .send(
      emailConfig.email_service_ids.gmail_test,
      emailConfig.template_ids.custom_template,
      {
        subtitle: `Contact form ${event.target.name.value}`,
        email_content: ContactUsTemplate(
          name,
          company_name,
          work_email,
          reason,
          phone_number
        ),
        to_email: emailConfig.contact_receive_email,
        from_name: 'Sphinx Software',
        reply_to: work_email || emailConfig.receiver_reply_email
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
  const position: string = event.target.position.value
  const name: string = event.target.name.value
  const email: string = event.target.email.value
  const phone_number: string | undefined = event.target.phoneNumber.value
  const cv_link: string = event.target.cvLink.value

  console.log('position', position)

  emailJs
    .send(
      emailConfig.email_service_ids.gmail_test,
      emailConfig.template_ids.custom_template,
      {
        subtitle: `Apply Job ${event.target.name.value}`,
        email_content: ApplyJobTemplate(
          position,
          name,
          email,
          cv_link,
          phone_number
        ),
        to_email: emailConfig.apply_job_receive_email,
        from_name: 'Sphinx Software',
        reply_to: email || emailConfig.receiver_reply_email
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

import React from 'react'
import styles from './ContactForm.module.scss'
import { EMAIL_ADDRESS } from '../../../../assets/data/legalInfo'
import Form from './Form'

const ContactForm = () => {
  return (
    <div className={styles.ContactForm}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={`${styles.image} `}>
            <img
              src='/images/shared/tlc_card.webp'
              alt='A hand holding TLC business card in finished bathroom.'
            />
          </div>
          <div className={styles.form_content}>
            <h1 className='page-title'>Let's Get In Touch</h1>
            <p>
              Or reach out manually to{' '}
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </p>
            <div className={`${styles.form_container}`}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

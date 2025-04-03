import React from 'react'
import styles from './ContactOptions.module.scss'
import { Facebook, Mail, Phone } from 'lucide-react'
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../../../../assets/data/legalInfo'

const contactOptionsList = [
  {
    icon: Mail,
    title: 'Email Us',
    linkSrc: `mailto:${EMAIL_ADDRESS}`,
    linkText: EMAIL_ADDRESS,
  },
  {
    icon: Phone,
    title: 'Give Us A Call',
    linkSrc: `tel:${PHONE_NUMBER}`,
    linkText: PHONE_NUMBER,
  },
  {
    icon: Facebook,
    title: 'Check Out Our Facebook',
    linkSrc: 'https://www.facebook.com/profile.php?id=61560594282818',
    linkText: 'Our Facebook Page',
  },
]

const ContactOptions = () => {
  return (
    <div className={styles.ContactOptions}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className='section-title'>We’d Love to Hear From You.</h1>
            <p className='section-description'>
              Here are a few ways you can contact us.
            </p>
          </div>
          <div className={styles.options}>
            {contactOptionsList.map(option => (
              <div key={option.title} className={`${styles.option} card`}>
                <div className={styles.icon}>
                  <option.icon />
                </div>
                <h2>{option.title}</h2>
                <a href={option.linkSrc}>{option.linkText}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactOptions

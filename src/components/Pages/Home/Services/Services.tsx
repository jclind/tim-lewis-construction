import React from 'react'
import styles from './Services.module.scss'
import ServicesList from '../../Services/ServicesList'
import { ButtonLink } from '../../../Common/ButtonLink'

const Services = () => {
  return (
    <div className={styles.Services}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='section_title'>Our Services</h1>
          <p>Expert Renovations, Lasting Results</p>
          <ServicesList />
          <p className={styles.call_to_action_text}>
            Want to see everything that we offer?
          </p>
          <ButtonLink
            link='/services'
            text='View All Services'
            color='secondary'
          />
        </div>
      </div>
    </div>
  )
}

export default Services

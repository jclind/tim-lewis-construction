import React from 'react'
import styles from './ServicesList.module.scss'
import { servicesData } from './servicesData'
import { ButtonLink } from '../../../Common/ButtonLink'

const ServicesList = () => {
  return (
    <div className={styles.ServicesList}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.list}>
            {servicesData.map((service, index) => (
              <div key={index} className={`${styles.service} card`}>
                <img src={service.imgSrc} alt={service.title} />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ButtonLink
                  link='/contact'
                  text='Get Started &#8594;'
                  color='secondary'
                  size='full_width'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesList

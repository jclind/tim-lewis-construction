import React from 'react'
import styles from './CallToAction.module.scss'
import { ButtonLink } from '../../Common/ButtonLink'

const CallToAction = () => {
  return (
    <div className={styles.CallToAction}>
      <div className='page__inner'>
        <div className={`${styles.content} card`}>
          <h1 className='section-title text-inverted'>
            Ready to Start Your Renovation?
          </h1>
          <p className='section-description text-inverted'>
            Let Tim Lewis Construction bring your vision to life with expert
            craftsmanship and care.
          </p>
          <ButtonLink text='Contact Us Today' link='contact' color='tertiary' />
          <div className={styles.background_image}>
            <img src='/images/shared/waves_background.webp' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction

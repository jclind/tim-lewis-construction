import React from 'react'
import styles from './PricingFactors.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const PricingFactors = () => {
  return (
    <div className={styles.PricingFactors}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={`image ${styles.image}`}>
            <img src='/images/pricing/pricing.webp' alt='' />
          </div>
          <div className={styles.text_content}>
            <div className={styles.section}>
              <h2>FACTORS THAT INFLUENCE PRICING</h2>
              <ul>
                <li>
                  <strong>Project Size:</strong> Larger renovations require more
                  materials and labor.
                </li>
                <li>
                  <strong>Materials & Finishes:</strong> The quality and type of
                  materials impact the overall cost.
                </li>
                <li>
                  <strong>Customization & Complexity:</strong> Unique design
                  elements or structural changes can add to the price.
                </li>
              </ul>
            </div>
            <div className={styles.section}>
              <h2>NO-OBLIGATION ESTIMATES</h2>
              <p>
                Since every project is unique, we provide personalized estimates
                based on your specific needs. <a href='/contact'>Contact us</a>{' '}
                today to schedule a free, no-obligation consultation.
              </p>
            </div>
            <ButtonLink
              text='Get Your Free Estimate'
              link='/contact'
              color='secondary'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingFactors

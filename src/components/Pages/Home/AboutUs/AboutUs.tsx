import React from 'react'
import styles from './AboutUs.module.scss'
import { Check, MapPinHouse } from 'lucide-react'
import { ButtonLink } from '../../../Common/ButtonLink'

const whyChooseUsList = [
  {
    icon: Check,
    title: 'Expert Craftsmanship',
    text: 'Precision and quality in every detail.',
  },
  {
    icon: Check,
    title: 'Reliable Service',
    text: 'On-time, on-budget, and built to last.',
  },
  {
    icon: Check,
    title: 'Customer-Centric',
    text: 'We prioritize clear communication and your satisfaction.',
  },
  {
    icon: MapPinHouse,
    title: 'Serving Your Neighborhood',
    text: `Proudly transforming homes in <strong>Fox Chapel, McCandless, and the Pittsburgh area</strong> with expert craftsmanship and reliable service.`,
  },
]

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={`${styles.image} image`}>
            <img src='/images/shared/tlc_card.webp' alt='' />
          </div>
          <div className={styles.text_content}>
            <div className={styles.about_us_text}>
              <h1 className='section-subtitle'>ABOUT US</h1>
              <h2 className='section-title'>
                Built on Quality, Driven by Integrity
              </h2>
              <p className='section-description'>
                At Tim Lewis Construction, we bring years of hands-on experience
                and a passion for craftsmanship to every project. From small
                repairs to full-scale renovations, we believe every home
                deserves the same attention to detail and care.
              </p>
            </div>
            <div className={styles.why_choose_us_text}>
              <h1 className='section-subtitle'>WHY CHOOSE US?</h1>
              <div className={styles.values}>
                {whyChooseUsList.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div className={styles.item} key={index}>
                      <Icon className={styles.icon} size={24} />
                      <div className={styles.text}>
                        <h2>{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <ButtonLink
              text="Let's Get In Touch"
              link='contact'
              color='secondary'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

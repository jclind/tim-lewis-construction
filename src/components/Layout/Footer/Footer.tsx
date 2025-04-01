import React from 'react'
import styles from './Footer.module.scss'
import { links } from './links'
import Divider from '../../Common/Divider'
import {
  EMAIL_ADDRESS,
  LEGAL_NAME,
  PHONE_NUMBER,
} from '../../../assets/data/legalInfo'
import { Mail, MapPin, Phone, type LucideProps } from 'lucide-react'

const ContactItem = ({
  Icon,
  text,
}: {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  text: string
}) => {
  return (
    <div className={styles.contact_item}>
      <div className={styles.icon_container}>
        <Icon />
      </div>
      <div className='text'>{text}</div>
    </div>
  )
}
const contactInfo = [
  {
    Icon: Mail,
    text: EMAIL_ADDRESS,
  },
  {
    Icon: Phone,
    text: PHONE_NUMBER,
  },
  {
    Icon: MapPin,
    text: 'Pittsburgh, PA',
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo_container}>
              <img src='/images/logo.webp' alt='Deer Lakes Web Design Icon' />
            </div>
            <div className={`${styles.column} ${styles.column1}`} id='links'>
              <a href='/services' className={styles.highlighted}>
                Services
              </a>
              <a href='/pricing'>Pricing</a>
              <a href='/projects'>Projects</a>
            </div>
            <div className={`${styles.column} ${styles.column2}`} id='links'>
              <a href='/about' className={styles.highlighted}>
                About
              </a>
              <a href='/'>Home</a>
              <a href='/contact'>Contact</a>
            </div>
            <div className={styles.contact}>
              <div className={styles.highlighted}>Contact Info</div>
              <div className={styles.contact_items}>
                {contactInfo.map(item => (
                  <ContactItem key={item.text} {...item} />
                ))}
              </div>
            </div>
          </div>

          <Divider space='large' />
          <div className={styles.bottom}>
            <div className={styles.left}>
              <p>
                © {new Date().getFullYear()} Tim Lewis Construction,{' '}
                <a href='https://hicsearch.attorneygeneral.gov/'>
                  Licensed and Insured.
                </a>
              </p>
              <div>
                <a href='/terms-of-service'>Terms</a>
                <span>|</span>
                <a href='/privacy-policy'>Privacy</a>
              </div>
            </div>
            <div className={styles.right}>
              <p>
                Designed And Developed By{' '}
                <a href='https://deerlakeswebdesigns.com/'>
                  Deer Lakes Web Design
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* <div className={styles.top_container}>
          <div className={styles.links__container}>
            <div className={styles.image}>
              <img src='/images/logo.webp' alt='Deer Lakes Web Design Icon' />
            </div>
            <div className={styles.links}>
              {links.map(link => (
                <div className={styles.link}>
                  <a href={link.path}>{link.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.divider_container}>
            <Divider space='large' />
          </div>
          <div className={styles.contact_info}>
            {contactInfo.map(item => (
              <div className={styles.item}>
                <div className={styles.icon__container}>
                  <item.icon className={styles.icon} />
                </div>
                <span
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    WebkitTextFillColor: 'inherit',
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Divider space='large' />
        <div className={styles.copyright}>
          <div className={styles.text}>
            {`© Copyright ${new Date().getFullYear()} ${LEGAL_NAME}`} | Website
            By{' '}
            <a href='https://deerlakeswebdesigns.com/'>Deer Lakes Web Design</a>
          </div>
          <div className={styles.legal}>
            <a href='/terms-of-service'>Terms</a>
            <span>|</span>
            <a href='/privacy-policy'>Privacy</a>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import styles from './WhyChooseUs.module.scss'
import {
  Calendar,
  Hammer,
  Handshake,
  House,
  Search,
  UserRound,
} from 'lucide-react'

const valuesList = [
  {
    Icon: Hammer,
    title: 'Quality Craftsmanship',
    text: `We take pride in delivering <strong>exceptional workmanship</strong> on every project. From framing to finishing touches, we use <strong>durable materials</strong> and proven techniques to ensure your renovation stands the test of time. No shortcuts—just <strong>superior results</strong> built to last.`,
  },
  {
    Icon: Handshake,
    title: 'Integrity & Transparency ',
    text: 'Honesty is at the core of what we do. We provide <strong>clear estimates</strong>, realistic timelines, and consistent communication throughout your project. With <strong>no hidden fees or surprises</strong>, you’ll always know exactly what to expect.',
  },
  {
    Icon: UserRound,
    title: 'Customer-Centric Service',
    text: 'We treat your home like it’s our own. With <strong>reliable timelines</strong>, open communication, and a focus on your satisfaction, we make the renovation process <strong>smooth and stress-free</strong>. From consultation to completion, we’re with you every step of the way.',
  },
  {
    Icon: Search,
    title: 'Attention to Detail',
    text: 'We believe the difference is in the details. Whether it’s <strong>seamless trim work, flawless tile lines, or perfectly hung doors</strong>, we ensure <strong>precision and care</strong> in every aspect of your renovation.',
  },
  {
    Icon: Calendar,
    title: 'Reliability & Accountability',
    text: 'You can count on us to be <strong>punctual, professional, and dependable</strong>. We respect your time and property, sticking to agreed-upon schedules and leaving your space <strong>clean and organized</strong> when the job is done. ',
  },
  {
    Icon: House,
    title: 'Personalized Solutions',
    text: 'Every home is unique, and so is every renovation. We tailor our services to <strong>fit your needs and style</strong>, offering customized solutions that bring your vision to life. Whether it’s a modern bathroom or a cozy deck, we make it yours.',
  },
]

const WhyChooseUs = () => {
  return (
    <div className={styles.WhyChooseUs}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='page-title text-inverted'>Why Choose Us</h1>
          <div className={styles.values}>
            {valuesList.map(value => (
              <div className={`${styles.value}`} key={value.title}>
                <div className={styles.icon_container}>
                  <value.Icon />
                </div>
                <h2 className={styles.title}>{value.title}</h2>
                <p
                  className='text'
                  dangerouslySetInnerHTML={{ __html: value.text }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

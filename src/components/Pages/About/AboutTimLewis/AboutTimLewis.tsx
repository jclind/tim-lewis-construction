import React from 'react'
import styles from './AboutTimLewis.module.scss'
import { CircleCheckBig } from 'lucide-react'

const valuesList = [
  {
    title: 'A Craftsman at Heart',
    text: 'Tim Lewis brings years of hands-on experience and a passion for transforming homes. From his first remodeling project to running his own company, Tim’s dedication to quality craftsmanship and attention to detail has never wavered.',
  },
  {
    title: 'Local Expertise, Personal Commitment',
    text: 'As a local contractor, Tim understands the unique needs of homeowners in the area. His mission? To deliver beautiful, functional spaces that stand the test of time—whether it’s a deck built for family gatherings or a bathroom designed for relaxation.',
  },
  {
    title: 'A Craftsman at Heart',
    text: 'Tim believes that every home deserves tender loving care. That’s why he approaches each project with precision, integrity, and a genuine commitment to customer satisfaction.',
  },
]

const AboutTimLewis = () => {
  return (
    <div className={styles.AboutTimLewis}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={`${styles.image} image`}>
            <img
              src='/images/about/about_tim.webp'
              alt='Tim Standing Under Finished Trim'
            />
          </div>
          <div className={styles.text_section}>
            <h1 className='section-title'>About Tim Lewis</h1>
            <p className='section-paragraph'>
              Tim Lewis Construction brings passion, precision, and dedication
              to every project. With years of experience, we’re committed to
              delivering renovations that enhance both form and function. These
              are just a few of the values that we hold at the center of our
              work at TLC:
            </p>
            <ul className={styles.list}>
              {valuesList.map(item => (
                <li className={styles.item} key={item.title}>
                  <div className={styles.icon_container}>
                    <CircleCheckBig />
                  </div>
                  <div className={styles.text_container}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTimLewis

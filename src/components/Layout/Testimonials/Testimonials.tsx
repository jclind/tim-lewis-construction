import React from 'react'
import styles from './Testimonials.module.scss'
import {
  getFeaturedTestimonials,
  testimonialsData,
  type TestimonialType,
} from '../../../assets/data/testimonialData'
import { Quote, Star } from 'lucide-react'

const SingleTestimonial = ({
  testimonial,
}: {
  testimonial: TestimonialType
}) => {
  const { name, rating, text } = testimonial
  return (
    <div className={`${styles.SingleTestimonial} card`}>
      <div className={styles.quote_icon}>
        <Quote fill='var(--primary-accent)' strokeWidth={1} />
      </div>
      <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
      <div className={styles.bottom}>
        <p
          className={styles.name}
          dangerouslySetInnerHTML={{ __html: name }}
        ></p>
        <div className={styles.rating}>
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} className={styles.star}>
              <Star size={20} fill='var(--secondary-accent)' strokeWidth={0} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Testimonials = ({ showAll = false }: { showAll?: boolean }) => {
  const testimonialsToShow: TestimonialType[] = showAll
    ? testimonialsData
    : getFeaturedTestimonials()
  return (
    <div className={styles.Testimonials}>
      <div className='page__inner'>
        <div className={styles.content}>
          {!showAll && (
            <div className={styles.top}>
              <div className={styles.subtitle}>TESTIMONIALS</div>
              <h1 className='section-title'>What Our Clients Say</h1>
            </div>
          )}
          <div className={styles.testimonials_list}>
            {testimonialsToShow.map((t, index) => (
              <SingleTestimonial key={index} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

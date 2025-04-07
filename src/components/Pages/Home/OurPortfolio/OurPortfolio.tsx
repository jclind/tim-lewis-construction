import React from 'react'
import styles from './OurPortfolio.module.scss'
import { getFeaturedProjects } from '../../../../assets/data/projects'
import { ArrowUpRight } from 'lucide-react'
import { ButtonLink } from '../../../Common/ButtonLink'

const OurPortfolio = () => {
  return (
    <div className={styles.OurPortfolio}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title_container}>
              <h2 className='section-subtitle'>OUR PORTFOLIO</h2>
              <h1 className='section-title'>Our Work Speaks for Itself</h1>
            </div>
            <p className='section-description'>
              We believe great renovations start with quality craftsmanship and
              end with satisfied homeowners. These are just a few of the homes
              we have transformed with care, precision, and a commitment to
              excellence
            </p>
          </div>
          <div className={styles.projects}>
            {getFeaturedProjects().map(project => (
              <div className={styles.project} key={project.id}>
                <div className={`${styles.image} image`}>
                  <img src={project.imgSrc} alt={project.imgAlt} />
                </div>
                <div className={styles.title_container}>
                  <h2>{project.title}</h2>
                  <ArrowUpRight />
                </div>
              </div>
            ))}
          </div>
          <ButtonLink
            text='View All Projects'
            link='/projects'
            color='secondary'
          />
        </div>
      </div>
    </div>
  )
}

export default OurPortfolio

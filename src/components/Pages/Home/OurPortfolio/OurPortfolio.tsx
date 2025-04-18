import React from 'react'
import styles from './OurPortfolio.module.scss'
import { getFeaturedProjects } from '../../../../assets/data/projects'
import { ButtonLink } from '../../../Common/ButtonLink'
import ProjectsList from '../../../Common/ProjectsList'

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
          <ProjectsList
            projects={getFeaturedProjects()}
            size='large'
            lazy={true}
          />
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

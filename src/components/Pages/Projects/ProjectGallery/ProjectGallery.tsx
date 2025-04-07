import React from 'react'
import styles from './ProjectGallery.module.scss'
import ProjectsList from '../../../Common/ProjectsList'
import { projectsData } from '../../../../assets/data/projects'

const ProjectGallery = () => {
  return (
    <div className={styles.ProjectGallery}>
      <div className='page__inner'>
        <div className={styles.content}>
          <ProjectsList projects={projectsData} />
        </div>
      </div>
    </div>
  )
}

export default ProjectGallery

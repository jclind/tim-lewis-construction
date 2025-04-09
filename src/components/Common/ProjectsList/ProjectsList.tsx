import React from 'react'
import styles from './ProjectsList.module.scss'
import type { ProjectType } from '../../../assets/data/projects'
import { ArrowUpRight } from 'lucide-react'

const ProjectsList = ({
  projects,
  size = 'regular',
  lazy = false,
}: {
  projects: ProjectType[]
  size?: 'regular' | 'large'
  lazy?: boolean
}) => {
  return (
    <div className={`${styles.projects} ${size}`}>
      {projects.map(project => (
        <a
          href={`/projects/${project.id}`}
          className={styles.project}
          key={project.id}
        >
          <div className={`${styles.image} image`}>
            <picture>
              <source
                media='(max-width: 499px)'
                srcSet={project.coverImgSrcMobile}
              />
              <img
                src={project.coverImgSrc}
                alt={project.coverImgAlt}
                loading={lazy ? 'lazy' : 'eager'}
              />
            </picture>
          </div>
          <div className={styles.title_container}>
            <h2>{project.title}</h2>
            <ArrowUpRight />
          </div>
          <div className={styles.view_project}>View Project</div>
        </a>
      ))}
    </div>
  )
}

export default ProjectsList

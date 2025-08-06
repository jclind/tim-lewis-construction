import React from 'react'
import styles from './ProjectImages.module.scss'
import type {
  ProjectImgType,
  ProjectType,
} from '../../../../assets/data/projects'

const ImgComponent = ({
  imgData,
  index,
}: {
  imgData: ProjectImgType
  index: number
}) => {
  console.log('IMGCOMPONENT DATA', imgData)

  return (
    <div className={`${styles.image} image`}>
      <img
        src={imgData.src}
        alt={imgData.alt}
        loading={index > 0 ? 'lazy' : 'eager'}
      />
    </div>
  )
}

const ProjectImages = ({ project }: { project: ProjectType }) => {
  return (
    <div className={styles.ProjectImages}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='page-title'>{project.title}</h1>
          <p>Project Images:</p>
          <div className={styles.images_container}>
            <div className={styles.left_row}>
              {project.projectImgs.map((imgData, index) => {
                if (index % 2 === 0) {
                  return <ImgComponent imgData={imgData} index={index} />
                }
                return null
              })}
            </div>
            <div className={styles.right_row}>
              <div className={styles.left_row}>
                {project.projectImgs.map((imgData, index) => {
                  if (index % 2 === 1) {
                    return <ImgComponent imgData={imgData} index={index} />
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectImages

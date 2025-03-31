import React from 'react'
import styles from './DefaultHero.module.scss'

type DefaultHeroProps = {
  type?: 'default' | 'light' | 'light_alt'
  title: string
  description?: string
}

const DefaultHero = ({
  type = 'default',
  title,
  description,
}: DefaultHeroProps) => {
  return (
    <div className={`${styles.DefaultHero} ${styles[type]}`}>
      <div className='page__inner hero-page'>
        <div className={`${styles.content} `}>
          <h1 className='hero-title'>{title}</h1>
          <p className='hero-description'>{description}</p>
          {type === 'default' && (
            <div className={`${styles.background_image}`}>
              <img src='/images/shared/default_hero_background.webp' alt='' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DefaultHero

import React from 'react'
import styles from './Hero.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.page__inner} page__inner`}>
        <div className={styles.content}>
          <div className={styles.title_text}>
            <h1 className='section-subtitle'>“IT JUST NEEDS SOME TLC”</h1>
            <h2 className='page-title'>
              Transforming Homes with Quality Craftsmanship
            </h2>
          </div>
          <div className={`${styles.image} image`}>
            <img
              srcSet='/images/home/hero_mobile.webp 500w, 
          /images/home/hero.webp 1920w'
              sizes='(max-width: 500px) 100vw, 1920px'
              src='/images/home/hero.webp'
              alt='Finished Backyard Deck'
              width='900'
              height='600'
            />
          </div>
          <div className={styles.bottom_text}>
            <p className='section-description'>
              Decks, bathrooms, windows, doors, you name it. Tim Lewis Construction handles home renovations across <strong>Fox Chapel, McCandless</strong>, and the <strong>greater Pittsburgh area</strong>. We focus on quality work and making sure you're happy with the results. Got a project in mind or just need something fixed? Let's talk.
            </p>
            <ButtonLink
              text='Get A Free Estimate'
              link='/contact'
              color='tertiary'
              size='large'
            />
          </div>
        </div>
        <div className={styles.background_image}>
          <img
            srcSet='/images/home/hero_background_mobile.webp 1000w, 
          /images/home/hero_background_desktop.webp 1920w'
            sizes='(max-width: 1000px) 100vw, 1920px'
            src='/images/home/hero_background_desktop.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

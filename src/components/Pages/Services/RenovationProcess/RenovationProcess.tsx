import React from 'react'
import styles from './RenovationProcess.module.scss'

const renovationSteps = [
  {
    step: 1,
    title: 'Initial Contact',
    text: 'Reach out to us by phone, email, or through our website. We’ll gather some basic details about your project and schedule an on-site consultation.',
  },
  {
    step: 2,
    title: 'On-Site Consultation',
    text: 'We meet with you at the project site to discuss your vision, assess the space, and answer any questions you have. This allows us to understand your goals and provide expert recommendations.',
  },
  {
    step: 3,
    title: 'Proposal & Estimate',
    text: 'We create a detailed proposal outlining the scope of work, materials, timeline, and pricing. This ensures you have a clear, transparent understanding of the project.',
  },
  {
    step: 4,
    title: 'Agreement & Down Payment',
    text: 'Once you approve the proposal, you’ll sign the agreement and provide a down payment. This secures your spot in our schedule and allows us to begin preparations.',
  },
  {
    step: 5,
    title: 'Construction & Execution',
    text: 'Our skilled team works with precision and care, keeping you informed throughout the process to ensure everything meets your expectations.',
  },
  {
    step: 6,
    title: 'Final Walkthrough & Approval',
    text: 'Once the project is complete, we’ll walk through the site with you to ensure everything meets your standards. Your satisfaction is our top priority.',
  },
]

const RenovationProcess = () => {
  return (
    <div className={styles.RenovationProcess}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title_container}>
              <h2 className='section-subtitle'>OUR RENOVATION PROCESS</h2>
              <h1 className='section-title'>
                Here’s How We Bring Your Vision to Life
              </h1>
            </div>
            <p className='section-description'>
              At Tim Lewis Construction, we believe in clear communication and a
              smooth, transparent process from start to finish. Here’s what you
              can expect when working with us:
            </p>
          </div>
          <div className={styles.steps}>
            {renovationSteps.map(step => (
              <div key={step.step} className={`${styles.step} card`}>
                <div className={styles.step_number}>STEP {step.step}</div>
                <div className={styles.step_content}>
                  <h3 className={styles.step_title}>{step.title}</h3>
                  <p className={styles.step_text}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RenovationProcess

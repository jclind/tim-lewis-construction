import React from 'react'
import styles from './TermsOfServiceContent.module.scss'

const TermsOfServiceContent = () => {
  return (
    <div className={styles.TermsOfServiceContent}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className='terms-of-service container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
            <p className='section-subtitle'>
              <strong>Last updated:</strong> April 07, 2025
            </p>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>
                1. Acceptance of Terms
              </h2>
              <p className='mb-4'>
                By accessing this website, you agree to be bound by these Terms
                of Service. The website serves solely as an informational
                resource and contact point for Tim Lewis Construction.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>2. Website Use</h2>
              <p className='mb-4'>
                This website is intended for adults (18+) to:
              </p>
              <ul className='list-disc pl-6 mb-4 space-y-2'>
                <li>View examples of past construction projects</li>
                <li>Initiate contact with Tim Lewis Construction</li>
              </ul>
              <p>
                No business transactions or payments are conducted through this
                website.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>
                3. Intellectual Property
              </h2>
              <p className='mb-4'>
                All content on this website, including but not limited to text,
                images, graphics, and project photos, is the property of Tim
                Lewis Construction and protected by copyright laws.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>4. External Links</h2>
              <p className='mb-4'>
                The website may contain links to external sites (e.g.,
                Facebook). These third-party sites have separate privacy
                policies and terms of service, which we recommend you review.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>5. Disclaimer</h2>
              <p className='mb-4'>
                The website content is provided "as is" without warranties of
                any kind. Project photos represent past work and do not
                constitute guarantees of future results.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>
                6. Limitation of Liability
              </h2>
              <p className='mb-4'>
                Tim Lewis Construction shall not be liable for any damages
                resulting from use of this website or contact initiated through
                it.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>7. Governing Law</h2>
              <p className='mb-4'>
                These Terms shall be governed by the laws of Pennsylvania,
                United States, without regard to conflict of law principles.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>
                8. Changes to Terms
              </h2>
              <p className='mb-4'>
                We may update these Terms of Service periodically. The "Last
                updated" date at the top of this page will reflect any changes.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-2xl font-semibold mb-4'>9. Contact</h2>
              <p className='mb-4'>
                For questions about these Terms, contact:
                <br />
                <a
                  href='mailto:constructioncellist@gmail.com'
                  className='text-blue-600 hover:underline'
                >
                  constructioncellist@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServiceContent

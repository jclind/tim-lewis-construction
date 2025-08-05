export interface TestimonialType {
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  isFeatured: boolean
}

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Hannah H.',
    rating: 5,
    text: 'Tim has excellent craftsmanship, is super easy to communicate with, and is a very trustworthy and honest businessman! For any bathroom or other handwork related to homes, Tim is a top choice!  - His expertise and integrity make him highly valued in his industry.',
    isFeatured: true,
  },
  {
    name: 'Mark T.',
    rating: 5,
    text: 'TLC is a fine builder and remodeler! I’ve used this company for bathroom remodeling and a custom post build on the front exterior of my house, which came out extraordinarily nice. Tim Lewis does high-end work meticulously well. Tim is also very honest, punctual and reliable. For construction work, TLC is the company to call.',
    isFeatured: true,
  },
  {
    name: 'Emily L.',
    rating: 5,
    text: 'I love TLC! He is very professional and finishes the job beautifully! His finish work is pristine. He opened up our small bathroom and made it larger and tiled a curbless shower! He put in a sky light in the shower and a larger window near the vanity for natural light. It’s gorgeous!',
    isFeatured: true,
  },
  {
    name: 'Elizabeth Decarvalho <span>(wife and mother of three)</span>',
    rating: 5,
    text: 'If you’re looking for quality, efficiency and honest work, I would highly recommend Tim’s skills and expertise. He did a wood deck and staircase for us, and I don’t think it could have been done better!',
    isFeatured: false,
  },
  {
    name: 'Mary Cay Burt',
    rating: 5,
    text: `TLC Construction is a business you can trust.
Tim Lewis is reliable, honest and fair. He also is an excellent craftsman.
He put in 2 new skylights for me and did an outstanding job.
I highly recommend TLC Construction. Tim will not disappoint you.`,
    isFeatured: false,
  },
  {
    name: 'Patrick Lewis',
    rating: 5,
    text: `Tim was great. He’s helped now with two projects, a staircase banister and a bathroom tub and tile job. He was efficient, great to brainstorm solutions with, hard working, communicated and followed up well, finished in a timely manner, and importantly high quality professional work with attention to detail. Will be giving him more business in the future and highly recommend his services.`,
    isFeatured: false,
  },
  {
    name: 'Katie Lombardo ',
    rating: 5,
    text: `We needed a large job to be completed somewhat quickly, and were able to provide some of the labor. However this required professional oversight and Tim provided exactly that. He had an uncanny capacity to predict what time frame was needed, and was incredibly efficient in light of the time spent. His leadership was excellent, his attention to detail thorough and intuitive, and his friendly-professional demeanor refreshing… <br /><br />We considered his services well worth the competitive investment! And we highly recommend not only his work but his solid work ethic, flexibility and integrity.`,
    isFeatured: false,
  },
]

export const getFeaturedTestimonials = () => {
  return testimonialsData.filter(testimonial => testimonial.isFeatured)
}

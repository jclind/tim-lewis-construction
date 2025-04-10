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
]

export const getFeaturedTestimonials = () => {
  return testimonialsData.filter(testimonial => testimonial.isFeatured)
}

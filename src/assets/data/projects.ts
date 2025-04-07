export type ProjectImgType = {
  src: string
  alt: string
}
export interface ProjectType {
  id: string
  title: string
  coverImgSrc: string
  coverImgAlt: string
  projectImgs: ProjectImgType[]
  isFeatured: boolean
}

export const projectsData = [
  {
    id: 'b27f18e3-d230-4a6b-bb89-30fd5c6f3be7',
    title: 'Deck Addition',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Wooden deck addition on a backyard home',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: '12d3f85f-7e33-4ef6-b709-8d1f59dfc8c9',
    title: 'Bathroom Remodel',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Modern remodeled bathroom with glass shower',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: 'c014f2a7-0fd9-49d5-bb7e-17413a5e12a8',
    title: 'Kitchen Renovation',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Updated kitchen with island and new cabinets',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'a1378f67-7581-4a32-bb3a-8885a524c6b9',
    title: 'Garage Conversion',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Garage space converted into home office',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: '4b11d62d-2a77-42c5-85c2-961b456c4aa1',
    title: 'Roof Replacement',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Crew replacing shingles on a house roof',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: 'e33c6f9e-3e1c-4854-94fc-7f4ff89a8394',
    title: 'Home Office Build',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Custom built home office with desk and shelves',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: 'ff7815f9-e6f3-4143-a7a0-19b79e67acdc',
    title: 'Basement Finishing',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Finished basement with carpet and drywall',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'b8b328b4-774f-4c82-9c34-1ab4ce10f21b',
    title: 'Sunroom Installation',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'New sunroom with large windows and bright light',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: 'dac0e8df-25e6-474a-a0e6-ea7d1c1c1482',
    title: 'Attic Insulation',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Crew insulating attic space with fiberglass',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: '5aee3a9f-1a6f-4e88-b2cb-11b2f799a772',
    title: 'Fence Installation',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Wooden privacy fence in backyard',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
  {
    id: '3cfb84e1-d418-4b8f-a3cf-66d0f0b3f8b9',
    title: 'Driveway Resurfacing',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Newly resurfaced asphalt driveway',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: true,
  },
  {
    id: '2ab74e4c-8398-4291-bb53-6b82bcd8f22a',
    title: 'Patio Paver Installation',
    coverImgSrc: '/images/projects/project-img.webp',
    coverImgAlt: 'Stone paver patio under construction',
    projectImgs: [
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
      {
        src: '/images/projects/project-img.webp',
        alt: 'Wooden deck addition on a backyard home',
      },
    ],
    isFeatured: false,
  },
]

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.isFeatured)
}

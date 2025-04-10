export type ProjectImgType = {
  src: string
  alt: string
}
export interface ProjectType {
  id: string
  title: string
  coverImgSrc: string
  coverImgSrcMobile: string
  coverImgAlt: string
  projectImgs: ProjectImgType[]
  isFeatured: boolean
}

export const projectsData = [
  {
    id: 'deck-addition',
    title: 'Deck Addition',
    coverImgSrc: '/images/projects/deck_addition/cover.webp',
    coverImgSrcMobile: '/images/projects/deck_addition/cover_mobile.webp',
    coverImgAlt: 'Wooden deck addition on a backyard home',
    projectImgs: [
      {
        src: '/images/projects/deck_addition/2.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/1.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/3.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/4.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/5.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/6.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/7.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition/8.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'bathroom-remodel',
    title: 'Bathroom remodel',
    coverImgSrc: '/images/projects/bathroom_remodel/cover.webp',
    coverImgSrcMobile: '/images/projects/bathroom_remodel/cover_mobile.webp',
    coverImgAlt: 'Modern tiled bathroom with bathtub',
    projectImgs: [
      {
        src: '/images/projects/bathroom_remodel/cover.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel/2.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel/3.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel/4.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel/5.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel/6.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'basement-finishing',
    title: 'Basement Finishing',
    coverImgSrc: '/images/projects/basement_finishing/cover.webp',
    coverImgSrcMobile: '/images/projects/basement_finishing/cover_mobile.webp',
    coverImgAlt: 'Modern finished basement',
    projectImgs: [
      {
        src: '/images/projects/basement_finishing/cover.webp',
        alt: 'Modern finished basement progress',
      },
      {
        src: '/images/projects/basement_finishing/2.webp',
        alt: 'Modern finished basement progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'bay-window-finishing',
    title: 'Bay window finishing',
    coverImgSrc: '/images/projects/bay_window/cover.webp',
    coverImgSrcMobile: '/images/projects/bay_window/cover_mobile.webp',
    coverImgAlt: 'Bay window',
    projectImgs: [
      {
        src: '/images/projects/bay_window/2.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window/cover.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window/3.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window/4.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window/5.webp',
        alt: 'Bay window progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'stair-rail-installation',
    title: 'Stair Rail Installation',
    coverImgSrc: '/images/projects/stair_rail/cover.webp',
    coverImgSrcMobile: '/images/projects/stair_rail/cover_mobile.webp',
    coverImgAlt: 'Staircase railing installation',
    projectImgs: [
      {
        src: '/images/projects/stair_rail/cover.webp',
        alt: 'Staircase railing installation progress',
      },
      {
        src: '/images/projects/stair_rail/2.webp',
        alt: 'Staircase railing installation progress',
      },
      {
        src: '/images/projects/stair_rail/3.webp',
        alt: 'Staircase railing installation progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: 'cabinet-installation',
    title: 'Cabinet Installation',
    coverImgSrc: '/images/projects/cabinet/cover.webp',
    coverImgSrcMobile: '/images/projects/cabinet/cover_mobile.webp',
    coverImgAlt: 'Cabinet installation',
    projectImgs: [
      {
        src: '/images/projects/cabinet/cover.webp',
        alt: 'Cabinet installation progress',
      },
      {
        src: '/images/projects/cabinet/2.webp',
        alt: 'Cabinet installation progress',
      },
      {
        src: '/images/projects/cabinet/3.webp',
        alt: 'Cabinet installation progress',
      },
    ],
    isFeatured: true,
  },
]

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.isFeatured)
}

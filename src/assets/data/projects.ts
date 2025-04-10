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
    id: '9d405c1c-31f8-488d-a32a-e2baf7de7e1e',
    title: 'Deck Addition',
    coverImgSrc: '/images/projects/deck_addition_1/cover.webp',
    coverImgSrcMobile: '/images/projects/deck_addition_1/cover_mobile.webp',
    coverImgAlt: 'Wooden deck addition on a backyard home',
    projectImgs: [
      {
        src: '/images/projects/deck_addition_1/2.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/1.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/3.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/4.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/5.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/6.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/7.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
      {
        src: '/images/projects/deck_addition_1/8.webp',
        alt: 'Wooden deck addition on a backyard home progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: '04113440-3ce1-4526-90a7-a923b24d6b6c',
    title: 'Bathroom remodel',
    coverImgSrc: '/images/projects/bathroom_remodel_1/cover.webp',
    coverImgSrcMobile: '/images/projects/bathroom_remodel_1/cover_mobile.webp',
    coverImgAlt: 'Modern tiled bathroom with bathtub',
    projectImgs: [
      {
        src: '/images/projects/bathroom_remodel_1/cover.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel_1/2.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel_1/3.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel_1/4.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel_1/5.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
      {
        src: '/images/projects/bathroom_remodel_1/6.webp',
        alt: 'Modern tiled bathroom with bathtub progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: '4c196b7e-e8a0-4e10-ad5d-9cfdec1e9947',
    title: 'Basement Finishing',
    coverImgSrc: '/images/projects/basement_finishing_1/cover.webp',
    coverImgSrcMobile:
      '/images/projects/basement_finishing_1/cover_mobile.webp',
    coverImgAlt: 'Modern finished basement',
    projectImgs: [
      {
        src: '/images/projects/basement_finishing_1/cover.webp',
        alt: 'Modern finished basement progress',
      },
      {
        src: '/images/projects/basement_finishing_1/2.webp',
        alt: 'Modern finished basement progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: '0e9229b9-ffa3-47a3-84c6-744de5d4d214',
    title: 'Bay window finishing',
    coverImgSrc: '/images/projects/bay_window_1/cover.webp',
    coverImgSrcMobile: '/images/projects/bay_window_1/cover_mobile.webp',
    coverImgAlt: 'Bay window',
    projectImgs: [
      {
        src: '/images/projects/bay_window_1/2.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window_1/cover.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window_1/3.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window_1/4.webp',
        alt: 'Bay window progress',
      },
      {
        src: '/images/projects/bay_window_1/5.webp',
        alt: 'Bay window progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: '247a45ca-95c5-43bc-a4eb-8ce24d59aea6',
    title: 'Stair Rail Installation',
    coverImgSrc: '/images/projects/stair_rail_1/cover.webp',
    coverImgSrcMobile: '/images/projects/stair_rail_1/cover_mobile.webp',
    coverImgAlt: 'Staircase railing installation',
    projectImgs: [
      {
        src: '/images/projects/stair_rail_1/cover.webp',
        alt: 'Staircase railing installation progress',
      },
      {
        src: '/images/projects/stair_rail_1/2.webp',
        alt: 'Staircase railing installation progress',
      },
      {
        src: '/images/projects/stair_rail_1/3.webp',
        alt: 'Staircase railing installation progress',
      },
    ],
    isFeatured: true,
  },
  {
    id: '2cca0da1-ef75-441e-b9e7-c1d53d40762c',
    title: 'Cabinet Installation',
    coverImgSrc: '/images/projects/cabinet_1/cover.webp',
    coverImgSrcMobile: '/images/projects/cabinet_1/cover_mobile.webp',
    coverImgAlt: 'Cabinet installation',
    projectImgs: [
      {
        src: '/images/projects/cabinet_1/cover.webp',
        alt: 'Cabinet installation progress',
      },
      {
        src: '/images/projects/cabinet_1/2.webp',
        alt: 'Cabinet installation progress',
      },
      {
        src: '/images/projects/cabinet_1/3.webp',
        alt: 'Cabinet installation progress',
      },
    ],
    isFeatured: true,
  },
]

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.isFeatured)
}

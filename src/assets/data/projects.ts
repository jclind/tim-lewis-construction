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

const PROJECT_IMAGES_PATH = `/images/projects`
const DECK_PROJECT_NAME = 'Deck Addition'
const BATHROOM_PROJECT_NAME = 'Bathroom Renovation'
const BASEMENT_PROJECT_NAME = 'Basement Finishing'
const BAY_WINDOW_PROJECT_NAME = 'Bay Window Finishing'
const STAIR_RAIL_PROJECT_NAME = 'Stair Rail Installation'
const CABINET_PROJECT_NAME = 'Cabinet Installation'

const createProjectId = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-')
const genCoverImgSrcs = (name: string) => {
  const formattedName = createProjectId(name)
  const imgFolderPath = `${PROJECT_IMAGES_PATH}/${formattedName}`
  return {
    coverImgSrc: `${imgFolderPath}/cover.webp`,
    coverImgSrcMobile: `${imgFolderPath}/cover-mobile.webp`,
  }
}
const genProjectSrcs = (limit: number, alt: string, projectName: string) => {
  const imgs: { src: string; alt: string }[] = []
  const formattedName = createProjectId(projectName)
  for (let i = 1; i <= limit; i++) {
    const basePath = `${PROJECT_IMAGES_PATH}/${formattedName}`
    const currImgPath =
      i === 1 ? `${basePath}/cover.webp` : `${basePath}/${i}.webp`
    imgs.push({ src: currImgPath, alt })
  }
  return imgs
}

export const projectsData = [
  {
    id: createProjectId(DECK_PROJECT_NAME),
    title: DECK_PROJECT_NAME,
    ...genCoverImgSrcs(DECK_PROJECT_NAME),
    coverImgAlt: 'Wooden deck addition on a backyard home',
    projectImgs: genProjectSrcs(
      18,
      'Wooden deck addition on a backyard home progress',
      DECK_PROJECT_NAME
    ),
    isFeatured: true,
  },
  {
    id: createProjectId(BATHROOM_PROJECT_NAME),
    title: BATHROOM_PROJECT_NAME,
    ...genCoverImgSrcs(BATHROOM_PROJECT_NAME),
    coverImgAlt: 'Modern tiled bathroom with bathtub',
    projectImgs: genProjectSrcs(
      6,
      'Modern tiled bathroom with bathtub progress',
      BATHROOM_PROJECT_NAME
    ),
    isFeatured: true,
  },
  {
    id: createProjectId(BASEMENT_PROJECT_NAME),
    title: BASEMENT_PROJECT_NAME,
    ...genCoverImgSrcs(BASEMENT_PROJECT_NAME),
    coverImgAlt: 'Modern finished basement',
    projectImgs: genProjectSrcs(
      2,
      'Modern finished basement progress',
      BASEMENT_PROJECT_NAME
    ),
    isFeatured: true,
  },
  {
    id: createProjectId(BAY_WINDOW_PROJECT_NAME),
    title: BAY_WINDOW_PROJECT_NAME,
    ...genCoverImgSrcs(BAY_WINDOW_PROJECT_NAME),
    coverImgAlt: 'Bay window',
    projectImgs: genProjectSrcs(
      5,
      'Bay window progress',
      BAY_WINDOW_PROJECT_NAME
    ),
    isFeatured: true,
  },
  {
    id: createProjectId(STAIR_RAIL_PROJECT_NAME),
    title: STAIR_RAIL_PROJECT_NAME,
    ...genCoverImgSrcs(STAIR_RAIL_PROJECT_NAME),
    coverImgAlt: 'Staircase railing installation',

    projectImgs: genProjectSrcs(
      3,
      'Staircase railing installation progress',
      STAIR_RAIL_PROJECT_NAME
    ),
    isFeatured: true,
  },
  {
    id: createProjectId(CABINET_PROJECT_NAME),
    title: CABINET_PROJECT_NAME,
    ...genCoverImgSrcs(CABINET_PROJECT_NAME),
    coverImgAlt: 'Cabinet installation',
    projectImgs: genProjectSrcs(
      3,
      'Cabinet installation Process',
      CABINET_PROJECT_NAME
    ),
    isFeatured: true,
  },
]

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.isFeatured)
}

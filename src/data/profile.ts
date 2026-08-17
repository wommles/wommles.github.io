export type Project = {
  title: string
  description: string
  href: string
  tags: string[]
}

export type Adventure = {
  title: string
  description: string
  href: string
  /** Self-hosted video path, e.g. /videos/via-valais.mp4 */
  video?: string
}

export const profile = {
  name: 'Dominic Aldridge',
  title: 'Developer & Trail Runner',
  tagline: 'A snapshot into my projects and interests',
  email: 'daldridgenz123@gmail.com',
  links: {
    github: 'https://github.com/wommles',
  },
  projects: [
    {
      title: 'Run in the Sun - ALPHA',
      description:
        'A route building webapp for running.\n Still in development.',
      href: 'https://master.d1i7w2meoi5ub8.amplifyapp.com/',
      tags: ['React', 'TypeScript', 'Python', 'AWS', 'GPX visualisation'],
    },
    {
      title: 'Angels vs Zombies',
      description:
        'A 2D top-down zombie survival game made in GDevelop. \n Part of my third year module in game design, inspired by the absolute classic - Boxhead Zombies. \n All, non-music, sound-FX made by me and my roomate',
      href: 'https://wommles.github.io/AvsZ/',
      tags: ['gDevelop', 'Game & Sound design', '2D', 'Zombies', 'Survival'],
    },
  ] satisfies Project[],
  adventures: [
    {
      title: 'Via Valais',
      description:
        'My trail running adventure through the Swiss Alps. 212km +15,000m.',
      href: 'https://www.instagram.com/p/Da24uUss35Z3XbnQLCckB-b8bw-S8p18_5AMaw0/',
      video: '/videos/vv7.mp4',
    },
  ] as Adventure[],
}

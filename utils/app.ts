export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Starter Boilerplate',
    author: {
      name: 'Raphael de Falco Ayres',
      link: 'https://github.com/raphaeldefalcoayres',
    },
  }
  useState('app', () => app)

  return {
    app,
  }
}

# Nuxt 3 Starter Boilerplate
a Nuxt 3 starter boilerplate with typescript and a lot of principal features. and integrated with TailwindCSS 3.

> **WARNING** \
> Nuxt 3 is still in beta and is not recommended for production use.

## Features
- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/) with [Windicss](https://windicss.org/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Icon Pack Component (unplugin-icons)](https://icones.js.org/)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] Eslint & Prettier
- [x] Husky & Commitlint
- [x] Http Request [(ohmyfetch default nuxt3)](https://github.com/unjs/ohmyfetch)
## Table of Contents
- [Nuxt 3 Starter Boilerplate](#nuxt-3-starter-boilerplate)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
  - [Notes](#notes)
    - [Styles](#styles)
    - [Icons](#icons)
    - [Precommit and Postmerge](#precommit-and-postmerge)
  - [License](#license)

## Quick Start
* This project using `yarn` as package manager.
* Clone this project to your computer `git clone https://github.com/viandwi24/nuxt3-awesome-starter`
* Install dependencies `yarn install`
* Run `yarn dev` to start development server and open `http://localhost:3000` in your browser
* Run `yarn build` to build project and `yarn start` to start production server

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Notes
### Styles
Tailwindcss import managed by windicss.
and you can add custom styles in :
```
/path/to/assets/sass/app.scss
```

### Icons
This project using unplugin-icons for auto generate and import icon as component.

You can see collection icon list in : [https://icones.js.org/](https://icones.js.org/)

you can use `<prefix-collection:icon />` or `<PrefixCollection:Icon />`.

in this project, configuration prefix as a "icon", you can see in `nuxt.config.ts` :
```js
export default defineNuxtConfig({
    ...

    vite: {
        plugins: [
            UnpluginComponentsVite({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },

    ...
})
```

Example :
```vue
// use icon from collection "Simple Icons" and name icon is "nuxtdotjs"
<IconSimpleIcons:nuxtdotjs />

// use icon from collection "Unicons" and name icon is "sun"
<IconUil:sun />
```
### Precommit and Postmerge
This project using husky and commitlint for precommit and postmerge.
when you commit, it will check your commit message and running "yarn lint-staged" to check your staged files.
configuration in : `/path/to/.husky/pre-commit` and `/path/to/commitlint.config.js`

And when Postmerge, it will run "yarn" to automatically install new dependencies.
configuration in `/path/to/.husky/post-merge`

## License
This project is licensed under the MIT license, Copyright (c) 2022 Alfian Dwi Nugraha. For more information see the [LICENSE](LICENSE.md) file.

Built from https://github.com/viandwi24/nuxt3-awesome-starter
import type { ThemeDefinition } from 'vuetify'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = async({ app, isClient }) => {
  if (!isClient)
    return

  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#0d9488',
    },
  }
  const { createVuetify } = await import('vuetify')
  const { Intersect } = await import('vuetify/directives')
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
    directives: { Intersect },
  })

  app.use(vuetify)
}

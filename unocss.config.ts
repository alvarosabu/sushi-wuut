import {
  defineConfig,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
  presetTypography,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      shrimp: {
        DEFAULT: '#FB8D4B',
        '50': '#FFFFFF',
        '100': '#FFF2EB',
        '200': '#FED9C3',
        '300': '#FDC09B',
        '400': '#FCA673',
        '500': '#FB8D4B',
        '600': '#FA6A14',
        '700': '#D15105',
        '800': '#9A3C03',
        '900': '#632702',
      },
    },
  },
  presets: [
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: ['Open Sans', 'Open Sans:400,700'],
        mono: ['Fira Code', 'Fira Mono:400,700'],
        display: ['Dosis', 'Dosis:400,700'],
      },
    }),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

// 1. https://stackoverflow.com/questions/71329335/how-to-setup-storybook-with-tailwindcss-reactjs-and-typescript
// 2. https://www.youtube.com/watch?v=KyephjW1irE - Ionic: How to use Storybook with Stencil

import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import 'tailwindcss/tailwind.css';
import { defineCustomElements } from '../loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { addDecorator } from '@storybook/react'
import type { Preview } from '@storybook/react-webpack5'
import { Themes } from '../../src/app/providers/ThemeProvider'
import { RouterDecorator } from "../../src/shared/configs/storybook/RouterDecorator"
import { StyleDecorator } from "../../src/shared/configs/storybook/StyleDecorator"
import { ThemeDecorator } from "../../src/shared/configs/storybook/ThemeDecorator"
import 'loki/configure-react'

export const preview: Preview = {
  args:{
    __IS_DEV__: true
  },
  //@ts-ignore
  decorators:[StyleDecorator, RouterDecorator, ThemeDecorator(Themes.LIGHT)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Themes.LIGHT));
// addDecorator(RouterDecorator);

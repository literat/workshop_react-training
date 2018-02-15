// @flow
import createReactContext, { type Context } from 'create-react-context';
import type { Theme } from '../theme/types';
import { browserThemeLight } from '../theme/browserTheme';

type Value = Theme;

const value = browserThemeLight;

const ThemeContext: Context<Value> = createReactContext(value);

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext.Consumer;

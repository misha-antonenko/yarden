import * as Fs from 'fs';

import {grayscalePalette} from './color';
import * as VimPalettes from './vim-palettes';
import * as Themes from './themes';
import * as Theme from './types/vscode-theme';

const CHROMATIC_KEYS: ReadonlySet<string> = new Set(['ansi', 'tints']);

{
	Fs.writeFileSync(
		'themes/yarden.color-theme.json',
		Theme.stringify(
			Themes.Dark.create(
				grayscalePalette(
					VimPalettes.Dark.toVscode(VimPalettes.Dark.Palette),
					CHROMATIC_KEYS,
				),
			),
		),
	);
	Fs.writeFileSync(
		'themes/yarden-light.color-theme.json',
		Theme.stringify(
			Themes.Light.create(
				grayscalePalette(
					VimPalettes.Light.toVscode(VimPalettes.Light.Palette),
					CHROMATIC_KEYS,
				),
			),
		),
	);
}

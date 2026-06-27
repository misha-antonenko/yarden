import * as Fs from 'fs';

import * as VimPalettes from './vim-palettes';
import * as Themes from './themes';
import * as Theme from './types/vscode-theme';

{
	Fs.writeFileSync(
		'themes/yarden.color-theme.json',
		Theme.stringify(
			Themes.Dark.create(VimPalettes.Dark.toVscode(VimPalettes.Dark.Palette)),
		),
	);
	Fs.writeFileSync(
		'themes/yarden-light.color-theme.json',
		Theme.stringify(
			Themes.Light.create(
				VimPalettes.Light.toVscode(VimPalettes.Light.Palette),
			),
		),
	);
}

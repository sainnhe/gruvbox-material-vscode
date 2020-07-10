<h1 align="center">
𝐆𝐫𝐮𝐯𝐛𝐨𝐱 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥
</h1>

<h2 align="center">
𝐃𝐚𝐫𝐤 𝐇𝐚𝐫𝐝 𝐅𝐥𝐚𝐭
</h2>

![dark-hard-flat](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-dark-hard-flat.png)

<h2 align="center">
𝐃𝐚𝐫𝐤 𝐌𝐞𝐝𝐢𝐮𝐦 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥
</h2>

![dark-medium-material](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-dark-medium-material.png)

<h2 align="center">
𝐃𝐚𝐫𝐤 𝐒𝐨𝐟𝐭 𝐇𝐢𝐠𝐡 𝐂𝐨𝐧𝐭𝐫𝐚𝐬𝐭
</h2>

![dark-soft-high-contrast](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-dark-soft-high-contrast.png)

<h2 align="center">
𝐋𝐢𝐠𝐡𝐭 𝐇𝐚𝐫𝐝 𝐅𝐥𝐚𝐭
</h2>

![light-hard-flat](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-light-hard-flat.png)

<h2 align="center">
𝐋𝐢𝐠𝐡𝐭 𝐌𝐞𝐝𝐢𝐮𝐦 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥
</h2>

![light-medium-material](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-light-medium-material.png)

<h2 align="center">
𝐋𝐢𝐠𝐡𝐭 𝐒𝐨𝐟𝐭 𝐇𝐢𝐠𝐡 𝐂𝐨𝐧𝐭𝐫𝐚𝐬𝐭
</h2>

![light-soft-high-contrast](https://gitlab.com/sainnhe/img/-/raw/master/gm-vsc-light-soft-high-contrast.png)

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=sainnhe.gruvbox-material">Marketplace</a> |
  <a href="https://github.com/sainnhe/gruvbox-material-vscode">Repository</a> |
  <a href="https://github.com/sainnhe/gruvbox-material-vscode/issues">Issues</a> |
  <a href="https://github.com/sainnhe/gruvbox-material-vscode/blob/master/CHANGELOG.md">Changelog</a>
  <br><br>
</p>

This color scheme is a port of [Gruvbox Material](https://github.com/sainnhe/gruvbox-material) for Visual Studio Code.

> Gruvbox Material is a modified version of [Gruvbox](https://github.com/morhetz/gruvbox), the contrast is adjusted to be softer in order to protect developers' eyes.

There are 3 palettes available in this color scheme, the screenshots above only show the `material` palette. See [sainnhe/gruvbox-material](https://github.com/sainnhe/gruvbox-material) for a preview of all palettes.

## Features

- Carefully designed color palette for eye protection.
- Switch back to the original color palette whenever you like.
- Customizable.
- Rich support for common file types.
- Semantic highlighting support.
- Italic support.

## Installation

### Via Marketplace

1. Press extensions icon in your vscode.
2. Search `sainnhe.gruvbox-material`.
3. Select this extension and press `install` button.

### Via Quick Open

Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
ext install sainnhe.gruvbox-material
```

### Compile From Source

**Requirements**:

1. [git](git-scm.com/)
2. [nodejs](https://nodejs.org/en/download/)
3. [typescript](https://www.typescriptlang.org/index.html#download-links)
4. [vsce](https://www.npmjs.com/package/vsce)

**Steps**:

Open your terminal emulator and execute the following commands:

1. Clone the repository: `git clone --depth 1 https://github.com/sainnhe/gruvbox-material-vscode.git`
2. Install node modules: `cd gruvbox-material-vscode && npm install`
3. Package this extension to a `.vsix` file: `vsce package`
4. Install from this `.vsix` file: [How to install VS code extension manually? - Stack Overflow](https://stackoverflow.com/questions/37071388/how-can-i-install-visual-studio-code-extensions-offline)

## Usage

1. Click the gear button in the lower left corner.
2. Click `Color Theme`.
3. Select Gruvbox Material in the list.

## Customization

Several configuration options are provided, you can customize the palette, contrast, workbench style, etc. used in this theme.

1. Click the gear button in the lower left corner.
2. Click `Settings`.
3. Select `Gruvbox Material` and change the settings.

## FAQ

**Q: How to enable cursive italic keywords?**

**A:** The `italicKeywords` is designed to use with fonts that support cursive italic styles. To enable this feature:

1. Install a font that supports cursive italic styles, for example: [Fira Code iCursive Op](https://github.com/sainnhe/icursive-nerd-font)(this is the font used in the screenshots).
2. Set the `gruvboxMaterial.italicKeywords` option to `true` in user settings.
3. (optional)Set the `gruvboxMaterial.italicComments` option to `false` in user settings.

**Q: How to disable semantic highlighting?**

**A:** Add this to your `settings.json`: `"editor.semanticHighlighting.enabled": false`

## Related Projects

See this [wiki page](https://github.com/sainnhe/gruvbox-material/wiki/Related-Projects).

### More Color Schemes

- [Forest Night](https://marketplace.visualstudio.com/items?itemName=sainnhe.forest-night)
- [Edge](https://marketplace.visualstudio.com/items?itemName=sainnhe.edge)
- [Sonokai](https://marketplace.visualstudio.com/items?itemName=sainnhe.sonokai)

## Contributing

See [this article](https://www.sainnhe.dev/post/gruvbox-material-vscode-contrib/).

## Credits

- The color palette is based on [gruvbox](https://github.com/morhetz/gruvbox) by [@morhetz](https://github.com/morhetz)
- The color palette is adjusted by [@sainnhe](https://github.com/sainnhe)
- The icon is designed by [@GulajavaMinistudio](https://github.com/GulajavaMinistudio)
- The material workbench style is designed by [@sainnhe](https://github.com/sainnhe)
- The flat workbench style is designed by [@sainnhe](https://github.com/sainnhe)
- The high contrast workbench style is designed by [@GulajavaMinistudio](https://github.com/GulajavaMinistudio)

## Inspirations

- [morhetz/gruvbox](https://github.com/morhetz/gruvbox): original gruvbox
- [atom.io](https://atom.io): the `white` color in the dark variant
- [zefei/cake16](https://github.com/zefei/cake16): the `black` color in the light variant
- [material-theme/vsc-material-theme](https://github.com/material-theme/vsc-material-theme): the material workbench style
- [Binaryify/OneDark-Pro](https://github.com/Binaryify/OneDark-Pro): the flat workbench style
- [Monokai Pro](https://monokai.pro/vscode): the high contrast workbench style
- [Google Material Design](https://www.material.io)

## License

[MIT License](https://github.com/sainnhe/gruvbox-material-vscode/blob/master/LICENSE) © sainnhe

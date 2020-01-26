<h1 align="center">
𝐆𝐫𝐮𝐯𝐛𝐨𝐱 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥
</h1>

<h2 align="center">
Dark Hard Flat
</h2>

![dark-hard-flat](https://user-images.githubusercontent.com/37491630/73133849-64111f00-4026-11ea-946a-27b4a95e7b56.png)

<h2 align="center">
Dark Medium Material
</h2>

![dark-medium-material](https://user-images.githubusercontent.com/37491630/73133850-65dae280-4026-11ea-9b0c-f87c1c39299f.png)

<h2 align="center">
Dark Soft High Contrast
</h2>

![dark-soft-highContrast](https://user-images.githubusercontent.com/37491630/73133851-67a4a600-4026-11ea-83fc-9f84d2b342bc.png)

<h2 align="center">
Light Hard Flat
</h2>

![light-hard-flat](https://user-images.githubusercontent.com/37491630/73133852-696e6980-4026-11ea-820d-0efc98c9bb26.png)

<h2 align="center">
Light Medium Material
</h2>

![light-medium-material](https://user-images.githubusercontent.com/37491630/73133853-6a9f9680-4026-11ea-94f4-8b0d2bf534f7.png)

<h2 align="center">
Light Soft High Contrast
</h2>

![light-soft-highContrast](https://user-images.githubusercontent.com/37491630/73133854-6d01f080-4026-11ea-82e9-8d8e0e7ce7d9.png)

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=sainnhe.gruvbox-material">Marketplace</a> |
  <a href="https://github.com/gruvbox-material/vscode">Repository</a> |
  <a href="https://github.com/gruvbox-material/vscode/issues">Issues</a> |
  <a href="https://github.com/gruvbox-material/vscode/blob/master/CHANGELOG.md">Changelog</a>
  <br><br>
</p>

This color scheme is a port of [Gruvbox Material](https://github.com/gruvbox-material/gruvbox-material) for Visual Studio Code. 

> Gruvbox Material is a modified version of [Gruvbox](https://github.com/morhetz/gruvbox), the contrast is adjusted to be softer in order to protect developers' eyes.

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

## Usage

1. Click the gear button in the lower left corner.
2. Click `Color Theme`.
3. Select Gruvbox Material in the list.

## FAQ

**Q: What's the font used in the screenshots?**

**A:** [Fira Code iCursive Op](https://github.com/sainnhe/icursive-nerd-font)

**Q: How to enable italic in this theme?**

**A:** See this [blog](https://dev.to/salted-bytes/adding-italics-support-to-your-favourite-vscode-theme-2ec9).

Example config(enable italic in all themes):

```json
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": "emphasis",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "strong",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "entity.other.attribute-name",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "markup.underline",
                "settings": {
                    "fontStyle": "underline"
                }
            },
            {
                "scope": "markup.bold",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.heading",
                "settings": {
                    "fontStyle": "bold"
                }
            },
            {
                "scope": "markup.italic",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "storage.type",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "storage.modifier",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "String interpolation",
                "scope": [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": "keyword.control",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "keyword.operator.new",
                    "keyword.operator.expression",
                    "keyword.operator.cast",
                    "keyword.operator.sizeof",
                    "keyword.operator.logical.python"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "this.self",
                "scope": "variable.language",
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "@Decorator",
                "scope": [
                    "meta.decorator punctuation.decorator"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "scope": [
                    "punctuation.definition.comment",
                    "comment"
                ],
                "settings": {
                    "fontStyle": "regular"
                }
            }
        ]
    }
```

## Related Projects

See [gruvbox-material/gruvbox-material](https://github.com/gruvbox-material/gruvbox-material)

## Contributing

See [CONTRIBUTING.md](https://github.com/gruvbox-material/gruvbox-material/blob/master/CONTRIBUTING.md)

## Credits

- The color palette is based on [gruvbox](https://github.com/morhetz/gruvbox) by [@morhetz](https://github.com/morhetz)
- The color palette is adjusted by [@sainnhe](https://github.com/sainnhe)
- Workbench colors are based on [jdinhify/vscode-theme-gruvbox](https://github.com/jdinhify/vscode-theme-gruvbox)
- The icon is designed by [@GulajavaMinistudio](https://github.com/GulajavaMinistudio)

## Inspirations

- [morhetz/gruvbox](https://github.com/morhetz/gruvbox): original gruvbox
- [atom.io](https://atom.io): the `white` color in the dark variant
- [zefei/cake16](https://github.com/zefei/cake16): the `black` color in the light variant
- [Google Material Design](https://www.material.io)

## License

[MIT License](https://github.com/gruvbox-material/vscode/blob/master/LICENSE) © Gruvbox Material

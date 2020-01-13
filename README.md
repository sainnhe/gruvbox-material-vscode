<h1 align="center">
𝐆𝐫𝐮𝐯𝐛𝐨𝐱 𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥
</h1>

<h2 align="center">
𝐇𝐚𝐫𝐝 𝐃𝐚𝐫𝐤
</h2>

![hard-dark](https://user-images.githubusercontent.com/37491630/72215377-680f4e00-350a-11ea-95a8-3a3afb42cbd2.png)

<h2 align="center">
𝐌𝐞𝐝𝐢𝐮𝐦 𝐃𝐚𝐫𝐤
</h2>

![medium-dark](https://user-images.githubusercontent.com/37491630/72215380-6c3b6b80-350a-11ea-947a-b17796017ea5.png)

<h2 align="center">
𝐒𝐨𝐟𝐭 𝐃𝐚𝐫𝐤
</h2>

![soft-dark](https://user-images.githubusercontent.com/37491630/72215383-6fcef280-350a-11ea-98b6-f096b6f29965.png)

<h2 align="center">
𝐇𝐚𝐫𝐝 𝐋𝐢𝐠𝐡𝐭
</h2>

![hard-light](https://user-images.githubusercontent.com/37491630/72215378-69d91180-350a-11ea-8da9-f230dd58c3f4.png)

<h2 align="center">
𝐌𝐞𝐝𝐢𝐮𝐦 𝐋𝐢𝐠𝐡𝐭
</h2>

![medium-light](https://user-images.githubusercontent.com/37491630/72215381-6e052f00-350a-11ea-87e0-20d3f84b7519.png)

<h2 align="center">
𝐒𝐨𝐟𝐭 𝐋𝐢𝐠𝐡𝐭
</h2>

![soft-light](https://user-images.githubusercontent.com/37491630/72215384-7198b600-350a-11ea-845a-ccb4ec468626.png)

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

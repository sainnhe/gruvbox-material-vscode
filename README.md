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
  <a href="https://github.com/sainnhe/gruvbox-material-vscode">Repository</a> |
  <a href="https://github.com/sainnhe/gruvbox-material-vscode/issues">Issues</a> |
  <a href="https://github.com/sainnhe/gruvbox-material-vscode/blob/master/CHANGELOG.md">Changelog</a>
  <br><br>
</p>

This theme is a port of [gruvbox-material](https://github.com/sainnhe/gruvbox-material) for Visual Studio Code. 

> In my opinion, the very first thing a color scheme should do is to be eye-friendly, anything else is secondary. This requires soft contrast and low blue light.
>
> Gruvbox Material is based on Gruvbox, but with a very different color palette, I'm trying to adjust the foreground colors to match these requirements.

## Contribution

To hack this theme, clone the repository on github and open the folder using vscode, then modify colors in `./themes/*` and press `F5`.

[Extension Guides: Color Theme](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme)

[Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)

## Related Projects

See [gruvbox-material#related-projects](https://github.com/sainnhe/gruvbox-material#related-projects)

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

## Thanks to

- [morhetz/gruvbox](https://github.com/morhetz/gruvbox): original gruvbox
- [jdinhify/vscode-theme-gruvbox](https://github.com/jdinhify/vscode-theme-gruvbox): workbench colors are based on it
- [Tyriar/vscode-theme-generator](https://github.com/Tyriar/vscode-theme-generator): common highlight groups are inspired by it
- [@GulajavaMinistudio](https://github.com/GulajavaMinistudio): icon for this extension

## License

[MIT](https://github.com/sainnhe/gruvbox-material-vscode/blob/master/LICENSE) && [Anti-996](https://github.com/sainnhe/gruvbox-material-vscode/blob/master/Anti-996-LICENSE)

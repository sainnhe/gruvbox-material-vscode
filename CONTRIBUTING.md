## Requirements

Make sure you have the following programs installed:

1. [git](git-scm.com/)
2. [nodejs && npm](https://nodejs.org/en/download/)

## Start

First of all, let's try to package this extension and install it to your vscode.

```shell
$ git clone --depth 1 https://github.com/sainnhe/gruvbox-material-vscode.git
$ cd gruvbox-material-vscode
$ npm ci
$ npm run package
$ code --install-extension ./gruvbox-material-*.vsix
```

Now, use vscode to open this project and modify some code, then press `F5` to start debugging.

## The theme files

The most critical files for a theme extension are some json files located in [/themes](https://github.com/sainnhe/gruvbox-material-vscode/tree/v6.2.1/themes), they defined all the colors of a theme.

A theme file can be roughly divided into three parts:

- [workbench colors](https://github.com/sainnhe/gruvbox-material-vscode/blob/v6.2.1/themes/gruvbox-material-dark.json#L25-L332): The UI of vscode.
- [syntax highlighting](https://github.com/sainnhe/gruvbox-material-vscode/blob/v6.2.1/themes/gruvbox-material-dark.json#L333-L2117): The syntax highlighting.
- [semantic highlighting](https://github.com/sainnhe/gruvbox-material-vscode/blob/v6.2.1/themes/gruvbox-material-dark.json#L5-L24): This is a new feature since vscode 1.43, see [Semantic Highlighting Overview](https://github.com/microsoft/vscode/wiki/Semantic-Highlighting-Overview). This feature is experimental, currently supports js, ts, java and C family.

For all available workbench colors, see [this documentation](https://code.visualstudio.com/api/references/theme-color).

To get current token of syntax highlighting or semantic highlighting, press `Ctrl+Shift+P` to open command panel and search for "Inspect Editor Tokens and Scopes".

In this extension, the json files will be automatically generated when user configuration changes, so don't keep your changes in the json files, but modify the typescript code instead.

## Publishing

I've setup a github action for this repository that can publish this extension to vscode marketplace and open vsx registry automatically when a new tag is created. For example, to release `v6.2.10`, do something like this:

1. Edit `package.json`, modify the `version` field: `"version": "6.2.10",`
2. Update `package-lock.json`: `$ npm install`
3. Commit this change: `$ git commit -am "release v6.2.10"`
4. Create a tag: `$ git tag -a v1.2.0` and edit the tag message based on CHANGELOG.md

```
v6.2.10

- Publish to open vsx registry.
- Setup a pre-commit hook that can regenerate the theme file using default settings.
```

4. Push the commit and tag to github: `$ git push origin master v6.2.10`

## Some designs

There are 3 workbench styles available in this theme:

- material: inspired by [material-theme/vsc-material-theme](https://github.com/material-theme/vsc-material-theme)
- flat: inspired by [Binaryify/OneDark-Pro](https://github.com/Binaryify/OneDark-Pro)
- high contrast: inspired by [Monokai Pro](https://monokai.pro/vscode)

It's highly recommended to try them first if you want to modify the code of a workbench style.

When you are modifying a workbench style, remember a principle:

> Don't make elements too colorful, because this will easily distract you from the code.

You may notice that I used many grey colors in workbench styles, it's exactly because of this, colorless elements will help you focus more on the code.

In addition, this theme is designed to be borderless, so DO NOT add unnecessary borders.

There are 2 syntax highlighting logic available in this theme: default and colorful

In the default syntax highlighting logic, only minimum but necessary tokens will be colored, because if everything is special, then nothing is special.

Unnecessary tokens include: variables, properties, members, parameters, etc.

In contrast, in the colorful syntax highlighting logic, as many tokens as possible will be colored.

## Note

- I've setup 2 pre-commit hook, one of which is used to generate `/themes/*.json` automatically using default user settings. So when developing this extension, don't care about how the themes files looks like but just focus on the typescript code.
- DO NOT add new colors or modify existing colors in [/src/palette](https://github.com/sainnhe/gruvbox-material-vscode/tree/master/src/palette). The current color palettes are very carefully designed and tested on several devices. If you do want to change the color palettes, create a new theme extension instead.
- Don't add new configuration options casually, there are already so many configuration options and too many options may confuse users.
- Don't forget to update the changelog.
- Don't forget to update [italic syntax file](https://github.com/sainnhe/gruvbox-material-vscode/blob/master/src/syntax/italic.ts) if the syntax source code is modified.
- Comments including `{{{` or `}}}` are vim fold markers, I use them to fold the code in vim, so don't delete them.

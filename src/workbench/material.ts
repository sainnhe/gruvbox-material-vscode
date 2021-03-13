import { Palette, Configuration } from "../interface";

export function materialWorkbench(
  palette: Palette,
  configuration: Configuration,
  variant: string
) {
  let selectionBg: string;
  let editorSelectionBg: string;
  let cursorFg: string;
  let diagnosticTextBackgroundOpacity: string;
  if (variant === "dark") {
    switch (
      configuration.darkSelection // {{{
    ) {
      case "grey": {
        selectionBg = `${palette.bg6}b0`;
        editorSelectionBg = `${palette.bg4}f0`;
        break;
      }
      case "green": {
        selectionBg = `${palette.darkAqua}80`;
        editorSelectionBg = `${palette.darkAqua}40`;
        break;
      }
      case "blue": {
        selectionBg = `${palette.darkBlue}80`;
        editorSelectionBg = `${palette.darkBlue}40`;
        break;
      }
      case "red": {
        selectionBg = `${palette.darkRed}80`;
        editorSelectionBg = `${palette.darkRed}40`;
        break;
      }
      default: {
        selectionBg = `${palette.bg6}b0`;
        editorSelectionBg = `${palette.bg4}f0`;
      }
    } // }}}
    switch (
      configuration.darkCursor // {{{
    ) {
      case "white": {
        cursorFg = `${palette.fg}`;
        break;
      }
      case "red": {
        cursorFg = `${palette.red}`;
        break;
      }
      case "orange": {
        cursorFg = `${palette.orange}`;
        break;
      }
      case "yellow": {
        cursorFg = `${palette.yellow}`;
        break;
      }
      case "green": {
        cursorFg = `${palette.green}`;
        break;
      }
      case "aqua": {
        cursorFg = `${palette.aqua}`;
        break;
      }
      case "blue": {
        cursorFg = `${palette.blue}`;
        break;
      }
      case "purple": {
        cursorFg = `${palette.purple}`;
        break;
      }
      default: {
        cursorFg = `${palette.fg}`;
      }
    } // }}}
  } else {
    switch (
      configuration.lightSelection // {{{
    ) {
      case "grey": {
        selectionBg = `${palette.bg6}b0`;
        editorSelectionBg = `${palette.bg4}f0`;
        break;
      }
      case "green": {
        selectionBg = `${palette.darkAqua}80`;
        editorSelectionBg = `${palette.darkAqua}40`;
        break;
      }
      case "blue": {
        selectionBg = `${palette.darkBlue}80`;
        editorSelectionBg = `${palette.darkBlue}40`;
        break;
      }
      case "red": {
        selectionBg = `${palette.darkRed}80`;
        editorSelectionBg = `${palette.darkRed}40`;
        break;
      }
      default: {
        selectionBg = `${palette.bg6}b0`;
        editorSelectionBg = `${palette.bg4}f0`;
      }
    } // }}}
    switch (
      configuration.lightCursor // {{{
    ) {
      case "black": {
        cursorFg = `${palette.fg}`;
        break;
      }
      case "red": {
        cursorFg = `${palette.red}`;
        break;
      }
      case "orange": {
        cursorFg = `${palette.orange}`;
        break;
      }
      case "yellow": {
        cursorFg = `${palette.yellow}`;
        break;
      }
      case "green": {
        cursorFg = `${palette.green}`;
        break;
      }
      case "aqua": {
        cursorFg = `${palette.aqua}`;
        break;
      }
      case "blue": {
        cursorFg = `${palette.blue}`;
        break;
      }
      case "purple": {
        cursorFg = `${palette.purple}`;
        break;
      }
      default: {
        cursorFg = `${palette.fg}`;
      }
    } // }}}
  }
  switch (
    configuration.diagnosticTextBackgroundOpacity // {{{
  ) {
    case "0%": {
      diagnosticTextBackgroundOpacity = "00";
      break;
    }
    case "12.5%": {
      diagnosticTextBackgroundOpacity = "20";
      break;
    }
    case "25%": {
      diagnosticTextBackgroundOpacity = "40";
      break;
    }
    case "37.5%": {
      diagnosticTextBackgroundOpacity = "60";
      break;
    }
    case "50%": {
      diagnosticTextBackgroundOpacity = "80";
      break;
    }
    default: {
      diagnosticTextBackgroundOpacity = "00";
    }
  } // }}}
  return {
    foreground: `${palette.grey2}`,
    focusBorder: `${palette.bg5}00`,
    "widget.shadow": `${palette.shadow}`,
    "selection.background": `${selectionBg}`,
    errorForeground: `${palette.red}`,
    "icon.foreground": `${palette.aqua}`,
    "textLink.foreground": `${palette.green}`,
    "textLink.activeForeground": `${palette.darkGreen}`,
    "textCodeBlock.background": `${palette.bg2}`,
    "textBlockQuote.background": `${palette.bg2}`,
    "textBlockQuote.border": `${palette.grey2}`,
    "button.background": `${palette.grey2}`,
    "button.hoverBackground": `${palette.grey1}`,
    "button.foreground": `${palette.bg}`,
    "checkbox.background": `${palette.bg}`,
    "checkbox.foreground": `${palette.orange}`,
    "checkbox.border": `${palette.bg7}`,
    "dropdown.border": `${palette.bg5}`,
    "dropdown.background": `${palette.bg}`,
    "dropdown.foreground": `${palette.grey2}`,
    "input.border": `${palette.bg5}`,
    "input.background": `${palette.bg}00`,
    "input.foreground": `${palette.fg}`,
    "input.placeholderForeground": `${palette.grey0}`,
    "inputOption.activeBorder": `${palette.aqua}`,
    "inputValidation.errorBorder": `${palette.red}`,
    "inputValidation.errorBackground": `${palette.darkRed}`,
    "inputValidation.errorForeground": `${palette.fg}`,
    "inputValidation.infoBorder": `${palette.blue}`,
    "inputValidation.infoBackground": `${palette.darkBlue}`,
    "inputValidation.infoForeground": `${palette.fg}`,
    "inputValidation.warningBorder": `${palette.yellow}`,
    "inputValidation.warningBackground": `${palette.darkYellow}`,
    "inputValidation.warningForeground": `${palette.fg}`,
    "scrollbar.shadow": `${palette.shadow}`,
    "scrollbarSlider.activeBackground": `${palette.grey2}`,
    "scrollbarSlider.hoverBackground": `${palette.bg9}`,
    "scrollbarSlider.background": `${palette.bg9}80`,
    "badge.background": `${palette.grey2}`,
    "badge.foreground": `${palette.bg}`,
    "progressBar.background": `${palette.green}`,
    "list.activeSelectionForeground": `${palette.fg}`,
    "list.activeSelectionBackground": `${palette.bg5}60`,
    "list.inactiveSelectionForeground": `${palette.grey2}`,
    "list.inactiveSelectionBackground": `${palette.bg5}48`,
    "list.dropBackground": `${palette.bg2}80`,
    "list.focusForeground": `${palette.fg}`,
    "list.focusBackground": `${palette.bg5}60`,
    "quickInput.list.focusBackground": `${palette.bg5}60`,
    "list.inactiveFocusBackground": `${palette.bg5}48`,
    "list.highlightForeground": `${palette.green}`,
    "list.hoverForeground": `${palette.fg}`,
    "list.hoverBackground": `${palette.bg}00`,
    "list.invalidItemForeground": `${palette.darkRed}`,
    "list.errorForeground": `${palette.red}`,
    "list.warningForeground": `${palette.yellow}`,
    "tree.indentGuidesStroke": `${palette.grey0}`,
    "activityBar.border": `${palette.bg}`,
    "activityBar.background": `${palette.bg}`,
    "activityBar.foreground": `${palette.grey2}`,
    "activityBar.inactiveForeground": `${palette.grey0}`,
    "activityBar.dropBackground": `${palette.bg}`,
    "activityBar.activeBorder": `${palette.grey1}`,
    "activityBar.activeFocusBorder": `${palette.grey1}`,
    "activityBarBadge.background": `${palette.grey2}`,
    "activityBarBadge.foreground": `${palette.bg}`,
    "sideBar.foreground": `${palette.grey1}`,
    "sideBar.background": `${palette.bg}`,
    "sideBarSectionHeader.background": `${palette.bg}00`,
    "sideBarTitle.foreground": `${palette.grey2}`,
    "sideBarSectionHeader.foreground": `${palette.grey2}`,
    "minimap.findMatchHighlight": `${palette.darkAqua}60`,
    "minimap.selectionHighlight": `${palette.bg6}f0`,
    "minimap.errorHighlight": `${palette.darkRed}80`,
    "minimap.warningHighlight": `${palette.darkYellow}80`,
    "minimapGutter.addedBackground": `${palette.darkGreen}a0`,
    "minimapGutter.modifiedBackground": `${palette.darkBlue}a0`,
    "minimapGutter.deletedBackground": `${palette.darkRed}a0`,
    "editorGroup.border": `${palette.bg0}`,
    "editorGroupHeader.tabsBackground": `${palette.bg}`,
    "editorGroupHeader.noTabsBackground": `${palette.bg}`,
    "editorGroup.dropBackground": `${palette.bg5}60`,
    "tab.border": `${palette.bg}`,
    "tab.activeBorder": `${palette.grey1}`,
    "tab.inactiveBackground": `${palette.bg}`,
    "tab.hoverBackground": `${palette.bg}`,
    "tab.hoverForeground": `${palette.fg}`,
    "tab.activeBackground": `${palette.bg}`,
    "tab.activeForeground": `${palette.grey2}`,
    "tab.inactiveForeground": `${palette.grey0}`,
    "tab.unfocusedActiveForeground": `${palette.grey2}`,
    "tab.unfocusedActiveBorder": `${palette.bg}00`,
    "tab.unfocusedInactiveForeground": `${palette.grey0}`,
    "editor.background": `${palette.bg}`,
    "editor.foreground": `${palette.fg}`,
    "editorLineNumber.foreground": `${palette.bg9}`,
    "editorLineNumber.activeForeground": `${palette.grey1}`,
    "editorCursor.foreground": `${cursorFg}`,
    "editor.selectionBackground": `${editorSelectionBg}`,
    "editor.selectionHighlightBackground": `${palette.bg7}78`,
    "editor.wordHighlightBackground": `${palette.bg4}b0`,
    "editor.wordHighlightStrongBackground": `${palette.darkAqua}30`,
    "editor.findMatchBackground": `${palette.darkRed}40`,
    "editor.findMatchHighlightBackground": `${palette.darkAqua}40`,
    "editor.findRangeHighlightBackground": `${palette.darkPurple}40`,
    "editor.lineHighlightBorder": `${palette.bg5}00`,
    "editor.rangeHighlightBackground": `${palette.darkBlue}30`,
    "editor.symbolHighlightBackground": `${palette.darkRed}40`,
    "editor.hoverHighlightBackground": `${palette.darkAqua}50`,
    "editorLink.activeForeground": `${palette.green}`,
    "editor.lineHighlightBackground": `${palette.bg3}70`,
    "editorWhitespace.foreground": `${palette.bg5}`,
    "editorIndentGuide.background": `${palette.grey2}20`,
    "editorIndentGuide.activeBackground": `${palette.grey2}50`,
    "editorRuler.foreground": `${palette.bg8}a0`,
    "editorCodeLens.foreground": `${palette.grey1}`,
    "editorBracketMatch.border": `${palette.bg}00`,
    "editorBracketMatch.background": `${palette.grey0}80`,
    "editorOverviewRuler.border": `${palette.bg}00`,
    "editorOverviewRuler.findMatchForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.rangeHighlightForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.selectionHighlightForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.wordHighlightForeground": `${palette.bg9}`,
    "editorOverviewRuler.wordHighlightStrongForeground": `${palette.bg9}`,
    "editorOverviewRuler.modifiedForeground": `${palette.darkBlue}a0`,
    "editorOverviewRuler.addedForeground": `${palette.darkGreen}a0`,
    "editorOverviewRuler.deletedForeground": `${palette.darkRed}a0`,
    "editorOverviewRuler.errorForeground": `${palette.red}`,
    "editorOverviewRuler.warningForeground": `${palette.yellow}`,
    "editorOverviewRuler.infoForeground": `${palette.purple}`,
    "editorOverviewRuler.currentContentForeground": `${palette.darkBlue}`,
    "editorOverviewRuler.incomingContentForeground": `${palette.darkAqua}`,
    "editorOverviewRuler.commonContentForeground": `${palette.grey1}`,
    "problemsErrorIcon.foreground": `${palette.red}`,
    "problemsWarningIcon.foreground": `${palette.yellow}`,
    "problemsInfoIcon.foreground": `${palette.blue}`,
    "editorUnnecessaryCode.border": `${palette.bg}`,
    "editorUnnecessaryCode.opacity": `#00000080`,
    "editorError.foreground": `${palette.darkRed}`,
    "editorWarning.foreground": `${palette.darkYellow}`,
    "editorInfo.foreground": `${palette.darkBlue}`,
    "editorHint.foreground": `${palette.darkPurple}`,
    "editorError.background": `${palette.darkRed}${diagnosticTextBackgroundOpacity}`,
    "editorWarning.background": `${palette.darkYellow}${diagnosticTextBackgroundOpacity}`,
    "editorInfo.background": `${palette.darkBlue}${diagnosticTextBackgroundOpacity}`,
    "editorGutter.background": `${palette.bg}00`,
    "editorGutter.modifiedBackground": `${palette.darkBlue}a0`,
    "editorGutter.addedBackground": `${palette.darkGreen}a0`,
    "editorGutter.deletedBackground": `${palette.darkRed}a0`,
    "editorGutter.commentRangeForeground": `${palette.grey0}`,
    "diffEditor.insertedTextBackground": `${palette.darkAqua}20`,
    "diffEditor.removedTextBackground": `${palette.darkRed}20`,
    "editorSuggestWidget.background": `${palette.bg3}`,
    "editorSuggestWidget.foreground": `${palette.fg}`,
    "editorSuggestWidget.highlightForeground": `${palette.green}`,
    "editorSuggestWidget.selectedBackground": `${palette.bg5}`,
    "editorSuggestWidget.border": `${palette.bg3}`,
    "editorWidget.background": `${palette.bg}`,
    "editorWidget.border": `${palette.bg9}`,
    "editorHoverWidget.background": `${palette.bg2}`,
    "editorHoverWidget.border": `${palette.bg6}`,
    "editorMarkerNavigation.background": `${palette.bg2}`,
    "editorMarkerNavigationError.background": `${palette.red}`,
    "editorMarkerNavigationWarning.background": `${palette.yellow}`,
    "editorMarkerNavigationInfo.background": `${palette.aqua}`,
    "peekView.border": `${palette.bg4}`,
    "peekViewEditor.background": `${palette.bg2}`,
    "peekViewEditor.matchHighlightBackground": `${palette.darkYellow}50`,
    "peekViewEditorGutter.background": `${palette.bg2}`,
    "peekViewResult.fileForeground": `${palette.grey2}`,
    "peekViewResult.lineForeground": `${palette.grey1}`,
    "peekViewResult.matchHighlightBackground": `${palette.darkYellow}50`,
    "peekViewResult.selectionBackground": `${palette.darkAqua}50`,
    "peekViewResult.selectionForeground": `${palette.fg1}`,
    "peekViewTitleDescription.foreground": `${palette.fg1}`,
    "peekViewTitleLabel.foreground": `${palette.green}`,
    "peekViewResult.background": `${palette.bg2}`,
    "peekViewTitle.background": `${palette.bg4}`,
    "pickerGroup.border": `${palette.fg0}1a`,
    "terminal.foreground": `${palette.fg}`,
    "terminalCursor.foreground": `${cursorFg}`,
    "terminal.ansiBlack":
      variant === "dark" ? `${palette.bg2}` : `${palette.fg0}`,
    "terminal.ansiBlue": `${palette.blue}`,
    "terminal.ansiBrightBlack":
      variant === "dark" ? `${palette.grey1}` : `${palette.fg}`,
    "terminal.ansiBrightBlue": `${palette.blue}`,
    "terminal.ansiBrightCyan": `${palette.aqua}`,
    "terminal.ansiBrightGreen": `${palette.green}`,
    "terminal.ansiBrightMagenta": `${palette.purple}`,
    "terminal.ansiBrightRed": `${palette.red}`,
    "terminal.ansiBrightWhite":
      variant === "dark" ? `${palette.fg0}` : `${palette.bg2}`,
    "terminal.ansiBrightYellow": `${palette.yellow}`,
    "terminal.ansiCyan": `${palette.aqua}`,
    "terminal.ansiGreen": `${palette.green}`,
    "terminal.ansiMagenta": `${palette.purple}`,
    "terminal.ansiRed": `${palette.red}`,
    "terminal.ansiWhite":
      variant === "dark" ? `${palette.fg}` : `${palette.grey1}`,
    "terminal.ansiYellow": `${palette.yellow}`,
    "debugToolBar.background": `${palette.bg}`,
    "debugTokenExpression.name": `${palette.blue}`,
    "debugTokenExpression.value": `${palette.green}`,
    "debugTokenExpression.string": `${palette.yellow}`,
    "debugTokenExpression.boolean": `${palette.purple}`,
    "debugTokenExpression.number": `${palette.purple}`,
    "debugTokenExpression.error": `${palette.red}`,
    "debugIcon.breakpointForeground": `${palette.red}`,
    "debugIcon.breakpointDisabledForeground": `${palette.darkRed}`,
    "debugIcon.breakpointUnverifiedForeground": `${palette.grey2}`,
    "debugIcon.breakpointCurrentStackframeForeground": `${palette.blue}`,
    "debugIcon.breakpointStackframeForeground": `${palette.red}`,
    "debugIcon.startForeground": `${palette.aqua}`,
    "debugIcon.pauseForeground": `${palette.yellow}`,
    "debugIcon.stopForeground": `${palette.red}`,
    "debugIcon.disconnectForeground": `${palette.purple}`,
    "debugIcon.restartForeground": `${palette.aqua}`,
    "debugIcon.stepOverForeground": `${palette.blue}`,
    "debugIcon.stepIntoForeground": `${palette.blue}`,
    "debugIcon.stepOutForeground": `${palette.blue}`,
    "debugIcon.continueForeground": `${palette.blue}`,
    "debugIcon.stepBackForeground": `${palette.blue}`,
    "debugConsole.infoForeground": `${palette.green}`,
    "debugConsole.warningForeground": `${palette.yellow}`,
    "debugConsole.errorForeground": `${palette.red}`,
    "debugConsole.sourceForeground": `${palette.purple}`,
    "debugConsoleInputIcon.foreground": `${palette.aqua}`,
    "merge.incomingHeaderBackground": `${palette.darkAqua}80`,
    "merge.incomingContentBackground": `${palette.darkAqua}40`,
    "merge.currentHeaderBackground": `${palette.darkBlue}80`,
    "merge.currentContentBackground": `${palette.darkBlue}40`,
    "merge.border": `${palette.bg}00`,
    "panel.background": `${palette.bg}`,
    "panel.border": `${palette.bg}`,
    "panelInput.border": `${palette.bg5}`,
    "panelTitle.activeForeground": `${palette.grey2}`,
    "panelTitle.activeBorder": `${palette.grey1}`,
    "panelTitle.inactiveForeground": `${palette.grey0}`,
    "imagePreview.border": `${palette.bg}`,
    "statusBar.background": `${palette.bg}`,
    "statusBar.foreground": `${palette.grey2}`,
    "statusBar.border": `${palette.bg}`,
    "statusBar.debuggingForeground": `${palette.bg}`,
    "statusBar.debuggingBackground": `${palette.red}`,
    "statusBar.debuggingBorder": `${palette.red}`,
    "statusBar.noFolderBackground": `${palette.bg}`,
    "statusBar.noFolderForeground": `${palette.grey2}`,
    "statusBar.noFolderBorder": `${palette.bg}`,
    "statusBarItem.hoverBackground": `${palette.bg4}`,
    "statusBarItem.activeBackground": `${palette.bg4}a0`,
    "statusBar.prominentForeground": `${palette.bg}`,
    "statusBar.prominentBackground": `${palette.grey2}`,
    "statusBar.prominentHoverBackground": `${palette.grey1}`,
    "statusBarItem.remoteBackground": `${palette.bg}`,
    "statusBarItem.remoteForeground": `${palette.grey2}`,
    "titleBar.activeBackground": `${palette.bg}`,
    "titleBar.activeForeground": `${palette.grey2}`,
    "titleBar.inactiveBackground": `${palette.bg}`,
    "titleBar.inactiveForeground": `${palette.grey1}`,
    "titleBar.border": `${palette.bg}`,
    "menubar.selectionBackground": `${palette.bg}`,
    "menubar.selectionBorder": `${palette.bg}`,
    "menu.foreground": `${palette.grey2}`,
    "menu.background": `${palette.bg}`,
    "menu.selectionForeground": `${palette.grey2}`,
    "menu.selectionBackground": `${palette.bg2}`,
    "gitDecoration.addedResourceForeground": `${palette.green}a0`,
    "gitDecoration.modifiedResourceForeground": `${palette.blue}a0`,
    "gitDecoration.deletedResourceForeground": `${palette.red}a0`,
    "gitDecoration.untrackedResourceForeground": `${palette.yellow}a0`,
    "gitDecoration.ignoredResourceForeground": `${palette.bg7}`,
    "gitDecoration.conflictingResourceForeground": `${palette.purple}a0`,
    "gitDecoration.submoduleResourceForeground": `${palette.orange}a0`,
    "gitDecoration.stageDeletedResourceForeground": `${palette.aqua}a0`,
    "gitDecoration.stageModifiedResourceForeground": `${palette.aqua}a0`,
    "notificationCenterHeader.foreground": `${palette.fg0}`,
    "notificationCenterHeader.background": `${palette.bg6}`,
    "notifications.foreground": `${palette.fg}`,
    "notifications.background": `${palette.bg}`,
    "notificationLink.foreground": `${palette.green}`,
    "notificationsErrorIcon.foreground": `${palette.red}`,
    "notificationsWarningIcon.foreground": `${palette.yellow}`,
    "notificationsInfoIcon.foreground": `${palette.blue}`,
    "extensionButton.prominentForeground": `${palette.bg}`,
    "extensionButton.prominentBackground": `${palette.grey2}`,
    "extensionButton.prominentHoverBackground": `${palette.grey1}`,
    "extensionBadge.remoteBackground": `${palette.grey2}`,
    "extensionBadge.remoteForeground": `${palette.bg}`,
    "settings.headerForeground": `${palette.grey2}`,
    "settings.numberInputBackground": `${palette.bg}`,
    "settings.numberInputForeground": `${palette.purple}`,
    "settings.numberInputBorder": `${palette.bg7}`,
    "settings.textInputBackground": `${palette.bg}`,
    "settings.textInputForeground": `${palette.blue}`,
    "settings.textInputBorder": `${palette.bg7}`,
    "settings.checkboxBackground": `${palette.bg}`,
    "settings.checkboxForeground": `${palette.orange}`,
    "settings.checkboxBorder": `${palette.bg7}`,
    "settings.dropdownBackground": `${palette.bg}`,
    "settings.dropdownForeground": `${palette.aqua}`,
    "settings.dropdownBorder": `${palette.bg7}`,
    "editorLightBulb.foreground": `${palette.yellow}`,
    "editorLightBulbAutoFix.foreground": `${palette.aqua}`,
    "welcomePage.buttonBackground": `${palette.bg2}`,
    "welcomePage.buttonHoverBackground": `${palette.bg2}a0`,
    "breadcrumb.foreground": `${palette.grey1}`,
    "breadcrumb.focusForeground": `${palette.fg0}`,
    "breadcrumb.activeSelectionForeground": `${palette.fg}`,
    "symbolIcon.colorForeground": `${palette.fg}`,
    "symbolIcon.snippetForeground": `${palette.fg}`,
    "symbolIcon.fieldForeground": `${palette.fg}`,
    "symbolIcon.fileForeground": `${palette.fg}`,
    "symbolIcon.folderForeground": `${palette.fg}`,
    "symbolIcon.textForeground": `${palette.fg}`,
    "symbolIcon.unitForeground": `${palette.fg}`,
    "symbolIcon.keywordForeground": `${palette.red}`,
    "symbolIcon.operatorForeground": `${palette.orange}`,
    "symbolIcon.classForeground": `${palette.yellow}`,
    "symbolIcon.eventForeground": `${palette.yellow}`,
    "symbolIcon.interfaceForeground": `${palette.yellow}`,
    "symbolIcon.structForeground": `${palette.yellow}`,
    "symbolIcon.functionForeground": `${palette.green}`,
    "symbolIcon.keyForeground": `${palette.green}`,
    "symbolIcon.methodForeground": `${palette.green}`,
    "symbolIcon.stringForeground": `${palette.green}`,
    "symbolIcon.constantForeground": `${palette.aqua}`,
    "symbolIcon.enumeratorMemberForeground": `${palette.aqua}`,
    "symbolIcon.nullForeground": `${palette.aqua}`,
    "symbolIcon.propertyForeground": `${palette.aqua}`,
    "symbolIcon.typeParameterForeground": `${palette.aqua}`,
    "symbolIcon.arrayForeground": `${palette.blue}`,
    "symbolIcon.referenceForeground": `${palette.blue}`,
    "symbolIcon.variableForeground": `${palette.blue}`,
    "symbolIcon.booleanForeground": `${palette.purple}`,
    "symbolIcon.constructorForeground": `${palette.purple}`,
    "symbolIcon.enumeratorForeground": `${palette.purple}`,
    "symbolIcon.moduleForeground": `${palette.purple}`,
    "symbolIcon.namespaceForeground": `${palette.purple}`,
    "symbolIcon.numberForeground": `${palette.purple}`,
    "symbolIcon.objectForeground": `${palette.purple}`,
    "symbolIcon.packageForeground": `${palette.purple}`,
    "editor.snippetTabstopHighlightBackground": `${palette.bg5}a0`,
    "editor.snippetFinalTabstopHighlightBackground": `${palette.darkGreen}40`,
    "editor.snippetFinalTabstopHighlightBorder": `${palette.bg}`,
    "charts.red": `${palette.red}`,
    "charts.orange": `${palette.orange}`,
    "charts.yellow": `${palette.yellow}`,
    "charts.green": `${palette.green}`,
    "charts.blue": `${palette.blue}`,
    "charts.purple": `${palette.purple}`,
    "charts.foreground": `${palette.fg}`,
    "sash.hoverBorder": `${palette.grey0}`,
  };
}

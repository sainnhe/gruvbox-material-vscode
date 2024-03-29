/*---------------------------------------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/gruvbox-material-vscode
 *  Copyright:  2020 Sainnhe Park <i@sainnhe.dev>
 *  License:    MIT
 *--------------------------------------------------------------------------------------------*/

import { workspace, window } from "vscode";

export function activate() {
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("gruvboxMaterial")) {
      window.showInformationMessage(
        "Configuration options are currently not available in vscode web."
      );
    }
  });
}

export function deactivate() {}

// vim: fdm=marker fmr={{{,}}}:

import { ConfigurationChangeEvent } from "vscode";

export function detectConfigChanges(
  event: ConfigurationChangeEvent,
  onConfigChange: () => void
): void {
  if (event.affectsConfiguration("gruvboxMaterial")) {
    onConfigChange();
  }
}

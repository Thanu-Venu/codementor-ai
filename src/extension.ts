// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension is now active!');

	let disposable = vscode.commands.registerCommand('codementor-ai.helloWorld', () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showInformationMessage('No editor is open');
			return;
		}

		const text = editor.document.getText();
		const lines = text.split("\n");

		let loopCount = 0;
		for (const line of lines) {
			const trimmed = line.trim();
			if (
				trimmed.startsWith('for') ||
				trimmed.startsWith('while')
			) {
				loopCount++;
			}
		}

		vscode.window.showInformationMessage(`Detected: ${loopCount} loop(s)`);
	});
}

// This method is called when your extension is deactivated
export function deactivate() { }

import { RefObject } from 'react';

class ActionsEditor {
	TextBold(document: Document, state: boolean, setState: any) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('bold', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextItalic(document: Document, state: boolean, setState: any) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('italic', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextUnderline(document: Document, state: boolean, setState: any) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('underline', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextStrike(document: Document, state: boolean, setState: any) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('strikeThrough', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertImage(document: Document, state: boolean, setState: any, link: string, width: string, height: string) {
		document.execCommand('insertHTML', true, `<img style="width: ${width}px; height: ${height}px;" src="${link}"></img>`);

		setState(!state);

		document.body.focus();
	}

	InsertVideo(document: Document, state: boolean, setState: any, url: string, width: string, height: string) {
		url = url.trim();
		url = url.replace(/https:\/\/www.youtube.com\/watch\?v=/, '');
		url = url.replace(/&ab_channel=[a-zA-Z0-9]+/, '');

		document.execCommand(
			'insertHTML',
			true,
			`<iframe
            width="${width}"
            height="${height}"
            src="https://youtube.com/embed/${url}?autoplay=0&disablekb=1" 
            style="border: 0;"
          ></iframe>
         `
		);

		setState(!state);

		document.body.focus();
	}

	InsertLink(document: Document, state: boolean, setState: any, url: string, title: string) {
		document.execCommand('insertHTML', true, `<a href="${url}" target="_blank">${title}</a>`);

		setState(!state);

		document.body.focus();
	}

	InsertListNoOrdenada(document: Document, state: boolean, setState: any) {
		document.execCommand('insertUnorderedList', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertListOrdenada(document: Document, state: boolean, setState: any) {
		document.execCommand('insertOrderedList', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertCursorLeft(document: Document, states: boolean[], setStates: any[]) {
		if (states[0] && !states[1] && !states[2] && !states[3]) return;

		document.execCommand('justifyLeft', true, undefined);

		states[1] && setStates[1](false);
		states[2] && setStates[2](false);
		states[3] && setStates[3](false);

		setStates[0](!states[0]);

		document.body.focus();
	}

	InsertCursorCenter(document: Document, states: boolean[], setStates: any[]) {
		if (states[1] && !states[0] && !states[2] && !states[3]) return;

		document.execCommand('justifyCenter', true, undefined);

		states[0] && setStates[0](false);
		states[2] && setStates[2](false);
		states[3] && setStates[3](false);

		setStates[1](!states[1]);

		document.body.focus();
	}

	InsertCursorRight(document: Document, states: boolean[], setStates: any[]) {
		if (states[2] && !states[0] && !states[1] && !states[3]) return;

		document.execCommand('justifyRight', true, undefined);

		states[0] && setStates[0](false);
		states[1] && setStates[1](false);
		states[3] && setStates[3](false);

		setStates[2](!states[2]);

		document.body.focus();
	}

	InsertCursorFull(document: Document, states: boolean[], setStates: any[]) {
		if (states[3] && !states[0] && !states[1] && !states[2]) return;

		document.execCommand('justifyFull', true, undefined);

		states[0] && setStates[0](false);
		states[1] && setStates[1](false);
		states[2] && setStates[2](false);

		setStates[3](!states[3]);

		document.body.focus();
	}

	ChangeColor(document: Document, state: boolean, setState: any, color: string) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('foreColor', true, color);

		setState(!state);

		document.body.focus();
	}

	ChangeFont(document: Document, state: boolean, setState: any, font: string) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('fontName', true, font);

		setState(!state);

		document.body.focus();
	}

	ChangeFontSize(document: Document, state: boolean, setState: any, fontSize: string) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('fontSize', true, fontSize);

		setState(!state);

		document.body.focus();
	}

	addKeyboardShortcuts(booleans: boolean[], setBooleans: any[], iframe: Document) {
		const Shortcuts = (e: KeyboardEvent) => {
			if (e.ctrlKey) {
				switch (e.key) {
					case 'b':
						this.TextBold(iframe, booleans[0], setBooleans[0]);

						break;

					case 'i':
						this.TextItalic(iframe, booleans[1], setBooleans[1]);

						break;

					case 'u':
						this.TextUnderline(iframe, booleans[2], setBooleans[2]);

						break;

					case 'd':
						this.TextStrike(iframe, booleans[3], setBooleans[3]);

						break;

					case 'o':
						if (booleans[5]) this.InsertListNoOrdenada(iframe, booleans[5], setBooleans[5]);

						this.InsertListOrdenada(iframe, booleans[4], setBooleans[4]);

						break;

					case 'l':
						if (booleans[4]) this.InsertListOrdenada(iframe, booleans[4], setBooleans[4]);

						this.InsertListNoOrdenada(iframe, booleans[5], setBooleans[5]);

						break;

					case 'k':
						this.InsertCursorLeft(iframe, booleans.slice(6, 10), setBooleans.slice(6, 10));

						break;

					case 'n':
						this.InsertCursorCenter(iframe, booleans.slice(6, 10), setBooleans.slice(6, 10));

						break;

					case 'm':
						this.InsertCursorRight(iframe, booleans.slice(6, 10), setBooleans.slice(6, 10));

						break;

					case 'f':
						this.InsertCursorFull(iframe, booleans.slice(6, 10), setBooleans.slice(6, 10));

						break;
				}
			}
		};

		iframe.addEventListener('keydown', Shortcuts);
	}
}

export default new ActionsEditor();

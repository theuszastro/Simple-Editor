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

	InsertCursorLeft(document: Document, state: boolean, setState: any) {
		document.execCommand('justifyLeft', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertCursorCenter(document: Document, state: boolean, setState: any) {
		document.execCommand('justifyCenter', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertCursorRight(document: Document, state: boolean, setState: any) {
		document.execCommand('justifyRight', true, undefined);

		setState(!state);

		document.body.focus();
	}

	InsertCursorFull(document: Document, state: boolean, setState: any) {
		document.execCommand('justifyFull', true, undefined);

		setState(!state);

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

	addKeyboardShortcuts(document: Document, booleans: boolean[], setBooleans: any[], iframe: Document) {
		const Shortcuts = (e: KeyboardEvent) => {
			console.log(e.key);

			if (e.ctrlKey) {
				switch (e.key) {
					case 'b':
						setBooleans[0](!booleans[0]);

						this.BoldSimple(iframe);
						break;

					case 'i':
						setBooleans[1](!booleans[1]);

						this.ItalicSimple(iframe);
						break;

					case 'u':
						setBooleans[2](!booleans[2]);

						this.UnderlineSimple(iframe);
						break;

					case 'd':
						setBooleans[3](!booleans[3]);

						this.StrikeSimple(iframe);
						break;

					case 'o':
						if (booleans[5]) {
							this.ListNoOrdenedSimple(iframe);

							setBooleans[5](false);
						}

						setBooleans[4](!booleans[4]);

						this.ListOrdenedSimple(iframe);
						break;

					case 'l':
						if (booleans[4]) {
							this.ListOrdenedSimple(iframe);

							setBooleans[4](false);
						}

						setBooleans[5](!booleans[5]);

						this.ListNoOrdenedSimple(iframe);
						break;

					case 'k':
						booleans[7] && setBooleans[7](false);
						booleans[8] && setBooleans[8](false);
						booleans[9] && setBooleans[9](false);

						if (booleans[6] && !booleans[7] && !booleans[8] && !booleans[9]) return;

						setBooleans[6](!booleans[6]);

						this.CursorLeftSimple(iframe);
						break;

					case 'n':
						booleans[6] && setBooleans[6](false);
						booleans[8] && setBooleans[8](false);
						booleans[9] && setBooleans[9](false);

						if (booleans[7] && !booleans[6] && !booleans[8] && !booleans[9]) return;

						setBooleans[7](!booleans[7]);

						this.CursorCenterSimple(iframe);
						break;

					case 'm':
						booleans[6] && setBooleans[6](false);
						booleans[7] && setBooleans[7](false);
						booleans[9] && setBooleans[9](false);

						if (booleans[8] && !booleans[6] && !booleans[7] && !booleans[9]) return;

						setBooleans[8](!booleans[8]);

						this.CursorRightSimple(iframe);
						break;

					case 'f':
						booleans[6] && setBooleans[6](false);
						booleans[7] && setBooleans[7](false);
						booleans[8] && setBooleans[8](false);

						if (booleans[9] && !booleans[6] && !booleans[7] && !booleans[8]) return;

						setBooleans[9](!booleans[9]);

						this.CursorFullSimple(iframe);
						break;
				}
			}
		};

		document.addEventListener('keydown', Shortcuts);
		iframe.addEventListener('keydown', Shortcuts);
	}

	private ChangeStates(document: Document, booleans: boolean[], setBooleans: any[], strings: string[], setStrings: any[]) {}

	private BoldSimple(document: Document) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('bold', true, undefined);

		document.body.focus();
	}

	private ItalicSimple(document: Document) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('italic', true, undefined);

		document.body.focus();
	}

	private UnderlineSimple(document: Document) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('underline', true, undefined);

		document.body.focus();
	}

	private StrikeSimple(document: Document) {
		document.execCommand('useCSS', true, 'false');
		document.execCommand('strikeThrough', true, undefined);

		document.body.focus();
	}

	private ListOrdenedSimple(document: Document) {
		document.execCommand('insertOrderedList', true, undefined);

		document.body.focus();
	}

	private ListNoOrdenedSimple(document: Document) {
		document.execCommand('insertUnorderedList', true, undefined);

		document.body.focus();
	}

	private CursorLeftSimple(document: Document) {
		document.execCommand('justifyLeft', true, undefined);

		document.body.focus();
	}

	private CursorCenterSimple(document: Document) {
		document.execCommand('justifyCenter', true, undefined);

		document.body.focus();
	}

	private CursorRightSimple(document: Document) {
		document.execCommand('justifyRight', true, undefined);

		document.body.focus();
	}

	private CursorFullSimple(document: Document) {
		document.execCommand('justifyFull', true, undefined);

		document.body.focus();
	}
}

export default new ActionsEditor();

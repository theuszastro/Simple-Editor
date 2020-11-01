class ActionsEditor {
	TextBold(document: Document, state: boolean, setState: any) {
		document.execCommand('bold', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextItalic(document: Document, state: boolean, setState: any) {
		document.execCommand('italic', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextUnderline(document: Document, state: boolean, setState: any) {
		document.execCommand('underline', true, undefined);

		setState(!state);

		document.body.focus();
	}

	TextStrike(document: Document, state: boolean, setState: any) {
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
}

export default new ActionsEditor();

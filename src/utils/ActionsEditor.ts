class ActionsEditor {
	TextBold(document: Document, state: boolean, setState: any) {
		document.execCommand('bold', true, undefined);

		setState(!state);
	}

	TextItalic(document: Document, state: boolean, setState: any) {
		document.execCommand('italic', true, undefined);

		setState(!state);
	}

	TextUnderline(document: Document, state: boolean, setState: any) {
		document.execCommand('underline', true, undefined);

		setState(!state);
	}

	TextStrike(document: Document, state: boolean, setState: any) {
		document.execCommand('strikeThrough', true, undefined);

		setState(!state);
	}

	InsertImage(document: Document, state: boolean, setState: any, link: string, width: string, height: string) {
		document.execCommand('insertHTML', true, `<img style="width: ${width}px; height: ${height}px;" src="${link}"></img>`);

		setState(!state);
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
	}

	InsertLink(document: Document, state: boolean, setState: any, url: string, title: string) {
		document.execCommand('insertHTML', true, `<a href="${url}" target="_blank">${title}</a>`);

		setState(!state);
	}
}

export default new ActionsEditor();

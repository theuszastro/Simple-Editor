import React, { useState, useEffect, useRef, BaseSyntheticEvent } from 'react';

import ActionsEditor from '../utils/ActionsEditor';

import {
	Container,
	Editor,
	EditorActions,
	Action,
	Bold,
	Italic,
	Underline,
	StrikeThroungh,
	Separator,
	Link,
	Image,
	Youtube,
	Font,
	FontSize,
	FontColor,
	TextArea,
	Wrapper,
	Content,
	Header,
	HeaderLabel,
	Close,
	Main,
	InsertLink,
	Tamanho,
	Width,
	Height,
	Footer,
	Add,
	Label,
	WrapperTamanho,
	WrapperInput,
} from '../styles/Home';

const Home: React.FC = () => {
	const iframe = useRef<HTMLIFrameElement>(null);

	const [BoldActive, setBoldActive] = useState(false);
	const [ItalicActive, setItalicActive] = useState(false);
	const [UnderlineActive, setUnderlineActive] = useState(false);
	const [StrikeActive, setStrikeActive] = useState(false);

	const [ImageActive, setImageActive] = useState(false);
	const [YoutubeActive, setYoutubeActive] = useState(false);
	const [LinkActive, setLinkActive] = useState(false);

	const [FontActive, setFontActive] = useState(false);
	const [FontValue, setFontValue] = useState('');

	const [FontSizeActive, setFontSizeActive] = useState(false);
	const [FontSizeValue, setFontSizeValue] = useState(0);

	const [FontColorActive, setFontColorActive] = useState(false);
	const [FontColorValue, setFontColorValue] = useState('');

	const [ImageLinkValue, setImageLinkValue] = useState('');
	const [WidthImage, setWidthImage] = useState('');
	const [HeightImage, setHeightImage] = useState('');

	const [VideoLink, setVideoLink] = useState('');
	const [WidthVideo, setWidthVideo] = useState('');
	const [HeightVideo, setHeightVideo] = useState('');

	const [HrefLink, setHrefLink] = useState('');
	const [LabelLink, setLabelLink] = useState('');

	var iframeDocument: Document;

	const CloseInsert = (e: BaseSyntheticEvent, type: string, popup?: string) => {
		switch (type) {
			case 'Image':
				const InsertImage = document.querySelector('#InsertImage')!;
				if (InsertImage.contains(e.target)) return;

				setImageActive(false);
				break;

			case 'Video':
				const InsertVideo = document.querySelector('#InsertVideo')!;
				if (InsertVideo.contains(e.target)) return;

				setYoutubeActive(false);
				break;

			case 'Link':
				const InsertLink = document.querySelector('#InsertLink')!;
				if (InsertLink.contains(e.target)) return;

				setLinkActive(false);
				break;

			case 'Fechar':
				if (popup === 'Image') setImageActive(false);
				if (popup === 'Video') setYoutubeActive(false);
				if (popup === 'Link') setLinkActive(false);

				break;
		}
	};

	useEffect(() => {
		// @ts-ignore
		iframeDocument = iframe.current.contentWindow.document;
		iframeDocument.body.style.margin = '10px 20px';

		iframeDocument.designMode = 'on';

		document.addEventListener('keydown', () => {});
	});

	return (
		<>
			<Container>
				<Editor>
					<EditorActions>
						<Action
							className={BoldActive ? 'active' : ''}
							onClick={() => ActionsEditor.TextBold(iframeDocument, BoldActive, setBoldActive)}
						>
							<Bold size={22.5} />
						</Action>

						<Action
							className={ItalicActive ? 'active' : ''}
							onClick={() => ActionsEditor.TextItalic(iframeDocument, ItalicActive, setItalicActive)}
						>
							<Italic size={22.5} />
						</Action>

						<Action
							className={UnderlineActive ? 'active' : ''}
							onClick={() =>
								ActionsEditor.TextUnderline(iframeDocument, UnderlineActive, setUnderlineActive)
							}
						>
							<Underline size={22.5} />
						</Action>

						<Action
							className={StrikeActive ? 'active' : ''}
							onClick={() => ActionsEditor.TextStrike(iframeDocument, StrikeActive, setStrikeActive)}
						>
							<StrikeThroungh size={22.5} />
						</Action>

						<Separator />

						<Action className={LinkActive ? 'active' : ''} onClick={() => setLinkActive(true)}>
							<Link size={22.5} />
						</Action>

						<Action className={YoutubeActive ? 'active' : ''} onClick={() => setYoutubeActive(true)}>
							<Youtube size={22.5} />
						</Action>

						<Action className={ImageActive ? 'active' : ''} onClick={() => setImageActive(true)}>
							<Image size={22.5} />
						</Action>

						{/* <Separator />

						<Action className={FontActive ? 'active' : ''} onClick={() => setFontActive(!FontActive)}>
							<Font size={22.5} />
						</Action>

						<Action
							className={FontSizeActive ? 'active' : ''}
							onClick={() => setFontSizeActive(!FontSizeActive)}
						>
							<FontSize size={22.5} />
						</Action>

						<Action
							className={FontColorActive ? 'active' : ''}
							onClick={() => setFontColorActive(!FontColorActive)}
						>
							<FontColor size={22.5} />
						</Action> */}
					</EditorActions>

					<TextArea ref={iframe} contentEditable></TextArea>
				</Editor>
			</Container>

			{ImageActive && (
				<Wrapper onClick={e => CloseInsert(e, 'Image')}>
					<Content id="InsertImage">
						<Header>
							<HeaderLabel>Adicionar imagem</HeaderLabel>

							<Close size={25} onClick={e => CloseInsert(e, 'Fechar', 'Image')} />
						</Header>

						<Main>
							<WrapperInput>
								<Label htmlFor="link">Url</Label>
								<InsertLink
									id="link"
									value={ImageLinkValue}
									onChange={e => setImageLinkValue(e.target.value)}
								/>
							</WrapperInput>

							<Tamanho>
								<WrapperTamanho>
									<Label htmlFor="width">Largura</Label>
									<Width
										id="width"
										type="number"
										value={WidthImage}
										onChange={e => setWidthImage(e.target.value)}
									/>
								</WrapperTamanho>

								<WrapperTamanho>
									<Label htmlFor="height">Altura</Label>
									<Height
										id="height"
										type="number"
										value={HeightImage}
										onChange={e => setHeightImage(e.target.value)}
									/>
								</WrapperTamanho>
							</Tamanho>
						</Main>

						<Footer>
							<Add
								className={HeightImage && WidthImage && ImageLinkValue ? 'active' : ''}
								onClick={() => {
									if (HeightImage && WidthImage && ImageLinkValue) {
										ActionsEditor.InsertImage(
											iframeDocument,
											ImageActive,
											setImageActive,
											ImageLinkValue,
											WidthImage,
											HeightImage
										);

										setImageLinkValue('');
										setHeightImage('');
										setWidthImage('');
									}
								}}
							>
								Adicionar
							</Add>
						</Footer>
					</Content>
				</Wrapper>
			)}

			{YoutubeActive && (
				<Wrapper onClick={e => CloseInsert(e, 'Video')}>
					<Content id="InsertVideo">
						<Header>
							<HeaderLabel>Adicionar video do youtube</HeaderLabel>

							<Close size={20} onClick={e => CloseInsert(e, 'Fechar', 'Video')} />
						</Header>

						<Main>
							<WrapperInput>
								<Label htmlFor="link">Link do video</Label>
								<InsertLink id="link" value={VideoLink} onChange={e => setVideoLink(e.target.value)} />
							</WrapperInput>

							<Tamanho>
								<WrapperTamanho>
									<Label htmlFor="width">Largura</Label>
									<Width
										id="width"
										value={WidthVideo}
										onChange={e => {
											let value = e.target.value;
											value = value.replace(/^\D/, '');

											setWidthVideo(value);
										}}
									/>
								</WrapperTamanho>

								<WrapperTamanho>
									<Label htmlFor="height">Altura</Label>
									<Height
										id="height"
										value={HeightVideo}
										onChange={e => {
											let value = e.target.value;
											value = value.replace(/^\D/, '');

											setHeightVideo(value);
										}}
									/>
								</WrapperTamanho>
							</Tamanho>
						</Main>

						<Footer>
							<Add
								className={HeightVideo && WidthVideo && VideoLink ? 'active' : ''}
								onClick={e => {
									if (HeightVideo && WidthVideo && VideoLink) {
										ActionsEditor.InsertVideo(
											iframeDocument,
											YoutubeActive,
											setYoutubeActive,
											VideoLink,
											WidthVideo,
											HeightVideo
										);

										setVideoLink('');
										setWidthVideo('');
										setHeightVideo('');
									}
								}}
							>
								Adicionar
							</Add>
						</Footer>
					</Content>
				</Wrapper>
			)}

			{LinkActive && (
				<Wrapper onClick={e => CloseInsert(e, 'Link')}>
					<Content id="InsertLink">
						<Header>
							<HeaderLabel>Adicionar link</HeaderLabel>

							<Close size={20} onClick={e => CloseInsert(e, 'Fechar', 'Link')} />
						</Header>

						<Main>
							<WrapperInput>
								<Label htmlFor="link">Link</Label>
								<InsertLink id="link" value={HrefLink} onChange={e => setHrefLink(e.target.value)} />
							</WrapperInput>

							<WrapperInput>
								<Label htmlFor="LabelHref">Abreviação</Label>
								<InsertLink
									id="LabelHref"
									value={LabelLink}
									onChange={e => setLabelLink(e.target.value)}
								/>
							</WrapperInput>
						</Main>

						<Footer>
							<Add
								className={HrefLink && LabelLink ? 'active' : ''}
								onClick={e => {
									if (HrefLink && LabelLink) {
										ActionsEditor.InsertLink(
											iframeDocument,
											LinkActive,
											setLinkActive,
											HrefLink,
											LabelLink
										);

										setHrefLink('');
										setLabelLink('');
									}
								}}
							>
								Adicionar
							</Add>
						</Footer>
					</Content>
				</Wrapper>
			)}
		</>
	);
};
// onClick={() => ActionsEditor.InsertImage(ImageLinkValue, WidthImage, HeightImage)}
// <WrapperVideo></WrapperVideo>
// <WrapperLink></WrapperLink>

export default Home;

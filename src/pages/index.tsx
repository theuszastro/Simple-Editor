import React, { useEffect, useRef, useState } from 'react';

import ActionsEditor from '../utils/ActionsEditor';

import Popup from '../utils/components/popup';

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
	TextArea,
	NoOrdened,
	Ordened,
	AlignLeft,
	AlignCenter,
	AlignRight,
	AlignFull,
	Font,
	FontSize,
	FontColor,
	Colors,
	GridColors,
	Color,
	Indicador,
} from '../styles/Home';

const Home: React.FC = () => {
	const iframe = useRef<HTMLIFrameElement>(null);

	const [BoldActive, setBoldActive] = useState(false);
	const [ItalicActive, setItalicActive] = useState(false);
	const [UnderlineActive, setUnderlineActive] = useState(false);
	const [StrikeActive, setStrikeActive] = useState(false);

	const [NoOrdenedActive, setNoOrdenedActive] = useState(false);
	const [OrdenedActive, setOrdenedActive] = useState(false);

	const [LeftActive, setLeftActive] = useState(true);
	const [CenterActive, setCenterActive] = useState(false);
	const [RightActive, setRightActive] = useState(false);
	const [FullActive, setFullActive] = useState(false);

	const [FontActive, setFontActive] = useState(false);
	const [FontSizeActive, setFontSizeActive] = useState(false);

	const [FontColorActive, setFontColorActive] = useState(false);
	const [ColorValue, setColorValue] = useState('');
	const [ColorBorder, setColorBorder] = useState('');

	const [ImageActive, setImageActive] = useState(false);
	const [ImageLink, setImageLink] = useState('');
	const [WidthImage, setWidthImage] = useState('');
	const [HeightImage, setHeightImage] = useState('');

	const [YoutubeActive, setYoutubeActive] = useState(false);
	const [VideoLink, setVideoLink] = useState('');
	const [WidthVideo, setWidthVideo] = useState('');
	const [HeightVideo, setHeightVideo] = useState('');

	const [LinkActive, setLinkActive] = useState(false);
	const [HrefLink, setHrefLink] = useState('');
	const [LabelLink, setLabelLink] = useState('');

	const [Cores] = useState([
		'#000000',
		'#1E90FF',
		'#008000',
		'#00CED1',
		'#FFA500',
		'#FF0000',
		'#FFFF00',
		'#006400',
		'#ADD8E6',
		'#4682B4',
		'#7B68EE',
		'#9400D3',
	]);

	var iframeDocument: Document;

	useEffect(() => {}, []);

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
						<Separator>
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
						</Separator>

						<Separator>
							<Action
								className={NoOrdenedActive ? 'active' : ''}
								onClick={() => {
									OrdenedActive && setOrdenedActive(false);

									ActionsEditor.InsertListNoOrdenada(
										iframeDocument,
										NoOrdenedActive,
										setNoOrdenedActive
									);
								}}
							>
								<NoOrdened size={22.5} />
							</Action>

							<Action
								className={OrdenedActive ? 'active' : ''}
								onClick={() => {
									NoOrdenedActive && setNoOrdenedActive(false);

									ActionsEditor.InsertListOrdenada(iframeDocument, OrdenedActive, setOrdenedActive);
								}}
							>
								<Ordened size={22.5} />
							</Action>
						</Separator>

						<Separator>
							<Action
								className={LeftActive ? 'active' : ''}
								onClick={() => {
									CenterActive && setCenterActive(false);
									RightActive && setRightActive(false);
									FullActive && setFullActive(false);

									ActionsEditor.InsertCursorLeft(iframeDocument, LeftActive, setLeftActive);
								}}
							>
								<AlignLeft size={22.5} />
							</Action>

							<Action
								className={CenterActive ? 'active' : ''}
								onClick={() => {
									LeftActive && setLeftActive(false);
									RightActive && setRightActive(false);
									FullActive && setFullActive(false);

									ActionsEditor.InsertCursorCenter(iframeDocument, CenterActive, setCenterActive);
								}}
							>
								<AlignCenter size={22.5} />
							</Action>

							<Action
								className={RightActive ? 'active' : ''}
								onClick={() => {
									LeftActive && setLeftActive(false);
									CenterActive && setCenterActive(false);
									FullActive && setFullActive(false);

									ActionsEditor.InsertCursorRight(iframeDocument, RightActive, setRightActive);
								}}
							>
								<AlignRight size={22.5} />
							</Action>

							<Action
								className={FullActive ? 'active' : ''}
								onClick={() => {
									LeftActive && setLeftActive(false);
									CenterActive && setCenterActive(false);
									RightActive && setRightActive(false);

									ActionsEditor.InsertCursorFull(iframeDocument, FullActive, setFullActive);
								}}
							>
								<AlignFull size={22.5} />
							</Action>
						</Separator>

						<Separator>
							<Action className={LinkActive ? 'active' : ''} onClick={() => setLinkActive(true)}>
								<Link size={22.5} />
							</Action>

							<Action className={YoutubeActive ? 'active' : ''} onClick={() => setYoutubeActive(true)}>
								<Youtube size={22.5} />
							</Action>

							<Action className={ImageActive ? 'active' : ''} onClick={() => setImageActive(true)}>
								<Image size={19} />
							</Action>
						</Separator>

						<Separator>
							<Action
								className={FontColorActive ? 'active' : ''}
								onClick={() => setFontColorActive(!FontColorActive)}
							>
								<FontColor size={22.5} />

								{FontColorActive && (
									<Colors id="colors">
										<Indicador />

										<GridColors>
											{Cores.map(item => (
												<Color
													cor={item}
													onClick={() => {
														setColorValue(item);
														setColorBorder(item);

														ActionsEditor.ChangeColor(
															iframeDocument,
															FontColorActive,
															setFontColorActive,
															item
														);
													}}
												/>
											))}
										</GridColors>
									</Colors>
								)}
							</Action>

							<Action className={FontActive ? 'active' : ''} onClick={() => setFontActive(!FontActive)}>
								<Font size={22.5} />
							</Action>

							<Action
								className={FontSizeActive ? 'active' : ''}
								onClick={() => setFontSizeActive(!FontSizeActive)}
							>
								<FontSize size={22.5} />
							</Action>
						</Separator>
					</EditorActions>

					<TextArea ref={iframe} contentEditable></TextArea>
				</Editor>
			</Container>

			{LinkActive && (
				<Popup
					category="link"
					Active={LinkActive}
					setActive={setLinkActive}
					Link={HrefLink}
					setLink={setHrefLink}
					short={LabelLink}
					setShort={setLabelLink}
					reference={iframe}
				/>
			)}

			{YoutubeActive && (
				<Popup
					category="video"
					Active={YoutubeActive}
					setActive={setYoutubeActive}
					Link={VideoLink}
					setLink={setVideoLink}
					width={WidthVideo}
					setWidth={setWidthVideo}
					height={HeightVideo}
					setHeight={setHeightVideo}
					reference={iframe}
				/>
			)}

			{ImageActive && (
				<Popup
					category="image"
					Active={ImageActive}
					setActive={setImageActive}
					Link={ImageLink}
					setLink={setImageLink}
					width={WidthImage}
					setWidth={setWidthImage}
					height={HeightImage}
					setHeight={setHeightImage}
					reference={iframe}
				/>
			)}
		</>
	);
};

export default Home;

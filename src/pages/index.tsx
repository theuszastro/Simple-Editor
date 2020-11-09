import React, { useEffect, useRef, useState } from 'react';

import ActionsEditor from '../utils/ActionsEditor';

import Popup from '../utils/components/popup';

import { CoresOptions, FontsOptions, FontSizeOptions } from '../utils/arrays';

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
	ChooseFonts,
	Fonts,
	FontFamily,
	SizeFont,
	Choose,
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

	const [Cores] = useState(CoresOptions);
	const [OptionsFonts] = useState(FontsOptions);
	const [OptionsSize] = useState(FontSizeOptions);
	const [FontValue, setFontValue] = useState('Roboto');
	const [FontSizeValue, setFontSizeValue] = useState('3');

	const [ShortCuts, setShortCuts] = useState(false);

	var iframeDocument: Document;

	useEffect(() => {
		// @ts-ignore
		iframeDocument = iframe.current.contentWindow.document;

		iframeDocument.body.style.margin = '10px 20px';
		iframeDocument.designMode = 'on';
	});

	useEffect(() => {
		ActionsEditor.addKeyboardShortcuts(
			[
				BoldActive,
				ItalicActive,
				UnderlineActive,
				StrikeActive,
				OrdenedActive,
				NoOrdenedActive,
				LeftActive,
				CenterActive,
				RightActive,
				FullActive,
			],
			[
				setBoldActive,
				setItalicActive,
				setUnderlineActive,
				setStrikeActive,
				setOrdenedActive,
				setNoOrdenedActive,
				setLeftActive,
				setCenterActive,
				setRightActive,
				setFullActive,
			],
			iframeDocument
		);
	}, []);

	return (
		<>
			<Container>
				<Editor>
					<EditorActions>
						<Separator>
							<Action
								className={BoldActive ? 'active' : ''}
								onClick={() => ActionsEditor.TextBold(iframeDocument, BoldActive, setBoldActive)}
								title="Negrito (Ctrl + B)"
							>
								<Bold size={22.5} />
							</Action>

							<Action
								className={ItalicActive ? 'active' : ''}
								onClick={() => ActionsEditor.TextItalic(iframeDocument, ItalicActive, setItalicActive)}
								title="Italic (Ctrl + I)"
							>
								<Italic size={22.5} />
							</Action>

							<Action
								className={UnderlineActive ? 'active' : ''}
								onClick={() =>
									ActionsEditor.TextUnderline(iframeDocument, UnderlineActive, setUnderlineActive)
								}
								title={'Underline (Ctrl + U)'}
							>
								<Underline size={22.5} />
							</Action>

							<Action
								className={StrikeActive ? 'active' : ''}
								onClick={() => ActionsEditor.TextStrike(iframeDocument, StrikeActive, setStrikeActive)}
								title="Tachado (Ctrl + D)"
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
								title="Lista não ordenada (Ctrl + L)"
							>
								<NoOrdened size={22.5} />
							</Action>

							<Action
								className={OrdenedActive ? 'active' : ''}
								onClick={() => {
									NoOrdenedActive && setNoOrdenedActive(false);

									ActionsEditor.InsertListOrdenada(iframeDocument, OrdenedActive, setOrdenedActive);
								}}
								title="Lista ordenada (Ctrl + O)"
							>
								<Ordened size={22.5} />
							</Action>
						</Separator>

						<Separator>
							<Action
								className={LeftActive ? 'active' : ''}
								onClick={() =>
									ActionsEditor.InsertCursorLeft(
										iframeDocument,
										[LeftActive, CenterActive, RightActive, FullActive],
										[setLeftActive, setCenterActive, setRightActive, setFullActive]
									)
								}
								title="Alinha a esquerda (Ctrl + K)"
							>
								<AlignLeft size={22.5} />
							</Action>

							<Action
								className={CenterActive ? 'active' : ''}
								onClick={() =>
									ActionsEditor.InsertCursorCenter(
										iframeDocument,
										[LeftActive, CenterActive, RightActive, FullActive],
										[setLeftActive, setCenterActive, setRightActive, setFullActive]
									)
								}
								title="Alinha ao centro (Ctrl + N)"
							>
								<AlignCenter size={22.5} />
							</Action>

							<Action
								className={RightActive ? 'active' : ''}
								onClick={() =>
									ActionsEditor.InsertCursorRight(
										iframeDocument,
										[LeftActive, CenterActive, RightActive, FullActive],
										[setLeftActive, setCenterActive, setRightActive, setFullActive]
									)
								}
								title="Alinha a direita (Ctrl + M)"
							>
								<AlignRight size={22.5} />
							</Action>

							<Action
								className={FullActive ? 'active' : ''}
								onClick={() =>
									ActionsEditor.InsertCursorFull(
										iframeDocument,
										[LeftActive, CenterActive, RightActive, FullActive],
										[setLeftActive, setCenterActive, setRightActive, setFullActive]
									)
								}
								title="Alinha ao inteiro (Ctrl + F)"
							>
								<AlignFull size={22.5} />
							</Action>
						</Separator>

						<Separator>
							<Action
								className={LinkActive ? 'active' : ''}
								onClick={() => setLinkActive(true)}
								title="Link"
							>
								<Link size={22.5} />
							</Action>

							<Action
								className={YoutubeActive ? 'active' : ''}
								onClick={() => setYoutubeActive(true)}
								title="Video"
							>
								<Youtube size={22.5} />
							</Action>

							<Action
								className={ImageActive ? 'active' : ''}
								onClick={() => setImageActive(true)}
								title="Image"
							>
								<Image size={19} />
							</Action>
						</Separator>

						<Separator>
							<Action
								className={FontColorActive ? 'active' : ''}
								onClick={() => {
									FontSizeActive && setFontSizeActive(false);
									FontActive && setFontActive(false);

									setFontColorActive(!FontColorActive);
								}}
								title="Color da fonte"
							>
								<FontColor size={22.5} />

								{FontColorActive && (
									<Colors id="colors">
										<Indicador />

										<GridColors>
											{Cores.map(item => (
												<Color
													cor={item}
													onClick={() =>
														ActionsEditor.ChangeColor(
															iframeDocument,
															FontColorActive,
															setFontColorActive,
															item
														)
													}
												/>
											))}
										</GridColors>
									</Colors>
								)}
							</Action>

							<Action
								className={FontActive ? 'active' : ''}
								onClick={() => {
									FontColorActive && setFontColorActive(false);
									FontSizeActive && setFontSizeActive(false);

									setFontActive(!FontActive);
								}}
								title="Mudar fonte"
							>
								<Font size={22.5} />

								{FontActive && (
									<ChooseFonts>
										<Indicador />

										<Fonts>
											{OptionsFonts.map(item => {
												return (
													<Choose
														className={item.family == FontValue ? 'active' : ''}
														onClick={() => {
															setFontValue(item.family);

															ActionsEditor.ChangeFont(
																iframeDocument,
																FontActive,
																setFontActive,
																item.family
															);
														}}
													>
														<FontFamily style={{ fontFamily: item.family }}>
															{item.family}
														</FontFamily>
													</Choose>
												);
											})}
										</Fonts>
									</ChooseFonts>
								)}
							</Action>

							<Action
								className={FontSizeActive ? 'active' : ''}
								onClick={() => setFontSizeActive(!FontSizeActive)}
								title="Tamanho da fonte"
							>
								<FontSize size={22.5} />

								{FontSizeActive && (
									<ChooseFonts className="size">
										<Indicador />

										<Fonts className="size">
											{OptionsSize.map(item => {
												return (
													<Choose
														className={item.size == FontSizeValue ? 'active' : ''}
														onClick={() => {
															setFontSizeValue(item.size);

															ActionsEditor.ChangeFontSize(
																iframeDocument,
																FontSizeActive,
																setFontSizeActive,
																item.size
															);
														}}
													>
														<SizeFont>{item.label}</SizeFont>
													</Choose>
												);
											})}
										</Fonts>
									</ChooseFonts>
								)}
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

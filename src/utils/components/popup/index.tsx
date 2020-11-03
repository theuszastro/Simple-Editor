import React, { useEffect, BaseSyntheticEvent } from 'react';

import ActionsEditor from '../../ActionsEditor';

import { PopupProps } from '../../interfaces';

import {
	Wrapper,
	Content,
	Header,
	HeaderLabel,
	Close,
	Main,
	Insert,
	Tamanho,
	Width,
	Height,
	Footer,
	Add,
	Label,
	WrapperTamanho,
	WrapperInput,
} from './styles';

const Popup: React.FC<PopupProps> = ({
	category,
	Active,
	setActive,
	Link,
	setLink,
	short,
	setShort,
	width,
	setWidth,
	height,
	setHeight,
	reference,
}) => {
	const CloseInsert = (e: BaseSyntheticEvent, type: string) => {
		if (type == 'Fechar') {
			setActive(false);
		}

		if (type === 'content') {
			const Insert = document.querySelector('#InsertContent')!;

			if (Insert.contains(e.target)) return;

			setActive(false);
		}
	};

	const VideoAndImageVerify = height && width && Link ? 'active' : '';
	const VerifyLink = Link && short ? 'active' : '';

	var ifDocument: Document;

	useEffect(() => {
		// @ts-ignore
		ifDocument = reference.current.contentWindow.document;
	});

	return (
		<Wrapper onClick={e => CloseInsert(e, 'content')}>
			<Content id="InsertContent">
				<Header>
					<HeaderLabel>Adicionar {category}</HeaderLabel>

					<Close size={25} onClick={e => CloseInsert(e, 'Fechar')} />
				</Header>

				<Main>
					<WrapperInput>
						<Label htmlFor="link">Url</Label>
						<Insert id="link" value={Link} onChange={e => setLink(e.target.value)} />
					</WrapperInput>

					{category === 'link' ? (
						<WrapperInput>
							<Label htmlFor="Abreviação">Abreviação</Label>
							<Insert id="Abreviação" value={short} onChange={e => setShort(e.target.value)} />
						</WrapperInput>
					) : (
						<Tamanho>
							<WrapperTamanho>
								<Label htmlFor="Width">Largura</Label>
								<Width
									id="Width"
									value={width}
									onChange={e => {
										const value = e.target.value.replace(/^\D/, '');

										setWidth(value);
									}}
								/>
							</WrapperTamanho>

							<WrapperTamanho>
								<Label htmlFor="Height">Altura</Label>
								<Height
									id="Height"
									value={height}
									onChange={e => {
										const value = e.target.value.replace(/^\D/, '');
										setHeight(value);
									}}
								/>
							</WrapperTamanho>
						</Tamanho>
					)}
				</Main>

				<Footer>
					<Add
						className={category === 'link' ? VerifyLink : VideoAndImageVerify}
						onClick={() => {
							switch (category) {
								case 'link':
									if (Link && short) {
										ActionsEditor.InsertLink(ifDocument, Active, setActive, Link, short);
									}

									setLink('');
									setShort('');

									break;

								case 'video':
									if (width && height && Link) {
										ActionsEditor.InsertVideo(ifDocument, Active, setActive, Link, width, height);
									}

									setLink('');
									setWidth('');
									setHeight('');

									break;

								case 'image':
									if (width && height && Link) {
										ActionsEditor.InsertImage(ifDocument, Active, setActive, Link, width, height);
									}

									setLink('');
									setWidth('');
									setHeight('');

									break;
							}
						}}
					>
						Adicionar
					</Add>
				</Footer>
			</Content>
		</Wrapper>
	);
};

export default Popup;

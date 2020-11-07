import styled from 'styled-components';

import { ColorProps } from '../utils/interfaces';

import { BsFonts, BsFillImageFill, BsLink, BsTypeBold } from 'react-icons/bs';
import { BiFontColor, BiStrikethrough, BiUnderline, BiItalic } from 'react-icons/bi';
import { FiAlignJustify } from 'react-icons/fi';
import {
	AiOutlineFontSize,
	AiFillYoutube,
	AiOutlineUnorderedList,
	AiOutlineOrderedList,
	AiOutlineAlignLeft,
	AiOutlineAlignCenter,
	AiOutlineAlignRight,
} from 'react-icons/ai';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Editor = styled.div`
	width: 90rem;
	height: 35rem;

	border: 1px solid #ccc;

	border-radius: 0.7rem;
`;

export const EditorActions = styled.div`
	width: 89rem;
	height: 5rem;

	display: flex;
	align-items: center;

	padding: 0 0.5rem;

	border-top-right-radius: 0.7rem;
	border-top-left-radius: 0.7rem;
`;

export const Action = styled.div`
	width: 4rem;
	height: 4rem;

	cursor: pointer;

	transition: 0.2s;

	margin: 0.5rem 0.2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 0.5rem;

	position: relative;

	&.active {
		background-color: rgba(0, 0, 0, 0.1);
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const Separator = styled.div`
	display: flex;
	align-items: center;

	height: 4rem;

	& + & {
		border-left: 0.2rem solid #ccc;

		padding: 0 0.5rem;
	}
`;

export const TextArea = styled.iframe`
	width: 90rem;
	height: 30rem;

	border: 0;
	outline: 0;

	border-bottom-right-radius: 0.7rem;
	border-bottom-left-radius: 0.7rem;
`;

export const Colors = styled.div`
	position: absolute;
	top: 100%;

	width: 12.5rem;
	height: 10rem;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	transform: translateY(1.8rem);

	background-color: #fff;

	border-radius: 0.7rem;

	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.4);
`;

export const Indicador = styled.div`
	width: 2.5rem;
	height: 2.5rem;

	position: absolute;
	top: -1rem;
	z-index: 1;

	border-radius: 0.7rem;

	transform: rotate(-45deg);

	background-color: #fff;

	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.4);
`;

export const GridColors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;

	width: 10.5rem;
	height: 8rem;

	padding: 1rem;

	border-radius: 0.7rem;

	background-color: #fff;

	position: relative;
	z-index: 3;
`;

export const Color = styled.div<ColorProps>`
	width: 1.6rem;
	height: 1.6rem;

	border: 0.1px solid #888;
	border-radius: 0.5rem;

	cursor: pointer;

	position: relative;
	z-index: 3;

	transition: 300ms;

	background-color: ${props => props.cor};

	&:hover {
		transform: scale(1.2);
	}
`;

export const ChooseFonts = styled.div`
	background-color: #fff;

	width: 12rem;
	height: 36rem;

	border-radius: 0.7em;

	position: absolute;
	top: 100%;

	border-radius: 0.7rem;

	display: flex;
	align-items: center;
	justify-content: center;

	box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.4);

	transform: translateY(1.8rem);

	&.size {
		height: 28rem;
	}
`;

export const Fonts = styled.div`
	width: 12rem;
	height: 36rem;

	position: relative;
	z-index: 3;

	border-radius: 0.7rem;

	background-color: #fff;

	&.size {
		height: 28rem;
	}
`;

export const Choose = styled.div`
	width: 12rem;
	height: 4rem;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	color: #000;

	transition: 400ms;

	&.active {
		background-color: rgba(0, 0, 0, 0.7);

		color: #fff;
	}

	&:first-child {
		border-top-left-radius: 0.7rem;
		border-top-right-radius: 0.7rem;
	}

	&:last-child {
		border-bottom-left-radius: 0.7rem;
		border-bottom-right-radius: 0.7rem;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.7);

		color: #fff;
	}
`;

export const FontFamily = styled.p`
	text-align: center;

	font-size: 13px;
	font-weight: 400;
`;

export const SizeFont = styled.p`
	text-align: center;

	font-size: 1.3rem;
	font-weight: 400;
`;

export const AlignLeft = styled(AiOutlineAlignLeft)``;

export const AlignCenter = styled(AiOutlineAlignCenter)``;

export const AlignRight = styled(AiOutlineAlignRight)``;

export const AlignFull = styled(FiAlignJustify)``;

export const NoOrdened = styled(AiOutlineUnorderedList)``;

export const Ordened = styled(AiOutlineOrderedList)``;

export const Bold = styled(BsTypeBold)``;

export const Italic = styled(BiItalic)``;

export const Underline = styled(BiUnderline)``;

export const StrikeThroungh = styled(BiStrikethrough)``;

export const Link = styled(BsLink)``;

export const Image = styled(BsFillImageFill)``;

export const Youtube = styled(AiFillYoutube)``;

export const Font = styled(BsFonts)``;

export const FontSize = styled(AiOutlineFontSize)``;

export const FontColor = styled(BiFontColor)``;

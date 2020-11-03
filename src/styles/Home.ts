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

	width: 12rem;
	height: 10rem;

	padding: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	border-radius: 0.7rem;

	transform: translateY(1.8rem);

	background-color: #51484f;
`;

export const Indicador = styled.div`
	width: 2.5rem;
	height: 2.5rem;

	position: absolute;
	top: -1rem;
	z-index: 2;

	border-radius: 0.7rem;

	transform: rotate(-45deg);

	background-color: #51484f;
`;

export const GridColors = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
`;

export const Color = styled.div<ColorProps>`
	width: 1.7rem;
	height: 1.7rem;

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

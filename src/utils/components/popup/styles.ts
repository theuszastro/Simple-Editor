import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;

	position: absolute;
	top: 0;
	left: 0;

	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	background-color: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
	background-color: #fff;

	width: 70rem;
	height: 35rem;

	display: flex;
	justify-content: space-between;
	flex-direction: column;

	position: absolute;
	z-index: 5;

	border-radius: 1rem;

	cursor: default;
`;

export const Header = styled.header`
	padding: 0rem 2rem;

	height: 70px;

	border-top-left-radius: 1rem;
	border-top-right-radius: 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: rgb(0, 0, 0);
`;

export const HeaderLabel = styled.h1`
	font: 500 2rem 'Lexend Deca', sans-serif;

	color: #fff;
`;

export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	flex: 1;
`;

export const WrapperInput = styled.div`
	display: flex;
	flex-direction: column;

	width: 60rem;

	margin: -0.5rem 0 1rem;

	& + & {
		margin: 0.5rem 0;
	}
`;

export const Label = styled.label`
	font-size: 1.6rem;
	font-family: 'Lexend Deca', sans-serif;
	font-weight: 800;

	margin-bottom: 0.5rem;
`;

export const Insert = styled.input`
	width: 58rem;
	height: 50px;

	outline: 0;
	padding: 0 2rem;

	border: 1px solid #718096;
	border-radius: 0.7rem;
`;

export const Tamanho = styled.div`
	width: 60rem;

	margin-top: 0.5rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const WrapperTamanho = styled.div`
	display: flex;
	flex-direction: column;

	width: 28rem;

	& + & {
		margin-left: 3.3rem;
	}
`;

export const Width = styled.input`
	width: 26rem;
	height: 50px;

	margin-right: 2.7rem;

	padding: 0 2rem;

	outline: 0;
	border: 1px solid #718096;
	border-radius: 0.7rem;
`;

export const Height = styled.input`
	width: 26rem;
	height: 50px;

	padding: 0 2rem;

	outline: 0;
	border: 1px solid #718096;
	border-radius: 0.7rem;
`;

export const Footer = styled.footer`
	padding: 0rem 2rem;

	height: 70px;

	border-bottom-left-radius: 1rem;
	border-bottom-right-radius: 1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: rgb(0, 0, 0);
`;

export const Add = styled.button`
	width: 25rem;
	height: 4.5rem;

	color: #fff;

	font-size: 1.6rem;
	font-family: 'Lexend Deca', sans-serif;
	font-weight: 800;

	outline: 0;
	border: 0;
	border-radius: 1rem;

	cursor: default;

	background-color: green;

	opacity: 40%;

	&.active {
		cursor: pointer;

		opacity: 1;
	}
`;

export const Close = styled(AiOutlineClose)`
	cursor: pointer;

	color: #fff;

	transition: 400ms;

	&:hover {
		color: red;
	}
`;

import { RefObject } from 'react';

// styles/Home.ts
export interface ColorProps {
	cor: string;
}

// utils/componenets/popup
export interface PopupProps {
	category: 'link' | 'video' | 'image';

	Active: boolean;
	setActive: any;

	Link: string;
	setLink: any;

	short?: string;
	setShort?: any;

	width?: string;
	setWidth?: any;

	height?: string;
	setHeight?: any;

	reference: RefObject<HTMLIFrameElement>;
}

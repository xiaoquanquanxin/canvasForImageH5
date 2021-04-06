//	事件对象
export interface EventInfo {
	touchStartY: number;
	currentY: number;
	inertiaStartY?: number;
	diffY?: number;
	prevDiffY?: number;
	isMoveEd?: boolean;
}

export interface ImgItem {
	src: string;
	size: number;
	name?: string;
	img: HTMLImageElement;
	//	用于存储一些额外的信息
	extra?: any;
	//	斜率
	yK?: number;
	xK?: number;
	initX?: number;
	initY?: number;
}

//	图片的map
export interface ImgMap {
	[any: string]: ImgItem;

	airplane: ImgItem;
	bird: ImgItem;
	cloud_01: ImgItem;
	cloud_02: ImgItem;
	cloud_03: ImgItem;
	cloud_04: ImgItem;
	cloud_05: ImgItem;
	cover: ImgItem;
	pigeon: ImgItem;
	year: ImgItem;
	pigeon_s: ImgItem;
}

export interface AudioItem {
	src: string;
	size: number;
	name?: string;
	audio: HTMLAudioElement;
	//	用于存储一些额外的信息
	extra?: any;
}

//	音频的map
export interface AudioMap {
	[any: string]: AudioItem;

	bgm: AudioItem;
}

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
	initY?: number;
	initX?: number;
	//	拐点，进行另一端计算，这个值是说，我当前图片运动到dy为inflexionPoint的时候进行改变
	inflexionPoint?: number;
	//	拐点后的
	inflexionYK?: number;
	inflexionXK?: number;
	inflexionInitY?: number;
	inflexionInitX?: number;
}

//	图片的map
export interface ImgMap {
	[any: string]: ImgItem;

	airplane: ImgItem;
	cloud_01: ImgItem;
	cloud_02: ImgItem;
	cloud_03: ImgItem;
	cloud_04: ImgItem;
	cloud_05: ImgItem;
	cloud_06: ImgItem;
	cover: ImgItem;
	pigeon: ImgItem;
	year: ImgItem;
	pigeon_s: ImgItem;
	cloud_sun: ImgItem;
	tiananmenpng: ImgItem;
	tiananmenjpg: ImgItem;
	airplane_up: ImgItem;
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

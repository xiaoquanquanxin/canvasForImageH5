//	事件对象
export interface EventInfo {
	touchStartY: number;
	currentY: number;
	inertiaStartY?: number;

	diffY?: number;
	prevDiffY?: number;
}

export interface ImgItem {
	src: string;
	size: number;
	name?: string;
	img: HTMLImageElement;
	//	用于存储一些额外的信息
	extra?: any;
}

//	图片的map
export interface ImgMap {
	[any: string]: ImgItem
}
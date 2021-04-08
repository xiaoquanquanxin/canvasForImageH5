//	事件对象
export interface EventInfo {
	touchStartY: number;
	currentY: number;
	inertiaStartY?: number;
	diffY?: number;
	prevDiffY?: number;
	isMoveEd?: boolean;
}

//	拐点
interface InflexionPoint {
	//	拐点位置
	inflexionPoint: number;
	//	拐点后x斜率
	inflexionPointXK: number;
	//	拐点后y斜率
	inflexionPointYK: number
}

//	每一组图片
export interface ImgItem {
	[any: string]: any;

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
	//	拐点列表
	inflexionPointList?: Array<InflexionPoint>;
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

//	计算绘图基础数据 ，这也是最终的数据
export interface RenderBasicParams {
	img: HTMLImageElement;
	width: number;
	height: number;
	dx: number;
	dy: number;
	rw: number;
	rh: number;
	inCanvas: boolean
}

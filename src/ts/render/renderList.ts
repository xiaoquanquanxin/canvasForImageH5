import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {checkImgInCanvas, getDx, getDy, getImageRatio, linearMove} from "@ts/utils/utils";
import {ImgItem} from "@ts/interface/interface";

//	静止的，与currentY完全匹配的
function renderStatic(dy: number, img: HTMLImageElement) {
	const {width} = getImageRatio(img);
	const ratio = canvasHeight / canvasWidth;
	cacheCtx.drawImage(img,
		//	img x,y,w,h
		0, -dy, width, width * ratio,
		//	canvas x,y,w,h
		0, 0, canvasWidth, canvasHeight);
}

//	画背景
export function renderCover(currentY: number, imgItem: ImgItem) {
	const {img} = imgItem;
	renderStatic(currentY, img);
}

//	黑色小云
export function renderCloud_03(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	黄色大云
export function renderCloud_02(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	白色小云
export function renderCloud_06(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	鸽子，向左
export function renderPigeon(currentY: number, imgItem: ImgItem, timeout: number) {
	const {initX, initY, yK, xK, img, extra} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = getDy(initY, currentY, yK);
	const dx = getDx(initX, currentY, xK);
	extra.dx = dx;
	extra.dy = dy;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	const _render = () => {
		const {dx, dy} = extra;
		cacheCtx.drawImage(img,
			timeout % 2 ? width / 2 : 0, 0, width / 2, height,
			dx, dy, canvasWidth * rw / 2, canvasWidth * rh,
		);
	};
	_render();
}

//	灰色大云，向右
export function renderCloud_01(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	灰色远处的大云
export function renderCloud_04(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	飞机，向左
export function renderAirplane(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	近处的大灰云
export function renderCloud_05(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	年份
export function renderYear(currentY: number, imgItem: ImgItem) {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = getDy(initY, currentY, yK);
	const dx = getDx(initX, currentY, xK);
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	//	优化渲染
	if (!inCanvas) {
		return;
	}
	const total = 62;
	// console.log(canvasHeight - dy | 0);
	let i = ((canvasHeight - dy) / total * 6) | 0;
	i = Math.min(i, total - 1);
	i = Math.max(i, 0);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

//	小鸽子
export function renderPigeonSmall(currentY: number, imgItem: ImgItem, timeout: number) {
	const {initX, initY, yK, xK, img, extra} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = getDy(initY, currentY, yK);
	const dx = getDx(initX, currentY, xK);
	extra.dx = dx;
	extra.dy = dy;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	const _render = () => {
		const {dx, dy} = extra;
		const sx: number = timeout % 3 / 3 * width;
		cacheCtx.drawImage(img,
			sx, 0, width / 3, height,
			dx, dy, canvasWidth * rw / 2, canvasWidth * rh,
		);
	};
	_render();
}

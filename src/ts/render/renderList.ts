import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {checkImgInCanvas, getImageRatio} from "@ts/utils/utils";
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

//	cloud_03，向左
export function renderCloud_03(currentY: number, imgItem: ImgItem) {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initY + currentY * mainRatio) * yK;
	const dx = (initX + currentY * mainRatio) * xK;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
}


//	cloud_01，向右
export function renderCloud_01(currentY: number, imgItem: ImgItem) {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initY + currentY * mainRatio) * yK;
	const dx = (initX + currentY * mainRatio) * xK;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
	//
	// const {initX, yK, xK, img} = imgItem;
	// const {rw, rh, width, height} = getImageRatio(img);
	// const dy = (initX - currentY) * yK;
	// const dx = (initX + currentY) * xK;
	// const inCanvas = checkImgInCanvas(dy, dx, width, height);
	// cacheCtx.drawImage(img,
	// 	0, 0, width, height,
	// 	dx, dy, canvasWidth * rw, canvasWidth * rh,
	// );
}


//	cloud_02，向左
export function renderCloud_02(currentY: number, imgItem: ImgItem) {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initY + currentY * mainRatio) * yK;
	const dx = (initX + currentY * mainRatio) * xK;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
}

//	cloud_06，向左
export function renderCloud_06(currentY: number, imgItem: ImgItem) {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initY + currentY * mainRatio) * yK;
	const dx = (initX + currentY * mainRatio) * xK;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
}

//	cloud_04，类背景
export function renderCloud_04(currentY: number, imgItem: ImgItem) {
	const {img} = imgItem;
	currentY += canvasHeight * 1.5;
	renderStatic(currentY, img);
}

//	cloud_05，类背景
export function renderCloud_05(currentY: number, imgItem: ImgItem) {
	const {img} = imgItem;
	currentY += canvasHeight * 1.9;
	renderStatic(currentY, img);
}

//	鸽子，向左
export function renderPigeon(currentY: number, imgItem: ImgItem, timeout: number) {
	const {img, extra} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	//	静态的y，是初始化的高度，用于做优化
	const staticY = canvasHeight * .9;
	const dx = currentY * 1.1 + staticY;
	const k = .2;
	const dy = (staticY - currentY) * k;
	extra.dx = dx;
	extra.dy = dy;
	const _render = () => {
		const {dx, dy} = extra;
		//	console.log(dx, dy);
		cacheCtx.drawImage(img,
			//	扇动翅膀
			timeout % 2 ? width / 2 : 0, 0, width / 2, height,
			dx, dy, canvasWidth * rw / 2, canvasWidth * rh,
		);
	};
	_render();
}

//	飞机，向左
export function renderAirplane(currentY: number, imgItem: ImgItem) {

	const {initX, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initX - currentY) * yK;
	const dx = (initX + currentY) * xK;
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	//	优化，不在canvas画布范围
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
}

//	年份
export function renderYear(currentY: number, imgItem: ImgItem) {
	const {img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = canvasHeight * 2.2 + currentY;
	const dx = canvasWidth * .3;
	const total = 62;
	let i = ((-canvasHeight * 1.2 - currentY) / total * 6) | 0;
	i = Math.min(i, total - 1);
	i = Math.max(i, 0);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

//	小鸽子
export function renderPigeonSmall(currentY: number, imgItem: ImgItem, timeout) {
	const {img, extra} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	//	静态的y，是初始化的高度，用于做优化
	const dy = canvasHeight * 2.05 + currentY;
	const dx = canvasWidth * .6;
	extra.dy = dy;
	const _render = () => {
		const {dy} = extra;
		const sx: number = timeout % 3 / 3 * width;
		cacheCtx.drawImage(img,
			//	扇动翅膀
			sx, 0, width / 3, height,
			dx, dy, canvasWidth * rw / 2, canvasWidth * rh,
		);
	};
	_render();
}


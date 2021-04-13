//	计算当前图片在canvas中的比例
import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {ImgItem, RenderBasicParams} from "@ts/interface/interface";
//	获取图片比例 已优化
export const getImageRatio = (img) => {
	const {width, height} = img;
	const rw = width / 750;
	const rh = height / 750;
	return {
		rw, rh, width: width | 0, height: height | 0,
	};
};
//	检查要画的图在canvas范围内
export const checkImgInCanvas = (dy: number, dx: number, width: number, height: number, renderAfter: number = 0, renderBefore: number = Infinity, currentY: number): boolean => {
	return !(dy > canvasHeight || dx > canvasWidth || dx < -width * mainRatio || dy < -height * mainRatio || -currentY < renderAfter || -currentY > renderBefore);
};
//	获取dy	已优化
export const getDy = (initY: number, currentY: number, yK: number): number => {
	return (initY + (currentY * mainRatio) * yK) | 0;
};
//	获取dx	已优化
export const getDx = (initY: number, currentY: number, xK: number): number => {
	return (initY + (currentY * mainRatio) * xK) | 0;
};
//	上下左右线性移动 - 基础方法  已优化
export const linearMove = (currentY: number, imgItem: ImgItem) => {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	const {scale = 1} = imgItem;
	if (!inCanvas) {
		return;
	}
	const dw = (canvasWidth * rw * scale) | 0;
	const dh = (canvasWidth * rh * scale) | 0;
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, dw, dh,
	);
};
//	带拐点的移动 - 基础方法	已优化
export const hasInflectionMove = (currentY: number, imgItem: ImgItem) => {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getInflectionRenderBasicParams(currentY, imgItem);
	const {scale = 1} = imgItem;
	if (!inCanvas) {
		return;
	}
	const dw = (canvasWidth * rw * scale) | 0;
	const dh = (canvasWidth * rh * scale) | 0;
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, dw, dh,
	);
};
//	基础方法 - 抽象方法
export const getRenderBasicParams = (currentY: number, imgItem: ImgItem): RenderBasicParams => {
	const {initX, initY, yK, xK, img, renderAfter, renderBefore} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = getDy(initY, currentY, yK);
	const dx = getDx(initX, currentY, xK);
	//	优化渲染
	const inCanvas = checkImgInCanvas(dy, dx, width, height, renderAfter, renderBefore, currentY);
	return {img, width, height, dx, dy, rw, rh, inCanvas};
};
//	带拐点的基础方法 - 抽象方法
export const getInflectionRenderBasicParams = (currentY: number, imgItem: ImgItem): RenderBasicParams => {
	let {initX, initY, yK, xK, img, inflexionPointList, renderAfter, renderBefore} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	let dy = getDy(initY, currentY, yK);
	let dx = getDx(initX, currentY, xK);
	for (const {inflexionPoint, inflexionPointYK, inflexionPointXK} of inflexionPointList) {
		if (0 > inflexionPoint + currentY) {
			dy = getDx(dy, inflexionPoint + currentY, inflexionPointYK - yK);
			dx = getDx(dx, inflexionPoint + currentY, inflexionPointXK - xK);
		}
	}
	const inCanvas = checkImgInCanvas(dy, dx, width, height, renderAfter, renderBefore, currentY);
	return {img, width, height, dx, dy, rw, rh, inCanvas};
};
//	定时器的运动 - 基础运动	已优化
export const linearMoveWithTimeout = (currentY: number, imgItem: ImgItem, timeout: number, times: number) => {
	const {extra, scale = 1} = imgItem;
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	extra.dx = dx;
	extra.dy = dy;
	const _render = () => {
		const {dx, dy} = extra;
		const sx: number = (timeout % times / times * width) | 0;
		const sw: number = (width / times) | 0;
		const dw: number = (canvasWidth * rw / times * scale) | 0;
		const dh: number = (canvasWidth * rh * scale) | 0;
		cacheCtx.drawImage(img,
			sx, 0, sw, height,
			dx, dy, dw, dh,
		);
	};
	_render();
};
//	取 smaller ~ larger 范围内的值 	不可优化
export const getValueInRange = (smaller: number, middle: number, larger: number): number => {
	middle = Math.min(middle, larger);
	middle = Math.max(middle, smaller);
	return middle;
};
//	静态旋转 - 运动方法	已优化
export const rotateOnly = (currentY: number, imgItem: ImgItem) => {
	const {countingStartY, countingEndY, staticRotateX, staticRotateY, rotateDirection} = imgItem;
	let {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	//	特殊处理
	let scale = -(countingStartY + currentY) / (countingEndY - countingStartY);
	//	缩放
	scale = getValueInRange(0, scale, 1);
	const dw = (canvasWidth * rw * scale) | 0;
	const dh = (canvasWidth * rh * scale) | 0;
	//	旋转
	const rotate = scale;
	cacheCtx.save();
	cacheCtx.translate(staticRotateX, staticRotateY);
	cacheCtx.rotate(rotate * 3 * rotateDirection);
	const _dx = (dx - dw / 2) | 0;
	const _dy = (dy - dh / 2) | 0;
	cacheCtx.drawImage(img,
		0, 0, width, height,
		_dx, _dy, dw, dh,
	);
	cacheCtx.restore();
};
//	计算基础数据	已优化
export const calcBasicRenderData = (width: number, i: number, total: number, rw: number, rh: number) => {
	const sx = (width * i / total) | 0;
	const sw = (width / total) | 0;
	const dw = (canvasWidth * rw / total) | 0;
	const dh = (canvasWidth * rh) | 0;
	return {sx, sw, dw, dh};
};

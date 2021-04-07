//	计算当前图片在canvas中的比例
import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {ImgItem} from "@ts/interface/interface";
//	获取图片比例
export const getImageRatio = (img) => {
	const {width, height} = img;
	const rw = width / 750;
	const rh = height / 750;
	return {
		rw, rh, width, height,
	};
};
//	检查要画的图在canvas范围内
export const checkImgInCanvas = (dy: number, dx: number, width: number, height: number): boolean => {
	return !(dy > canvasHeight || dx > canvasWidth || dx < -width * mainRatio || dy < -height * mainRatio);
};
//	获取dy
export const getDy = (initY: number, currentY: number, yK: number): number => {
	return initY + (currentY * mainRatio) * yK;
};
//	获取dx
export const getDx = (initY: number, currentY: number, xK: number): number => {
	return initY + (currentY * mainRatio) * xK;
};
//	上下左右线性移动 - 基础方法
export const linearMove = (currentY: number, imgItem: ImgItem) => {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = getDy(initY, currentY, yK);
	const dx = getDx(initX, currentY, xK);
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	//	优化渲染
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
};
//	带拐点的移动 - 基础方法
export const hasInflectionMove = (currentY: number, imgItem: ImgItem) => {
	let {initX, initY, yK, xK, img, inflexionPointList} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	let dy = getDy(initY, currentY, yK);
	let dx = getDx(initX, currentY, xK);
	for (const {inflexionPoint, inflexionPointYK, inflexionPointXK} of inflexionPointList) {
		// console.log(inflexionPoint, inflexionPointYK, inflexionPointXK);
		if (0 > inflexionPoint + currentY) {
			dy = getDx(dy, inflexionPoint + currentY, inflexionPointYK - yK);
			dx = getDx(dx, inflexionPoint + currentY, inflexionPointXK - xK);
		}
	}
	const inCanvas = checkImgInCanvas(dy, dx, width, height);
	//	优化渲染
	if (!inCanvas) {
		return;
	}
	cacheCtx.drawImage(img,
		0, 0, width, height,
		dx, dy, canvasWidth * rw, canvasWidth * rh,
	);
};

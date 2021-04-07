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
//	上下左右线性移动
export const linearMove = (currentY: number, imgItem: ImgItem) => {
	const {initX, initY, yK, xK, img} = imgItem;
	const {rw, rh, width, height} = getImageRatio(img);
	const dy = (initY + currentY * mainRatio) * yK;
	const dx = (initX + currentY * mainRatio) * xK;
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

//	计算当前图片在canvas中的比例
import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
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

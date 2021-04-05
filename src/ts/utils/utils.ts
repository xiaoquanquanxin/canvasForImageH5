//	计算当前图片在canvas中的比例
export const getImageRatio = (img) => {
	const {width, height} = img;
	const rw = width / 750;
	const rh = height / 750;
	return {
		rw, rh, width, height
	};
};
//	像素比
export const devicePixelRatio = (() => {
	let ratio = 1;
	//	@ts-ignore
	if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
		//	@ts-ignore
		ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
	} else if (window.devicePixelRatio !== undefined) {
		ratio = window.devicePixelRatio;
	}
	return ratio;
})();
console.log("devicePixelRatio：", devicePixelRatio);
//	canvas的宽高
export const canvasWidth = window.innerWidth * devicePixelRatio;
export const canvasHeight = window.innerHeight * devicePixelRatio;
//	设备宽度比
export const mainRatio = canvasWidth / 750;
console.log('mainRatio', mainRatio);

document.getElementById('canvasHeight').innerText = canvasHeight.toString();

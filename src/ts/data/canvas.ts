import {canvasHeight, canvasWidth} from "@ts/data/device";
//	拿canvas元素
export const $canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = $canvas.getContext('2d');

//	离屏缓存
export const $cacheCanvas = document.createElement('canvas');
export const cacheCtx = $cacheCanvas.getContext('2d');

//	设置宽度、高度
$canvas.width = canvasWidth;
$cacheCanvas.width = canvasWidth;
$canvas.height = canvasHeight;
$cacheCanvas.height = canvasHeight;


//	拿loading元素
export const $loading = document.getElementById('loading');
export const $number = document.getElementById('number');

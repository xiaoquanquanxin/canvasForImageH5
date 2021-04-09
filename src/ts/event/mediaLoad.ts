import {progressSubject} from "@ts/data/observableData";
import {imgList} from "@ts/data/imagesData";
import {audioList} from "@ts/data/audios";
//	总进度
const totalProgress = [].concat(imgList).concat(audioList)
	.reduce((previousValue, currentValue) => previousValue + currentValue.size, 0);
//	当前进度
let progress = 0;

//	资源加载原生js
function mediaOnLoad() {
	progress += +this.dataset.size;
	//	将来可以按图片的大小做
	progressSubject.next(Math.min((progress / totalProgress * 100), 100) | 0);
}

//	媒体载入
export const mediaLoad = () => {
	for (const {src, size, img} of imgList) {
		img.onload = mediaOnLoad;
		img.dataset.size = size.toString();
		img.src = src;
	}
	for (const {src, size, audio} of audioList) {
		audio.dataset.size = size.toString();
		audio.src = src;
		audio.addEventListener("canplay", mediaOnLoad);
	}
};

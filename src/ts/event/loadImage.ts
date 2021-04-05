import {progressSubject} from "../data/observableData";
import {imgList} from "@ts/data/images";

//	总进度
const totalProgress = imgList.reduce((previousValue, currentValue) => previousValue + currentValue.size, 0);
//	当前进度
let progress = 0;

function imgOnLoad() {
	progress += +this.dataset.size;
	//	将来可以按图片的大小做
	progressSubject.next(Math.min((progress / totalProgress * 100), totalProgress) | 0);
}

export const imgLoad = () => {
	for (const {src, size, img} of imgList) {
		img.onload = imgOnLoad;
		img.dataset.size = size.toString();
		img.src = src;
	}
};

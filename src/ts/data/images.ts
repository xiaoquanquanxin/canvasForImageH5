//	加载的图片列表，map等
import airplane from "@img/airplane.png";
import bird from "@img/bird.png";
import cloud_01 from "@img/cloud_01.png";
import cloud_02 from "@img/cloud_02.png";
import cloud_03 from "@img/cloud_03.png";
import cloud_04 from "@img/cloud_04.png";
import cloud_05 from "@img/cloud_05.png";
import cover from "@img/cover.jpg";
import pigeon from "@img/pigeon.png";
import year from "@img/year.png";
import pigeon_s from "@img/pigeon_s.png";
import {ImgItem, ImgMap} from "@ts/interface/interface";
import {canvasHeight} from "@ts/data/device";
//	图片的map
export const imgMap: ImgMap = {
	airplane: {
		name: "airplane",
		src: airplane,
		img: new Image(),
		size: 4889,
		yK: .08,
		xK: 1,
		//	几个 canvasHeight 的高度出
		init: 1.6 * canvasHeight,
	},
	cloud_01: {name: "cloud_01", src: cloud_01, img: new Image(), size: 19652},
	cloud_02: {name: "cloud_02", src: cloud_02, img: new Image(), size: 28804},
	cloud_03: {name: "cloud_03", src: cloud_03, img: new Image(), size: 4436},
	cloud_04: {name: "cloud_04", src: cloud_04, img: new Image(), size: 5501},
	cloud_05: {name: "cloud_05", src: cloud_05, img: new Image(), size: 76327},
	bird: {name: "bird", src: bird, img: new Image(), size: 76327},
	cover: {name: "cover", src: cover, img: new Image(), size: 60190, init: 0, yK: 1, xK: 0},
	pigeon: {name: "pigeon", src: pigeon, img: new Image(), extra: {}, size: 19103},
	year: {name: "year", src: year, img: new Image(), extra: {}, size: 19103},
	pigeon_s: {name: "pigeon_s", src: pigeon_s, img: new Image(), extra: {}, size: 19103},
};
//	图片的list
export const imgList: Array<ImgItem> = (() => {
	const list = [];
	Reflect.ownKeys(imgMap).forEach((key: string) => {
		list.push(imgMap[key]);
	});
	return list;
})();
//	console.log(imgList);

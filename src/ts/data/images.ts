//	加载的图片列表，map等
import airplane from "@img/airplane.png";
import bird from "@img/bird.png";
import cloud_01 from "@img/cloud_01.png";
import cloud_02 from "@img/cloud_02.png";
import cloud_03 from "@img/cloud_03.png";
import cloud_04 from "@img/cloud_04.png";
import cloud_05 from "@img/cloud_05.png";
import cloud_06 from "@img/cloud_06.png";
import cover from "@img/cover.jpg";
import pigeon from "@img/pigeon.png";
import year from "@img/year.png";
import pigeon_s from "@img/pigeon_s.png";
import {ImgItem, ImgMap} from "@ts/interface/interface";
import {canvasWidth} from "@ts/data/device";
//	fixme	不应该被使用的值
const canvasHeight = 0;
//	图片的map
export const imgMap: ImgMap = {
	//	背景
	cover: {name: "cover", src: cover, img: new Image(), size: 60190, initX: 0, yK: 1, xK: 0},
	//	黑色小云
	cloud_03: {
		name: "cloud_03",
		src: cloud_03,
		img: new Image(),
		size: 4436,
		yK: 1,
		xK: .25,
		initY: 1.38 * canvasWidth,
		initX: .05 * canvasWidth,
	},
	//	黄色大云
	cloud_02: {
		name: "cloud_02",
		src: cloud_02,
		img: new Image(),
		size: 28804,
		yK: 1,
		xK: .15,
		initY: 1.38 * canvasWidth,
		initX: 0,
	},
	//	白色小云
	cloud_06: {
		name: "cloud_06",
		src: cloud_06,
		img: new Image(),
		size: 19652,
		yK: 1,
		xK: .25,
		initY: 1.7 * canvasWidth,
		initX: -.2 * canvasWidth,
	},
	//	灰色大云
	cloud_01: {
		name: "cloud_01",
		src: cloud_01,
		img: new Image(),
		size: 19652,
		yK: 1,
		xK: -.25,
		initY: 2.1 * canvasWidth,
		initX: .2 * canvasWidth,
	},
	//	鸽子
	pigeon: {
		name: "pigeon",
		src: pigeon,
		img: new Image(),
		extra: {},
		size: 19103,
		yK: .3,
		xK: 1,
		initY: 2.5 * canvasWidth,
		initX: 1.6 * canvasWidth,
	},
	//	灰色远处的大云
	cloud_04: {
		name: "cloud_04",
		src: cloud_04,
		img: new Image(),
		size: 5501,
		yK: 1,
		xK: 0,
		initY: 2.6 * canvasWidth,
		initX: 0,
	},
	//	飞机
	airplane: {
		name: "airplane",
		src: airplane,
		img: new Image(),
		size: 4889,
		yK: .2,
		xK: 1,
		initY: 1.1 * canvasWidth,
		initX: 2.4 * canvasWidth,
	},
	//	近处的大灰云
	cloud_05: {
		name: "cloud_05",
		src: cloud_05,
		img: new Image(),
		size: 76327,
		yK: 1,
		xK: 0,
		initX: 0,
		initY: 3.2 * canvasWidth,
	},
	//	年代
	year: {
		name: "year",
		src: year,
		img: new Image(),
		extra: {},
		size: 19103,
		yK: 1,
		xK: 0,
		initX: .3 * canvasWidth,
		initY: 3.8 * canvasWidth,
	},
	//	年代上面的小鸟
	pigeon_s: {
		name: "pigeon_s",
		src: pigeon_s,
		img: new Image(),
		extra: {},
		size: 19103,
		yK: 1,
		xK: 0,
		initX: .6 * canvasWidth,
		initY: 3.5 * canvasWidth,
	},
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

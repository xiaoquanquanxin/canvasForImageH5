//	加载的图片列表，map等
//	第一段
import airplane from "@img/section01/airplane.png";
import cloud_01 from "@img/section01/cloud_01.png";
import cloud_02 from "@img/section01/cloud_02.png";
import cloud_03 from "@img/section01/cloud_03.png";
import cloud_04 from "@img/section01/cloud_04.png";
import cloud_05 from "@img/section01/cloud_05.png";
import cloud_06 from "@img/section01/cloud_06.png";
import cover from "@img/cover.jpg";
import pigeon from "@img/section01/pigeon.png";
import year from "@img/section01/year.png";
import pigeon_s from "@img/section01/pigeon_s.png";
//	第二段
import airplane_up from "@img/section02/airplane_up.png";
import cloud_sun from "@img/section02/cloud_sun.png";
import tiananmenpng from "@img/section02/tiananmen.png";
import tiananmenjpg from "@img/section02/tiananmen.jpg";
import panzers from "@img/section02/panzers.png";
import people from "@img/section02/people.png";
import flag from "@img/section02/flag.png";
import {ImgItem, ImgMap} from "@ts/interface/interface";
import {canvasHeight, canvasWidth} from "@ts/data/device";
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
		initY: .8 * canvasWidth,
		initX: 1.2 * canvasWidth,
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
		initX: .31 * canvasWidth,
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
	//	section 02
	//	天安门jpg
	tiananmenjpg: {
		name: "tiananmenjpg",
		src: tiananmenjpg,
		img: new Image(),
		size: 19103,
		yK: 1,
		xK: 0,
		initX: 0,
		initY: 4.3 * canvasWidth,
	},
	//	太阳照射的云
	cloud_sun: {
		name: "cloud_sun",
		src: cloud_sun,
		img: new Image(),
		size: 19103,
		yK: 1,
		xK: 0,
		initX: 0,
		initY: 4.15 * canvasWidth,
	},
	//	向上飞的飞机
	airplane_up: {
		name: "airplane_up",
		src: airplane_up,
		img: new Image(),
		size: 19103,
		yK: 2,
		xK: 1,
		initX: 3.6 * canvasWidth,
		initY: 7.8 * canvasWidth,
	},
	//	天安门png
	tiananmenpng: {
		name: "tiananmenpng",
		src: tiananmenpng,
		img: new Image(),
		size: 19103,
		yK: 1,
		xK: 0,
		initX: 0,
		initY: 4.3 * canvasWidth,
	},
	//	坦克
	panzers: {
		name: "panzers",
		src: panzers,
		img: new Image(),
		size: 19103,
		yK: 1.05,
		xK: .1,
		initY: 6.16 * canvasWidth,
		initX: -.2 * canvasWidth,
	},
	//	坦克2
	panzers2: {
		name: "panzers2",
		src: panzers,
		img: new Image(),
		size: 19103,
		yK: 1.05,
		xK: .1,
		initY: 6.4 * canvasWidth,
		initX: 1.04 * canvasWidth,
	},
	//	人群
	people: {
		name: "people",
		src: people,
		img: new Image(),
		size: 19103,
		yK: 1.05,
		xK: .1,
		initY: 6.4 * canvasWidth,
		initX: 1.04 * canvasWidth,
	},
	//	国旗
	flag: {
		name: "flag",
		src: flag,
		img: new Image(),
		size: 19103,
		yK: 1.5,
		xK: 0,
		initY: 9.65 * canvasWidth,
		initX: .195 * canvasWidth,
		//	拐点，进行另一端计算，由于统一了currentY的度量，所以可以用绝对值数字
		inflexionPoint: 6.25 * 750,
		//	拐点后的斜率
		inflexionYK: 1,
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

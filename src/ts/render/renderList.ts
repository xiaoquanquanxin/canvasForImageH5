import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {
	getInflectionRenderBasicParams,
	getRenderBasicParams, getValueInRange,
	hasInflectionMove,
	linearMove,
	linearMoveWithTimeout, rotateOnly,
} from "@ts/utils/utils";
import {ImgItem} from "@ts/interface/interface";
import dragonfly from "@img/section04/dragonfly.png";

//	画背景
export function renderCover(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	钟表
export function renderClock(currentY: number, imgItem: ImgItem, timeout: number) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 34);
}

//	黑色大云
export function renderBlackCloud(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	黑色小云
export function renderCloud_03(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	黄色大云
export function renderCloud_02(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	白色小云
export function renderCloud_06(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	鸽子，向左
export function renderPigeon(currentY: number, imgItem: ImgItem, timeout: number) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 2);
}

//	灰色大云，向右
export function renderCloud_01(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	灰色远处的大云
export function renderCloud_04(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	飞机，向左
export function renderAirplane(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	近处的大灰云
export function renderCloud_05(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	年份
export function renderYear(currentY: number, imgItem: ImgItem) {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	const total = 62;
	//	特殊处理
	let i = ((canvasHeight - dy) / total * 6) | 0;
	i = getValueInRange(0, i, total - 1);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

//	小鸽子
export function renderPigeonSmall(currentY: number, imgItem: ImgItem, timeout: number) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 3);
}

/**
 * section 02*****************************************************************
 * */
//	天安门jpg
export function renderTiananmenjpg(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	太阳照射的云
export function renderCloud_sun(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	向上飞的飞机
export function renderAirplane_up(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	天安门png
export function renderTiananmenpng(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	坦克
export function renderPanzers(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	人群
export function renderPeople(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	国旗
export function renderFlag(currentY: number, imgItem: ImgItem) {
	hasInflectionMove(currentY, imgItem);
}

/**
 * section03*****************************************************************
 * */
//	阳光
export function renderSunShine(currentY: number, imgItem: ImgItem) {
	hasInflectionMove(currentY, imgItem);
}

//	吊井
export function renderCranes(currentY: number, imgItem: ImgItem, timeout) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 24);
}

//	道路
export function renderRoad(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	墙
export function renderWall(currentY: number, imgItem: ImgItem) {
	hasInflectionMove(currentY, imgItem);
}

//	卡车
export function renderCar(currentY: number, imgItem: ImgItem, timeout: number) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 2);
}

//	烟尘
export function renderSmoke(currentY: number, imgItem: ImgItem, timeout: number) {
	linearMoveWithTimeout(currentY, imgItem, timeout, 3);
}

//	门
export function renderDoor(currentY: number, imgItem: ImgItem) {
	const {inflexionPointList} = imgItem;
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getInflectionRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	//	特殊处理
	const sx: number = (() => {
		//	第二个拐点出
		const {inflexionPoint} = inflexionPointList[1];
		if (inflexionPoint + .2 * 750 > -currentY) {
			return 0;
		} else if (inflexionPoint + .4 * 750 > -currentY) {
			return width / 3;
		} else {
			return width * 2 / 3;
		}
	})();
	cacheCtx.drawImage(img,
		sx, 0, width / 3, height,
		dx, dy, canvasWidth * rw / 3, canvasWidth * rh,
	);
}

//	year1959
export function renderYear1959(currentY: number, imgItem: ImgItem) {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	const total = 62;
	//	特殊处理
	let i = (dy / total * 6) | 0;
	i = getValueInRange(0, i, total - 1);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

//	蜻蜓
export function renderDragonfly(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

/**
 * section04*****************************************************************
 * */
//	诗人
export function renderPoet(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	蘑菇云
export function renderMushroom(currentY: number, imgItem: ImgItem) {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	const total = 9;
	//	特殊处理
	let i = (-(750 * 13.5 + currentY) / total / 11) | 0;
	i = getValueInRange(0, i, total - 1);
	//	不透明度
	cacheCtx.globalAlpha = Math.max((750 * 15.3 + currentY) / 300, 0);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
	cacheCtx.globalAlpha = 1;
}

//	卫星
export function renderSatellite(currentY: number, imgItem: ImgItem) {
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	const total = 48;
	//	特殊处理
	let i = (-(750 * 13 + currentY) / total * 1.5) | 0;
	i = getValueInRange(0, i, total - 1);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

//	星座
export function renderConstellation(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	沙漠
export function renderDesert(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	发射中心
export function renderLaunchCenter(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	雷锋
export function renderLeifeng(currentY: number, imgItem: ImgItem) {
	linearMove(currentY, imgItem);
}

//	军卡
export function renderCamion(currentY: number, imgItem: ImgItem) {
	//	动态缩放
	const scale = 1 + (12.25 * 750 + currentY) / canvasWidth / 10;
	imgItem.scale = scale;
	linearMove(currentY, imgItem);
}

//	报纸01
export function renderNewspaper_01(currentY: number, imgItem: ImgItem) {
	rotateOnly(currentY, imgItem);
}

//	报纸02
export function renderNewspaper_02(currentY: number, imgItem: ImgItem) {
	rotateOnly(currentY, imgItem);
}

//	year1979
export function renderYear1979(currentY: number, imgItem: ImgItem) {
	const {countingStartY} = imgItem;
	const {img, width, height, dx, dy, rw, rh, inCanvas} = getRenderBasicParams(currentY, imgItem);
	if (!inCanvas) {
		return;
	}
	const total = 63;
	//	特殊处理
	let i = (-(countingStartY + currentY) / total * 6) | 0;
	i = getValueInRange(0, i, total - 1);
	cacheCtx.drawImage(img,
		width * i / total, 0, width / total, height,
		dx, dy, canvasWidth * rw / total, canvasWidth * rh,
	);
}

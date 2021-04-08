import {canvasHeight, canvasWidth, mainRatio} from "@ts/data/device";
import {cacheCtx} from "@ts/data/canvas";
import {
	getInflectionRenderBasicParams,
	getRenderBasicParams,
	hasInflectionMove,
	linearMove,
	linearMoveWithTimeout,
} from "@ts/utils/utils";
import {ImgItem} from "@ts/interface/interface";

//	画背景
export function renderCover(currentY: number, imgItem: ImgItem) {
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
	i = Math.min(i, total - 1);
	i = Math.max(i, 0);
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


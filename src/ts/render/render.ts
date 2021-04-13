import {eventInfoSubject, progressSubject} from "@ts/data/observableData";
import {EventInfo} from "@ts/interface/interface";
import {$cacheCanvas, $canvas, $loading, $number, cacheCtx, ctx} from "@ts/data/canvas";
import {canvasHeight, canvasWidth} from "@ts/data/device";
import {imgMap} from "@ts/data/imagesData";
import {eventInfo} from "@ts/event/event";
import {timeout} from "@ts/data/timeout";
//	总渲染定时器延迟间隔
const {mainRenderTimeoutDelay} = timeout;
import {
	renderAirplane,
	renderAirplane_up,
	renderBlackCloud,
	renderCamion,
	renderCar, renderClock,
	renderCloud_01,
	renderCloud_02,
	renderCloud_03,
	renderCloud_04,
	renderCloud_05,
	renderCloud_06,
	renderCloud_sun,
	renderConstellation,
	renderCover,
	renderCranes,
	renderDesert,
	renderDoor,
	renderDragonfly,
	renderFlag,
	renderLaunchCenter,
	renderLeifeng,
	renderMushroom, renderNewspaper_01, renderNewspaper_02,
	renderPanzers,
	renderPeople,
	renderPigeon,
	renderPigeonSmall,
	renderPoet,
	renderRoad,
	renderSatellite,
	renderSmoke,
	renderSunShine,
	renderTiananmenjpg,
	renderTiananmenpng,
	renderWall,
	renderYear,
	renderYear1959, renderYear1979,
} from "@ts/render/renderList";
//	渲染函数
export const renderFn = () => {
	//	观察资源加载进度
	progressSubject.subscribe((progress: number) => {
		//	console.log('图片加载数量', progress);
		$number.innerText = `${progress}%`;
		//	如果加载完成
		if (progress === 100) {
			$loading.remove();
			window.requestAnimationFrame(() => {
				eventInfoSubject.next(eventInfo);
			});
		}
	});
	//	观察滚动事件
	eventInfoSubject.subscribe((_eventInfo: EventInfo) => {
		if (_eventInfo === null) {
			return;
		}
		mainRender(_eventInfo);
	});
};

//	主要方法
function mainRender(eventInfo: EventInfo) {
	const _mainRender = (timeout: number) => {
		const {currentY} = eventInfo;
		const y = -currentY / canvasWidth;
		const r = canvasHeight / canvasWidth;
		document.getElementById("devicePixelRatio").innerText = "currentY:" + currentY + "\nk * " + (y).toFixed(2) + "\n" + (r).toFixed(2) + "\n头部：" + (r + y).toFixed(2) + "\n";
		//		"底部" + (y + r + r).toFixed(2);
		const {width} = $cacheCanvas;
		$cacheCanvas.width = width;
		((run) => {
			if (!run) {
				return;
			}
			//	背景
			renderCover(currentY, imgMap.cover);
			/**
			 * section01*****************************************************************
			 * */
			//	钟表
			renderClock(currentY, imgMap.clock, timeout);
			//	黑色大云
			renderBlackCloud(currentY, imgMap.black_cloud);
			//	黑色小云
			renderCloud_03(currentY, imgMap.cloud_03);
			//	黄色大云
			renderCloud_02(currentY, imgMap.cloud_02);
			//	灰色大云
			renderCloud_06(currentY, imgMap.cloud_06);
			//	灰色大云
			renderCloud_01(currentY, imgMap.cloud_01);
			//	鸽子
			renderPigeon(currentY, imgMap.pigeon, timeout);
			//	灰色远处的大云
			renderCloud_04(currentY, imgMap.cloud_04);
			//	飞机
			renderAirplane(currentY, imgMap.airplane);
			//	近处的大灰云
			renderCloud_05(currentY, imgMap.cloud_05);
			//	年代
			renderYear(currentY, imgMap.year);
			//	小鸽子
			renderPigeonSmall(currentY, imgMap.pigeon_s, timeout);
			/**
			 * section02*****************************************************************
			 * */
			//	天安门jpg
			renderTiananmenjpg(currentY, imgMap.tiananmenjpg);
			//	太阳照射的云
			renderCloud_sun(currentY, imgMap.cloud_sun);
			//	向上飞的飞机
			renderAirplane_up(currentY, imgMap.airplane_up);
			//	天安门png
			renderTiananmenpng(currentY, imgMap.tiananmenpng);
			//	坦克
			renderPanzers(currentY, imgMap.panzers);
			renderPanzers(currentY, imgMap.panzers2);
			//	人群
			renderPeople(currentY, imgMap.people);
			//	国旗
			renderFlag(currentY, imgMap.flag);
			/**
			 * section03*****************************************************************
			 * */
			//	阳光
			renderSunShine(currentY, imgMap.sunshine);
			//	吊井
			renderCranes(currentY, imgMap.cranes, timeout);
			//	道路
			renderRoad(currentY, imgMap.road);
			//	卡车
			renderCar(currentY, imgMap.car, timeout);
			//	烟尘
			renderSmoke(currentY, imgMap.smoke, timeout);
			//	墙
			renderWall(currentY, imgMap.wall);
			//	门
			renderDoor(currentY, imgMap.door);
			//	year1959
			renderYear1959(currentY, imgMap.year1959);
			//	蜻蜓
			renderDragonfly(currentY, imgMap.dragonfly);
			/**
			 * section04*****************************************************************
			 * */
			//	诗人
			renderPoet(currentY, imgMap.poet);
			//	星座
			renderConstellation(currentY, imgMap.constellation);
			//	报纸01
			renderNewspaper_01(currentY, imgMap.newspaper_01);
			renderNewspaper_02(currentY, imgMap.newspaper_02);
			//	year1979
			renderYear1979(currentY, imgMap.year1979);
			//	卫星
			renderSatellite(currentY, imgMap.satellite);
			//	蘑菇云
			renderMushroom(currentY, imgMap.mushroom);
			//	沙漠
			renderDesert(currentY, imgMap.desert);
			//	发射中心
			renderLaunchCenter(currentY, imgMap.launchCenter);
			//	雷锋
			renderLeifeng(currentY, imgMap.leifeng);
			//	军卡
			renderCamion(currentY, imgMap.camion);
		})(true);
		$canvas.width = width;
		ctx.drawImage($cacheCanvas, 0, 0, canvasWidth, canvasHeight);
	};
	window.requestAnimationFrame(() => {
		_mainRender(timeout.mainRenderTimeout || 0);
	});
	if (timeout.mainRenderTimeout) {
		//	如果有定时器了，返回
		return;
	}
	const _timeout = () => {
		timeout.mainRenderTimeout = setTimeout(() => {
			timeout.mainRenderTimeout = null;
			_timeout();
		}, mainRenderTimeoutDelay);
		_mainRender(timeout.mainRenderTimeout);
	};
	_timeout();
}

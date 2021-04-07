import {eventInfoSubject, progressSubject} from "@ts/data/observableData";
import {EventInfo} from "@ts/interface/interface";
import {$cacheCanvas, $loading, $number, cacheCtx, ctx} from "@ts/data/canvas";
import {canvasHeight, canvasWidth} from "@ts/data/device";
import {imgMap} from "@ts/data/images";
import {eventInfo} from "@ts/event/event";
import {timeout} from "@ts/data/timeout";
//	总渲染定时器延迟间隔
const {mainRenderTimeoutDelay} = timeout;
import {
	renderAirplane, renderAirplane_up,
	renderCloud_01,
	renderCloud_02,
	renderCloud_03,
	renderCloud_04,
	renderCloud_05,
	renderCloud_06,
	renderCloud_sun,
	renderCover,
	renderFlag,
	renderPanzers,
	renderPeople,
	renderPigeon,
	renderPigeonSmall,
	renderTiananmenjpg,
	renderTiananmenpng,
	renderYear,
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
		document.getElementById("devicePixelRatio").innerText = "currentY:" + currentY.toFixed(2) + "\nk * " + (y).toFixed(2) + "\n" + (r).toFixed(2) + "\n头部：" + (r + y).toFixed(2) + "\n";
		//		"底部" + (y + r + r).toFixed(2);
		cacheCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		((run) => {
			if (!run) {
				return;
			}
			//	背景
			renderCover(currentY, imgMap.cover);
			//	section 01
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
			//	section 02
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
		})(true);
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
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

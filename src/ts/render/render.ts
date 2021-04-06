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
	renderAirplane,
	renderCloud_01,
	renderCloud_02,
	renderCloud_03,
	renderCloud_04,
	renderCloud_05,
	renderCover,
	renderPigeon,
	renderPigeonSmall,
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
		cacheCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		((run) => {
			if (!run) {
				return;
			}
			//	背景
			renderCover(currentY, imgMap.cover);
			return;
			//	云03
			renderCloud_03(currentY, imgMap.cloud_03);
			//	云02
			renderCloud_02(currentY, imgMap.cloud_02);
			//	云01
			renderCloud_01(currentY, imgMap.cloud_01);
			//	云04
			renderCloud_04(currentY, imgMap.cloud_04);
			//	飞机
			renderAirplane(currentY, imgMap.airplane);
			//	云05
			renderCloud_05(currentY, imgMap.cloud_05);
			//	鸽子
			renderPigeon(currentY, imgMap.pigeon, timeout);
			//	年代
			renderYear(currentY, imgMap.year);
			//	小鸽子
			renderPigeonSmall(currentY, imgMap.pigeon_s, timeout);
		})(true);
		//	小鸽子
		// renderPigeonSmall(currentY, imgMap.pigeon_s, timeout);
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

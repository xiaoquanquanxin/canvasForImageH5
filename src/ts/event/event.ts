import {$canvas, $loading} from "@ts/data/canvas";
import {eventInfoSubject, progressSubject} from "@ts/data/observableData";
import {EventInfo} from "@ts/interface/interface";
import {timeout} from "@ts/data/timeout";
import {playBgm} from "@ts/playAudio/audioList";
import {canvasWidth, mainRatio} from "@ts/data/device";
//	事件记录
export const eventInfo: EventInfo = {
	//	按下的位置
	touchStartY: 0,
	//	当前位置
	currentY: 0,
	//	按下的位置，计算惯性
	inertiaStartY: 0,
	//	本次移动的距离
	diffY: 0,
	//	本次移动中，上一次移动的距离
	prevDiffY: 0,
	//	移动过了
	isMoveEd: false,
};
//	事件初始化
export const eventInitFn = () => {
	//	手触摸
	$canvas.addEventListener("touchstart", (e: TouchEvent) => {
		const clientY = getClientY(e);
		const {currentY} = eventInfo;
		eventInfo.touchStartY = clientY - currentY;
		eventInfo.inertiaStartY = clientY;
		//	滑动惯性清零
		timeout.inertia = 0;
		//	上次、本次移动的距离
		eventInfo.prevDiffY = 0;
		eventInfo.diffY = 0;
	});
	//	手移动
	$canvas.addEventListener("touchmove", (e: TouchEvent) => {
		const clientY = getClientY(e);
		const {touchStartY, inertiaStartY, diffY, isMoveEd} = eventInfo;
		if (isMoveEd) {
			//	执行过移动的方法了
			return;
		}
		eventInfo.isMoveEd = true;
		eventInfo.currentY = getCurrentY(clientY, touchStartY);
		//	上次移动的距离
		eventInfo.prevDiffY = diffY;
		//	本次移动的距离
		eventInfo.diffY = (clientY - inertiaStartY) | 0;
		//	滑动惯性清零
		timeout.inertia = 0;
		// eventInfoSubject.next(eventInfo);
		// eventInfo.isMoveEd = false;
		window.requestAnimationFrame(() => {
			eventInfoSubject.next(eventInfo);
			//	可以执行下一次
			eventInfo.isMoveEd = false;
		});
	});
	//	手放开
	$canvas.addEventListener("touchend", (e: TouchEvent) => {
		const clientY = getClientY(e);
		const {diffY, prevDiffY, touchStartY} = eventInfo;
		eventInfo.currentY = getCurrentY(clientY, touchStartY);
		//	惯性的一些初始参数
		timeout.inertia = (diffY - prevDiffY) | 0;
		//	console.log(timeout.inertia);
		//	最后一次释放时的惯性
		inertiaFn();
	});
	// 阻止默认的处理方式(阻止下拉滑动的效果)
	document.body.addEventListener("touchmove", function (e) {
		e.preventDefault();
	}, {passive: false});
	//	点击loading页
	$loading.addEventListener("click", () => {
		if (progressSubject.value !== 100) {
			//	未加载完成
			return;
		}
		//	播放背景音乐
		playBgm();
	});
};

//	计算针对canvas的clientY
function getClientY(e: TouchEvent) {
	const {clientY} = e.changedTouches[0];
	//	最后一个除数是滑动比例【效率】
	return clientY * devicePixelRatio / mainRatio / 1;
}

//	惯性
function inertiaFn() {
	eventInfoSubject.next(eventInfo);
	window.requestAnimationFrame(() => {
		let {inertia} = timeout;
		let {currentY} = eventInfo;
		//	console.log(inertia);
		if (((inertia) | 0) === 0) {
			return;
		}
		//	每次减少的量
		const distance = 1 / devicePixelRatio;
		inertia += inertia > 0 ? -1 * distance : distance;
		currentY += inertia;
		if (currentY >= 0) {
			inertia = 0;
			currentY = 0;
		}
		eventInfo.currentY = currentY;
		timeout.inertia = inertia;
		//	console.log(inertia);
		inertiaFn();
	});
}

//	计算 currentY
function getCurrentY(clientY: number, touchStartY: number): number {
	return Math.min(clientY - touchStartY, 0) | 0;
}

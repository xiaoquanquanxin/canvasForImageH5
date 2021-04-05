import {$canvas} from "../data/canvas";
import {eventInfoSubject} from "../data/observableData";
import {EventInfo} from "@ts/interface/interface";
import {timeout} from "@ts/data/timeout";

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
};
//	事件初始化
export const eventInitFn = () => {
	//	手触摸
	$canvas.addEventListener('touchstart', (e: TouchEvent) => {
		const {clientY} = e.changedTouches[0];
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
	$canvas.addEventListener('touchmove', (e: TouchEvent) => {
		const {clientY} = e.changedTouches[0];
		const {touchStartY, inertiaStartY, diffY} = eventInfo;
		eventInfo.currentY = (Math.min(0, clientY - touchStartY)) | 0;
		//	上次移动的距离
		eventInfo.prevDiffY = diffY;
		//	本次移动的距离
		eventInfo.diffY = (clientY - inertiaStartY) | 0;
		//	滑动惯性清零
		timeout.inertia = 0;
		eventInfoSubject.next(eventInfo);
	});
	//	手放开
	$canvas.addEventListener('touchend', (e: TouchEvent) => {
		const {clientY} = e.changedTouches[0];
		const {diffY, prevDiffY, touchStartY} = eventInfo;
		eventInfo.currentY = Math.min(clientY - touchStartY, 0);
		timeout.inertia = (diffY - prevDiffY) * 1.6 | 0;
		//	console.log(timeout.inertia);
		//	最后一次释放时的惯性
		inertiaFn();
	});

	// 阻止默认的处理方式(阻止下拉滑动的效果)
	document.body.addEventListener('touchmove', function (e) {
		e.preventDefault();
	}, {passive: false});
};

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
		const distance = .4;
		inertia += inertia > 0 ? -1 * distance : distance;
		currentY += inertia;
		if (currentY >= 0) {
			inertia = 0;
		}
		eventInfo.currentY += inertia;
		timeout.inertia = inertia;
		//	console.log(inertia);
		inertiaFn();
	});
}

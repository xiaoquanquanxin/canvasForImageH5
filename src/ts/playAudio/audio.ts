import {eventInfoSubject} from "@ts/data/observableData";
import {EventInfo} from "@ts/interface/interface";
import {playBgm} from "@ts/playAudio/audioList";

export function playAudio() {
	//	察者事件
	eventInfoSubject.subscribe((_eventInfo: EventInfo) => {
		if (_eventInfo === null) {
			return;
		}
		mainPlayAudio(_eventInfo);
	});
}

//	音乐列表
function mainPlayAudio(eventInfo: EventInfo) {
	const {currentY} = eventInfo;
	playBgm();
}

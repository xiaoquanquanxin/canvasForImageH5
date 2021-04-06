import {renderFn} from "@ts/render/render";
import {playAudio} from "@ts/playAudio/audio";
import {mediaLoad} from "@ts/event/mediaLoad";
import {eventInitFn} from "@ts/event/event";

function main() {
	//	载入资源
	mediaLoad();
	//	绘制
	renderFn();
	//	注册事件
	eventInitFn();
	//	audio
	playAudio();
}

main();


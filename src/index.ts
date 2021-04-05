import {eventInitFn} from "@ts/event/event"
import {renderFn} from "@ts/render/render"
import {imgLoad} from "@ts/event/loadImage"

function main() {
	//	载入资源
	imgLoad();
	//	注册事件
	eventInitFn();
	//	绘制
	renderFn();
}


main();


//	加载的音频列表，map等
import bgm from "@audio/bgm.mp3";
import {AudioMap, AudioItem} from "@ts/interface/interface";
//	音频的map
export const audioMap: AudioMap = {
	bgm: {name: "bgm", src: bgm, audio: new Audio(), size: 1039639},
};
//	音频的list
export const audioList: Array<AudioItem> = (() => {
	const list = [];
	Reflect.ownKeys(audioMap).forEach((key: string) => {
		list.push(audioMap[key]);
	});
	return list;
})();
//	console.log(audioList);

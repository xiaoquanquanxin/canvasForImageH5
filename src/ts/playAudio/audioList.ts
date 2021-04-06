//	背景音乐
import {$audio, $loading} from "@ts/data/canvas";
import {audioMap} from "@ts/data/audios";

//	播放背景音乐
export function playBgm() {
	$audio.src = audioMap.bgm.src;
	//	播放
	$audio.play()
		.then(() => {
			//	删除loading
			$loading.remove();
		})
		.catch(err => {
			console.log(err);
		});
}



//	事件记录，暴露
import {BehaviorSubject} from "rxjs";

//	手触发事件
export const eventInfoSubject = new BehaviorSubject(null);

//	加载图片暴露，暴露百分比 分子
export const progressSubject = new BehaviorSubject(0);

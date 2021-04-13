//	定时器
export const timeout = {
	//	总渲染定时器
	mainRenderTimeout: null,
	//	总渲染定时器延迟间隔
	mainRenderTimeoutDelay: 60 * 4,
	//	滑动惯性定时器，原生requestAnimationFrame回调函数
	inertia: 0,
	//	惯性最大最小值
	maxInertia: 200,
	minInertia: -200,
};


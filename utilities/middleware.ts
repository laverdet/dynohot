export function makeSwappableMiddleware<
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	Args extends readonly any[],
	Middleware extends (...args: Args) => unknown,
>(
	initial: Middleware,
): [
    swap: (next: Middleware) => void,
    middleware: Middleware,
] {
	if (import.meta.hot) {
		let current = initial;
		const swap = (next: Middleware) => {
			current = next;
		};
		const middleware = ((...args: Args) => current(...args)) as Middleware;
		return [ swap, middleware ];
	} else {
		const swap = () => {
			throw new Error("Middleware is not swappable.");
		};
		return [ swap, initial ];
	}
}

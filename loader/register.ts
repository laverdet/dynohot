import type { LoaderParameters } from "./loader.js";
import { registerHooks } from "node:module";
import { initialize, load, resolve } from "./loader.js";
import * as port from "#port";

export interface Options {
	ignore?: RegExp;
	silent?: boolean;
}

/**
 * When manually registering the loader this function should be used instead of `registerHooks` from
 * "node:module". Or just `--import dynohot` on the command line.
 */
export function register(options: Options): void {
	initialize({
		...options,
		port: port.port1,
	} satisfies LoaderParameters);
	registerHooks({ load, resolve });
}

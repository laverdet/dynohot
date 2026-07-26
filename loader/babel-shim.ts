import type { types as t } from "@babel/core";
import { Hub, NodePath } from "@babel/traverse";

/** @internal */
export function makeRootPath(file: t.File) {
	const hub = new Hub();
	const path = NodePath.get({
		hub,
		parentPath: null,
		parent: file,
		container: file,
		key: "program",
	}) as NodePath<t.Program>;
	path.setContext();
	return path;
}

/** @internal */
export { default as generate } from "@babel/generator";

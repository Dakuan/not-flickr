import { Actions } from "flummox";

export default class TagActions extends Actions {

	addTag(tag) {
		return tag;
	}

	removeTag(tag) {
		return tag;
	}

	update(key, value) {
		return {
			key: key,
			value: value
		};
	}
}

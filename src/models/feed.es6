/* eslint new-cap:0 */

import I from "immutable";
import R from "ramda";
import Item from "./item";

let Feed = I.Record({
	title: "",
	items: new I.List()
});

let buildItems = R.pipe(
	R.prop("items"),
	R.map(R.construct(Item)),
	I.List);

let feedFactory = (feed) => {
	return new Feed(feed).set("items", buildItems(feed));
};

export default Feed;
export { Feed, feedFactory };

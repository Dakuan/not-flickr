/* eslint no-eval:0, no-unused-vars:0 */

import request from "request";
import R from "ramda";
import fs from "fs";
import path from "path";

export default function(tags = []) {

  return new Promise((resolve, reject) => {
    // try {
    //   let data = fs.readFileSync(path.join(__dirname, "../../../example-data/index.json"), {encoding: "utf8"});
    //   resolve(JSON.parse(data));
    // } catch (e) {
    //   reject(e);
    // }
    request.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tags.join(",")}`, {
      json: true
    }, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      const jsonFlickrFeed = R.identity;
      // pretty sure I'm going to hell for this but...
      let feed = eval(body);
      resolve(feed);
    });
  });
}

import nock from "nock";
import supertest from "supertest";
import chai from "chai";
import app from "../../src/server/app";
import fs from "fs";
import path from "path";

let expect = chai.expect;
let req = supertest(app);
let flickr = nock("https://api.flickr.com");

describe("/api", () => {

  describe("GET /feed", () => {
  	beforeEach(() => {
  		flickr.get("/services/feeds/photos_public.gne?format=json&tags=")
  		.reply(200, fs.readFileSync(path.join(__dirname, "../../example-data/index.txt")))
  	});

    it("should return a 200", (done) => {
      req.get('/api/feed')
        .expect(200, done)
    });

    it("should return valid json", (done) => {
      req.get("/api/feed")
        .end((err, res, body) => {
          expect(res.body.title).to.eq("Uploads from everyone");
          done();
        });
    });
  });
});

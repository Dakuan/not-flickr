import nock from "nock";
import supertest from "supertest";
import chai from "chai";
import fs from "fs";
import path from "path";
import cheerio from "cheerio";
import app from "../../src/server/app";

let expect = chai.expect;
let req = supertest(app);
let flickr = nock("https://api.flickr.com");

describe("app", () => {
  describe("GET /", () => {
    beforeEach(() => {
      flickr.get("/services/feeds/photos_public.gne?format=json&tags=")
      .reply(200, fs.readFileSync(path.join(__dirname, "../../example-data/index.txt")))
    });
    it("should return a 200", (done) => {
      req.get("/")
        .expect(200, done);
    });
    it("should render the things on the server", (done) => {
      req.get("/")
        .end((err, response) => {
          if(err) {
            throw err;
          }
          let $page = cheerio.load(response.text);
          expect($page("h2").text()).to.eq("Uploads from everyone");
          expect($page(".flickr-item").length).to.eq(20);
          done();
        });
    });
  });
});

import chai from "chai";
import spies from "chai-spies";
import * as TestUtils from "flummox/test-utils"
import FeedStore from "../../../../src/flux/stores/feed-store";

const expect = chai.expect;
chai.use(spies);

let mockActions = {
  fetchFeed: chai.spy()
};

let mockFlux = {
  getActions() {
      return mockActions
    },
    getActionIds() {
      return {
        fetchFeed: "fetchFeed"
      };
    }
};

let subject;

describe("FeedStore", () => {

  describe("#constructor", () => {
    beforeEach(() => {
      subject = new FeedStore(mockFlux);
    });
    it("should set loading to false", () => {
      expect(subject.state.get("loading")).to.be.false;
    });
    it("should register the fetchFeed action", () => {
      expect(subject._handlers.fetchFeed).to.be.defined;
    });
  });

  describe("#fetch", () => {
    describe("when there is a feed in the store", () => {
      beforeEach(() => {
        subject = new FeedStore(mockFlux);
        subject.state = subject.state.set("feed[]", "a_feed");
      });
      it("should return that feed", () => {
        expect(subject.fetch()).to.eq("rubbish");
      });
    });

    describe("when there is no feed in the store", () => {
      beforeEach(() => {
        subject = new FeedStore(mockFlux);
      });
      it("should fetch the feed", () => {
        subject.fetch();
        expect(mockActions.fetchFeed).to.have.been.called();
      });
      afterEach(() => {
        mockActions.fetchFeed = chai.spy();
      });
    });
  });

  describe("when fetchFeedBegin is handled", () => {
    it("should set loading to true", () => {
      subject = new FeedStore(mockFlux);
      TestUtils.simulateActionAsync(subject, "fetchFeed", "begin");
      expect(subject.state.get("loading")).to.be.true;
    });
  });

  describe("when fetchFeedSuccess is handled", () => {
    beforeEach(() => {
      subject = new FeedStore(mockFlux);
      TestUtils.simulateActionAsync(subject, "fetchFeed", "success", {
        feed: {
          title: "Feed",
          items: []
        },
        tags: []
      });
    });
    it("should set the feed", () => {
      expect(subject.getFeed().title).to.eq("Feed");
    });
    it("should set loading to false", () => {
      expect(subject.state.get("loading")).to.be.false;
    });
  });
});

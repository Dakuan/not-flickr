import chai from "chai";
import spies from "chai-spies";
import * as TestUtils from "flummox/test-utils"
import TagStore from "../../../../src/flux/stores/tag-store";

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
        addTag: "addTag",
        removeTag: "removeTag",
        "update": "update"
      };
    }
};

let subject;

describe("TagStore", () => {
  beforeEach(() => {
    subject = new TagStore(mockFlux);
  });
  describe("#constructor", () => {
    it("should set the tags to be an empty list", () => {
      expect(subject.state.get("tags").count()).to.eq(0);
    });
    it("should set new to be an empty string", () => {
      expect(subject.state.get("new")).to.eq("");
    });
  });
  describe("when the addTag action is handled", () => {
    it("should add the tag to the list", () => {
      TestUtils.simulateAction(subject, "addTag", "one");
      expect(subject.state.get("tags").count()).to.eq(1);
    });
  });
  describe("when the removeTag action is handled", () => {
    it("should remove the tag from the list", () => {
      TestUtils.simulateAction(subject, "addTag", "one");
      TestUtils.simulateAction(subject, "addTag", "two");
      TestUtils.simulateAction(subject, "removeTag", "two");
      expect(subject.state.get("tags").count()).to.eq(1);
    });
  });
  describe("when the updateTag action is handled", () => {
    it("should update the tag", () => {
      TestUtils.simulateAction(subject, "update", {
        key: "new",
        value: "test"
      });
      expect(subject.state.get("new")).to.eq("test");
    });
  });
});

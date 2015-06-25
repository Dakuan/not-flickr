require('../setup');
import TagInput from "../../../src/ui/tag-input";
import chai from "chai";
import React from "react/addons";
import spies from "chai-spies";

chai.use(spies);
let expect = chai.expect;
let TestUtils = React.addons.TestUtils;
let subject;

describe("TagInput", () => {

  beforeEach((done) => {
    getRenderedRouterComponent(TagInput, {
      tags: ["one", "two"],
      onAddTag: chai.spy(),
      onRemoveTag: chai.spy(),
      onChange: chai.spy()
    }).then((comp) => {
      subject = comp;
      subject.transitionTo = chai.spy();
      done();
    });
  });

  describe("when there are tags", () => {
    it("should render the tags", () => {
      let tags = TestUtils.scryRenderedDOMComponentsWithClass(subject, "tag");
      expect(tags.length).to.eq(2);
    });
  });

  describe("when the form is submitted", () => {
    beforeEach(() => {
      let form = TestUtils.findRenderedDOMComponentWithTag(subject, "form");
      React.addons.TestUtils.Simulate.submit(form);
    });
    it("should call the addTag callback", () => {
      expect(subject.props.onAddTag).to.have.been.called();
    });
    it("should transition", function() {
      expect(subject.transitionTo).to.have.been.called();
    });
  });

  describe("when the remove tag button is clicked", () => {
    beforeEach((done) => {
      let tag = TestUtils.scryRenderedDOMComponentsWithClass(subject, "tag")[0];
      let removeButton = TestUtils.findRenderedDOMComponentWithTag(tag, "a");
      React.addons.TestUtils.Simulate.click(removeButton);
      setTimeout(() => {
        done();
      }, 1000);
    });
    it("should call the removeTag callback", () => {
      expect(subject.props.onRemoveTag).to.have.been.called();
    });
    it("should transition", () => {
      expect(subject.transitionTo).to.have.been.called();
    });
  });

  describe("when the feed is loading ", () => {
    beforeEach((done) => {
      getRenderedRouterComponent(TagInput, {
        tags: ["one", "two"],
        loading: true,
        onAddTag: chai.spy(),
        onRemoveTag: chai.spy(),
        onChange: chai.spy()
      }).then((comp) => {
        subject = comp;
        subject.transitionTo = chai.spy();
        done();
      });
    });
    it("should disable the input", () => {
      let input = TestUtils.findRenderedDOMComponentWithClass(subject, "tag-field");
      expect(input.getDOMNode().className).to.match(/disabled/);
    });
    it("should disable the remove tag buttons", () => {
      let tag = TestUtils.scryRenderedDOMComponentsWithClass(subject, "tag")[0];
      let removeButton = TestUtils.findRenderedDOMComponentWithTag(tag, "a");
      expect(removeButton.getDOMNode().className).to.match(/disabled/);
    });
  });

  describe("when the input changes", () => {
    beforeEach((done) => {
      getRenderedRouterComponent(TagInput, {
        tags: ["one", "two"],
        loading: true,
        onAddTag: chai.spy(),
        onRemoveTag: chai.spy(),
        onChange: chai.spy()
      }).then((comp) => {
        subject = comp;
        subject.transitionTo = chai.spy();
        done();
      });
    });
    it("should call the updateTag callback", () => {
      let input = TestUtils.findRenderedDOMComponentWithClass(subject, "tag-field");
      React.addons.TestUtils.Simulate.change(input);
      expect(subject.props.onChange).to.have.been.called();
    });
  });
});

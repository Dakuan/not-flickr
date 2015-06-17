require('../setup');
import Feed from "../../../src/ui/feed";
import chai from "chai";
import React from "react/addons";

let expect = chai.expect;
let TestUtils = React.addons.TestUtils;
let subject;

describe("Feed", () => {
  describe("when the data is loading", () => {
    beforeEach(() => {
      subject = TestUtils.renderIntoDocument(<Feed loading={true}/>);
    });
    it("should display the loading indicator", () => {
    	let header = TestUtils.findRenderedDOMComponentWithTag(subject, 'h1');
    	expect(header.getDOMNode().textContent).to.equal('Loading');
    });
  });
  describe("when the data is present", () => {
  	let feed;
  	beforeEach(() => {
  		feed = {
  			title: "Test Feed",
  			items: [{
  				media: {
  					m: "http://www.image.com/image.png"
  				}
  			}, {
  				media: {
  					m: "http://www.image.com/image.png"
  				}
  			}]
  		}
      subject = TestUtils.renderIntoDocument(<Feed loading={false} feed={feed} />);
    });
  	it("should render the feed title", () => {
  		let header = TestUtils.findRenderedDOMComponentWithTag(subject, 'h1');
    	expect(header.getDOMNode().textContent).to.equal(feed.title);
  	});
    it("should render the items", () => {
    	let items = TestUtils.findRenderedDOMComponentWithClass(subject, 'row');
    	expect(items.getDOMNode().children.length).to.eq(feed.items.length);
    });
  });
});

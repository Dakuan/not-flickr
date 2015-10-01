var jsdom = require('jsdom');
// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};

// setup fake router stuff, yes this is balls.
var Router = require('react-router'),
    Route = Router.Route,
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    appRoutes = require('../../src/ui/routes'),
    TestLocation = require('react-router/lib/locations/TestLocation');

var TestContext = {
  getRouterComponent: function(targetComponent, args) {
    var component,
        div = document.createElement('div'),
        routes = [
          React.createFactory(Route)({
            name: 'test',
            handler: targetComponent
          })
        ];

    var testRoutes = routes.concat(appRoutes);

    return new Promise(function(resolve, reject) {
      Router.run(testRoutes, new TestLocation(['/test']), function(Handler) {
        var mainComponent = React.render(React.createFactory(Handler)(args), div);
        component = TestUtils.findRenderedComponentWithType(mainComponent, targetComponent);
        resolve(component);
      });
    });
  }
};

global.getRenderedRouterComponent = TestContext.getRouterComponent;

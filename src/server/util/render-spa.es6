var React = require('react'),
    Flux = require('../../flux/flux').AppFlux,
    App = require('../../ui/messages-index.jsx');


export function renderSpa(res, data) {
    var fx = new Flux();
    fx.deserialize(JSON.stringify(data))
    var f = React.createFactory(App);

    var s = React.renderToString(f({
        flux: fx
    }));

    res.render('index', {
        app: s,
        data: JSON.stringify(data)
    });
}

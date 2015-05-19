import { AppFlux } from '../flux/flux';
import FluxComponent from 'flummox/component';
import App from '../ui/messages-index';
import React from 'react';

let data = document.getElementById('payload').value;

document.addEventListener('DOMContentLoaded', function() {
	const flux = new AppFlux(data);
	flux.deserialize(data);
	React.render(<App flux={flux} />, document.getElementById('app'));
});

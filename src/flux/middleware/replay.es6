import io from "socket.io-client";
import qs from "query-string";

export default (flux) => {
	let query = qs.parse(window.location.search);
	let listen = qs.parse(window.location.search).listenTo;
	let socket = io();
	socket.on('connect', () => {
		if(query.debug) {
			flux.getActions("sockets").setSocketId(socket.id);
		}
	});
  socket.on('replay', (payload) => {
  	if(listen === payload.socket) {
  		flux.dispatcher.dispatch(payload.action);
  	}
  });
	return (action) => {
		socket.emit('action', action);
	};
};

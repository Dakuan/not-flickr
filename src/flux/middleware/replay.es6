import io from "socket.io-client";

export default (flux) => {
  var listenTo;
  let socketsStore = flux.getStore("sockets");
  socketsStore.on("change", () => {
    listenTo = socketsStore.state.get("listeningSocketId");
  });
  let socket = io();
  socket.on("connect", () => {
    flux.getActions("sockets").setBroadcastSocketId(socket.id);
  });
  socket.on("replay", (payload) => {
    if (listenTo === payload.socket) {
      flux.getActions("replay").addReplayAction(payload.action);
      flux.dispatcher.dispatch(payload.action);
    }
  });
  return (action) => {
    socket.emit("action", action);
  };
};

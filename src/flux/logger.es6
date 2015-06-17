export default (action) => {
	if (__DEV__) {
		const actionId = action.actionId.split("-")[1];
		console.log(`Flux dispatched action ${actionId}`);
	}
};

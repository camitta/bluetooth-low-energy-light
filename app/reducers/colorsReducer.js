export default (state = '', action) => {
	switch (action.type) {
		case 'CHANGE_COLOR':
			return action.payload;
		default:
			return state;
	}
};

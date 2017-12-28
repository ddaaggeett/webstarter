const initialState = {}

export default function restaurant(state = initialState, action) {
	switch(action.type) {

		case 'SOME_ACTION':

			return {
				...state
			}

		default:
			return state

	}
}

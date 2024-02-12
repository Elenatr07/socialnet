import { getAuthUserDataThunk } from "./authReducer";

const INITIALIZING_SUCCESSED = 'app/INITIALIZING_SUCCESSED';
let initialState = {
	initialized: false,
	globalError: null
};

const appReducer = (state = initialState, action) => {
	switch (action.type){
		case INITIALIZING_SUCCESSED: {
			return { ...state, initialized: true }
		}
		default:
			return state;
		}
}

//action creators
export const initializingSuccessed = () => ( { type: INITIALIZING_SUCCESSED })
//thunk creators
export const initializeApp = () => async dispatch => {
	let promise = []
	promise.push(dispatch(getAuthUserDataThunk()))
	await Promise.all(promise)
	dispatch(initializingSuccessed())
}
export default appReducer;
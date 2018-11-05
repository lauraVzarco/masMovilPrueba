import { createStore } from 'redux';

const initialState = { list: [], loading: false }
const reducer = (state = initialState, action) => {
    if (action.type === 'fetchMobilesSuccess') {
        return {
            ...state,
            list: action.payload,
            loading: false
        }
    }
    if (action.type === 'loading') {
        return {
            ...state,
            loading: true
        }
    }
    return state
}
const store = createStore(
    reducer
)

export default store;

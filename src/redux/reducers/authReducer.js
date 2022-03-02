import { REHYDRATE } from 'redux-persist'
import { toast } from '../../utils'
import types from '../actions/actionTypes'
import initialState from './initialStates'

const INITIAL_STATE = initialState.authReducer

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE: {
            return state
        }

        case types.SIGN_UP:
            console.log('action.payload: ', action.payload);
            let newUser = true
            state.users.map((val) => {
                if (action.payload.email == val.email) {
                    newUser = false
                }
                else {
                    newUser = true
                }
            })
            if (newUser) {
                return { ...state, users: [...state.users, { ...action.payload }], image: {} }
            }
            else {
                return { ...state }
            }
        case types.LOGOUT:
            console.log('redux logout');
            return { ...state, user: {}, image: {}, loggedIn: false }

        case types.LOGIN:
            console.log('action.payload: ', action.payload);
                return {...state, user: {...action.payload}, loggedIn: true}
                // toast('login unsuccessful');
                // return { ...state }


        // {...initialState}

        case types.SET_IMAGE:
            console.log('auth reducer image: ', action.payload)
            return { ...state, image: action.payload }

        case types.UPDATE_PROFILE:
            return { ...state }
        // return {...state, user: {...state.user, image: action.payload.image, first_name: action.payload.first_name, last_name: action.payload.last_name, address: action.payload.address}}

        case types.GET_PROFILE:
            return { ...state, user: action.payload, image: null }

        default:
            return state
    }
}
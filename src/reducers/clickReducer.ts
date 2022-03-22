import { CLICK_UPDATE_VALUE } from '../actions/actionTypes'

const initialState = {
  newValue: 'testando 123',
}

type actionType = {
  type: string
  newValue: string
}

export const clickReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      }
    default:
      return state
  }
}

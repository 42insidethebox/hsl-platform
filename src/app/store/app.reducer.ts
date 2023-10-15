import { Action } from '@ngrx/store';

export interface AppState {
  count: number;
}

const initialState: AppState = {
  count: 0,
};

export function appReducer(state = initialState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

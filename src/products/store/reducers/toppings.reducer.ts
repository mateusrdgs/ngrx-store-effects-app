import { Topping } from './../../models/topping.model';

import * as fromToppings from '../actions/toppings.action';

export interface ToppingsState {
  loading: boolean;
  loaded: boolean;
  entities: {
    [id: number]: Topping
  },
  selectedToppings: number[]
}

export const initialState: ToppingsState = {
  loading: false,
  loaded: false,
  entities: {},
  selectedToppings: []
}

export function reducer(
  state: ToppingsState = initialState,
  action: fromToppings.ToppingsAction
) {
  switch(action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        {
          ...state.entities
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      }
    }
  }
  return state;
}

export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;

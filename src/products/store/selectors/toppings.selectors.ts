import { createSelector } from '@ngrx/store';

import { Topping } from './../../models/topping.model';

import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingsLoading = createSelector(getToppingsState, fromToppings.getToppingsLoading);
export const getToppingsLoaded = createSelector(getToppingsState, fromToppings.getToppingsLoaded);
export const getToppingsEntities = createSelector(getToppingsState, fromToppings.getToppingsEntities);
export const getSelectedToppings = createSelector(getToppingsState, fromToppings.getSelectedToppings);
export const getAllToppings = createSelector(getToppingsEntities, (entities) => {
  return Object.keys(entities).map((key) => entities[parseInt(key, 10)]);
});

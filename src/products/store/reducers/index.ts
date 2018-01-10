import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

// pizzas state
export const getPizzasState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getPizzasLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
export const getPizzasLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoaded);
export const getPizzasEntities = createSelector(getPizzasState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(key => entities[parseInt(key, 10)]);
});

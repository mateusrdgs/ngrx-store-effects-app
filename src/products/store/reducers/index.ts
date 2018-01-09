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
export const getAllLoading = createSelector(getPizzasState, fromPizzas.getPizzasLoading);
export const getAllLoaded = createSelector(getPizzasState, fromPizzas.getPizzasLoaded);
export const getAllPizzas = createSelector(getPizzasState, fromPizzas.getPizzas);


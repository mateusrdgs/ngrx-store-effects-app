import { initialState } from './toppings.reducer';
import * as fromPizzas from './pizzas.reducer';
import * as fromActions from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

describe('PizzasReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromPizzas;
      const action = {} as any;
      const state = fromPizzas.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });
  describe('LOAD_PIZZA action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromPizzas;
      const action = new fromActions.LoadPizzas();
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loaded).toBeFalsy();
      expect(state.loading).toBeTruthy();
    });
  });
  describe('LOAD_PIZZA_FAIL action', () => {
    it('should set loading and loaded to false', () => {
      const { initialState } = fromPizzas;
      const payload = { message: 'An error occurred when the system was loading the pizzas' }
      const action = new fromActions.LoadPizzasFail(payload);
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities).toEqual({});
      expect(state.loaded).toBeFalsy();
      expect(state.loading).toBeFalsy();
    })
  });
  describe('LOAD_PIZZA_SUCCESS action', () => {
    it('should map an array to entities', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
        { id: 3, name: 'Pizza #3', toppings: [] },
      ];
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
        3: pizzas[2],
      };
      const { initialState } = fromPizzas;
      const action = new fromActions.LoadPizzasSuccess(pizzas);
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
      expect(state.loaded).toBeTruthy();
      expect(state.loading).toBeFalsy();
    });
  });
  describe('CREATE_PIZZA_SUCCESS action', () => {
    it('should create a new pizza', () => {
      const { initialState } = fromPizzas;
      const payload: Pizza = { id: 1, name: 'Pizza #1', toppings: [] };
      const entities: { [id: number]: Pizza } = { [payload.id]: payload }
      const action = new fromActions.CreatePizzaSuccess(payload);
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
    });
  });
  describe('UPDATE_PIZZA_SUCCESS action', () => {
    it('should correctly update the name of an existing pizza', () => {
      const { initialState } = fromPizzas;
      const payload: Pizza = { id: 1, name: 'Pizza #0', toppings: [] };
      const action = new fromActions.CreatePizzaSuccess(payload);
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities[payload.id].id).toEqual(1);
      expect(state.entities[payload.id].name).toEqual('Pizza #0');
      const updatedPayload: Pizza = { id: 1, name: 'Pizza #1', toppings: [] };
      const updatedAction = new fromActions.UpdatePizzaSuccess(updatedPayload);
      const updatedState = fromPizzas.reducer(state, updatedAction);
      expect(updatedState.entities[payload.id].id).toEqual(state.entities[payload.id].id);
      expect(updatedState.entities[payload.id].name).toEqual('Pizza #1');
    });
  });
  describe('REMOVE_PIZZA_SUCCESS action', () => {
    it('should correctly remove a pizza', () => {
      const { initialState } = fromPizzas;
      const payload: Pizza = { id: 1, name: 'Pizza #1', toppings: [] };
      const entities: { [id: number]: Pizza } = { [payload.id]: payload };
      const action = new fromActions.CreatePizzaSuccess(payload);
      const state = fromPizzas.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
      const updatedAction = new fromActions.RemovePizzaSuccess(payload);
      const updatedState = fromPizzas.reducer(state, updatedAction);
      expect(updatedState.entities).toEqual({});
    });
  });
});
describe('PizzasReducer Selectors', () => {
  describe('getPizzasEntities', () => {
    it('should return .entities', () => {
      const entities: { [id: number]: Pizza } = {
        1: { id: 1, name: 'Pizza #1', toppings: [] },
        2: { id: 2, name: 'Pizza #1', toppings: [] }
      };
      const { initialState } = fromPizzas;
      const previousState = { ...initialState, entities };
      const slice = fromPizzas.getPizzasEntities(previousState);
      expect(slice).toEqual(entities);
    });
  });
  describe('getPizzasLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromPizzas;
      const action = new fromActions.LoadPizzas();
      const state = fromPizzas.reducer(initialState, action);
      const loading = fromPizzas.getPizzasLoading(state);
      const loaded = fromPizzas.getPizzasLoaded(state);
      expect(loading).toBeTruthy();
      expect(loaded).toBeFalsy();
    });
  });
  describe('getPizzasLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromPizzas;
      const payload: Pizza[] = [{ id: 1, name: 'Pizza #1', toppings: [] }];
      const action = new fromActions.LoadPizzasSuccess(payload);
      const state = fromPizzas.reducer(initialState, action);
      const loading = fromPizzas.getPizzasLoading(state);
      const loaded = fromPizzas.getPizzasLoaded(state);
      expect(loading).toBeFalsy();
      expect(loaded).toBeTruthy();
    });
  });
});

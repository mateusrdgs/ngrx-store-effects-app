import { Injectable } from '@angular/core';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';

import * as pizzasActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

import { Pizza } from 'src/products/models/pizza.model';

@Injectable()
export class PizzasEffects {

  constructor(
    private _actions$: Actions,
    private _pizzasService: fromServices.PizzasService
  ) {

  }

  @Effect()
  loadPizzas$ = this._actions$.ofType(pizzasActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this._pizzasService.getPizzas().pipe(
          map((pizzas) => new pizzasActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
        );
      })
    );

  @Effect()
  createPizza$ = this._actions$.ofType(pizzasActions.CREATE_PIZZA)
    .pipe(
      map((action: pizzasActions.CreatePizza) => action.payload),
      switchMap((pizza: Pizza) => {
        return this._pizzasService
          .createPizza(pizza)
            .pipe(
              map((pizza: Pizza) => {
                return new pizzasActions.CreatePizzaSuccess(pizza);
              }),
              catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
            );
      })
    );

  @Effect()
  updatePizza$ = this._actions$.ofType(pizzasActions.UPDATE_PIZZA)
    .pipe(
      map((action: pizzasActions.UpdatePizza) => action.payload),
      switchMap((pizza: Pizza) => {
        return this._pizzasService
          .updatePizza(pizza)
            .pipe(
              map((pizza: Pizza) => {
                return new pizzasActions.UpdatePizzaSuccess(pizza)
              }),
              catchError(error => of(new pizzasActions.UpdatePizzaFail(error)))
            );
      })
    );

  @Effect()
  removePizza$ = this._actions$.ofType(pizzasActions.REMOVE_PIZZA)
    .pipe(
      map((action: pizzasActions.RemovePizza) => action.payload),
      switchMap((pizza: Pizza) => {
        return this._pizzasService
          .removePizza(pizza)
            .pipe(
              map(() => {
                return new pizzasActions.RemovePizzaSuccess(pizza)
              }),
              catchError(error => of(new pizzasActions.RemovePizzaFail(error)))
            );
      })
    );
}

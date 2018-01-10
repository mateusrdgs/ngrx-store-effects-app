import { Injectable } from '@angular/core';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';

import * as pizzasActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

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

}

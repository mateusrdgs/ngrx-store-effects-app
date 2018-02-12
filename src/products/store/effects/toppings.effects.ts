import { Injectable } from '@angular/core';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Actions, Effect } from '@ngrx/effects';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services';

@Injectable()
export class ToppingsEffects {

  constructor(
    private _actions$: Actions,
    private _toppingsService: fromServices.ToppingsService
  ) {

  }

  @Effect()
  loadToppings$ = this._actions$.ofType(toppingsActions.LOAD_TOPPINGS)
    .pipe(
      switchMap(() => {
        return this._toppingsService.getToppings().pipe(
          map((toppings) => new toppingsActions.LoadToppingsSuccess(toppings)),
          catchError(error => of(new toppingsActions.LoadToppingsFail(error)))
        );
      })
    );

}

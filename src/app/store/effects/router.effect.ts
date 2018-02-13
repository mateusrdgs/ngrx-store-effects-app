import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Actions, Effect } from '@ngrx/effects';

import * as routerActions from '../actions/router.action';

import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {

  constructor(
    private _actions$: Actions,
    private _router: Router,
    private _location: Location
  ) {

  }

  @Effect({ dispatch: false })
  navigate$ = this._actions$
    .ofType(routerActions.GO)
    .pipe(
      map((action: routerActions.Go) => action.payload),
      tap(({ path, query: queryParams, extras }) => {
        this._router.navigate(path, { queryParams, ...extras });
      })
    )

  @Effect({ dispatch: false })
  navigateBack$ = this._actions$
    .ofType(routerActions.BACK)
    .pipe(tap(() => this._location.back()));

  @Effect({ dispatch: false })
  navigateForward$ = this._actions$
    .ofType(routerActions.BACK)
    .pipe(tap(() => this._location.forward()));

}

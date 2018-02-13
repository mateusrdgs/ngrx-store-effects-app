import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { filter, map, tap, take, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzaExistsGuard implements CanActivate {

  constructor(
    private _store: Store<fromStore.ProductsState>
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.pizzaId, 10);
        return this.hasPizza(id);
      })
    )
  }

  hasPizza(id: number): Observable<boolean> {
    return this._store
      .select(fromStore.getPizzasEntities)
      .pipe(
        map((entities: { [key: number]: Pizza }) => {
          return !!entities[id];
        }),
        take(1)
      )
  }

  checkStore(): Observable<boolean> {
    return this._store.select(fromStore.getPizzasLoaded)
      .pipe(
        tap(loaded => {
          if(!loaded) {
            this._store.dispatch(new fromStore.LoadPizzas());
          }
        }),
        filter((loaded: boolean) => loaded),
        take(1)
      );
  }
}


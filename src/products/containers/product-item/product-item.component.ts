import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators/tap';

import * as fromStore from '../../store';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualise$: Observable<Pizza>;

  constructor(
    private _store: Store<fromStore.ProductsState>
  ) {}

  ngOnInit() {
    this.pizza$ = this._store.select<any>(fromStore.getSelectedPizza)
      .pipe(
        tap((pizza: Pizza = null) => {
          const pizzaExists = !!(pizza && pizza.id);
          const toppings = pizzaExists ? pizza.toppings.map((topping: Topping) => topping.id) : [];
          this._store.dispatch(
            new fromStore.VisualiseToppings(toppings)
          );
        })
      );
    this.toppings$ = this._store.select<any>(fromStore.getAllToppings);
    this.visualise$ = this._store.select<any>(fromStore.getPizzaVisualised);
  }

  onSelect(event: number[]) {
    this._store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onCreate(event: Pizza) {
    this._store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this._store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this._store.dispatch(new fromStore.RemovePizza(event));
    }
  }
}

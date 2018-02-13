import * as fromToppings from './toppings.action';

describe('Toppings Action', () => {
  describe('Load Toppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create a new load toppings action', () => {
        const action = new fromToppings.LoadToppings();
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });
    describe('LoadToppingsFail', () => {
      it('should create a new load toppings fail action', () => {
        const payload = { message: 'An error occurred when the system was loading the toppings' }
        const action = new fromToppings.LoadToppingsFail(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });
    describe('LoadToppingsSuccess', () => {
      const payload = [
        {
          "id": 1,
          "name": "anchovy"
        },
        {
          "id": 2,
          "name": "bacon"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 5,
          "name": "mozzarella"
        },
        {
          "id": 6,
          "name": "mushroom"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 8,
          "name": "onion"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 11,
          "name": "sweetcorn"
        },
        {
          "id": 12,
          "name": "tomato"
        }
      ];
      it('should create a new load toppings success action', () => {
        const action = new fromToppings.LoadToppingsSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });
  describe('Visualise Toppings Actions', () => {
    const payload = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    it('should create a new visualise toppings action', () => {
      const action = new fromToppings.VisualiseToppings(payload);
      expect({ ...action }).toEqual({
        type: fromToppings.VISUALISE_TOPPINGS,
        payload
      });
    });
  });
});

import * as fromPizzas from './pizzas.action';

describe('Pizzas action', () => {
  describe('Load Pizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create a new load pizzas action', () => {
        const action = new fromPizzas.LoadPizzas();
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      });
    });
    describe('LoadPizzasFail', () => {
      it('should create a new load pizzas fail action', () => {
        const payload = { message: 'An error occurred when the system was loading the pizzas' };
        const action = new fromPizzas.LoadPizzasFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      });
    });
    describe('LoadPizzasSuccess', () => {
      it('should create a new load pizzas success action', () => {
        const payload = [
          {
            "name": "Blazin' Inferno",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              },
              {
                "id": 9,
                "name": "pepper"
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
                "id": 7,
                "name": "olive"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 1
          },
          {
            "name": "Seaside Surfin'",
            "toppings": [
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 7,
                "name": "olive"
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
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 8,
                "name": "onion"
              },
              {
                "id": 11,
                "name": "sweetcorn"
              },
              {
                "id": 9,
                "name": "pepper"
              },
              {
                "id": 5,
                "name": "mozzarella"
              }
            ],
            "id": 2
          },
          {
            "name": "Plain Ol' Pepperoni",
            "toppings": [
              {
                "id": 10,
                "name": "pepperoni"
              }
            ],
            "id": 3
          },
          {
            "name": "Big Al'",
            "toppings": [
              {
                "id": 1,
                "name": "anchovy"
              },
              {
                "id": 2,
                "name": "bacon"
              },
              {
                "id": 4,
                "name": "chili"
              },
              {
                "id": 3,
                "name": "basil"
              },
              {
                "id": 5,
                "name": "mozzarella"
              },
              {
                "id": 7,
                "name": "olive"
              },
              {
                "id": 6,
                "name": "mushroom"
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
            ],
            "id": 4
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });
      });
    });
  });
  describe('Create Pizzas Actions', () => {
    const payload = {
      name: 'Pizza #2',
      toppings: [
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
      ]
    };
    describe('CreatePizza', () => {
      it('should create a new create pizza action',  () => {
        const action = new fromPizzas.CreatePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA,
          payload
        });
      });
    });
    describe('CreatePizzaFail', () => {
      it('should create a new create pizza error action', () => {
        const payload = { message: 'An error occurred when the system was creating a pizza' };
        const action = new fromPizzas.CreatePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_FAIL,
          payload
        });
      });
    });
    describe('CreatePizzaSuccess', () => {
      it('should create a new create pizza success action', () => {
        const action = new fromPizzas.CreatePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.CREATE_PIZZA_SUCCESS,
          payload
        });
      });
    });
  });
  describe('Update Pizzas Actions', () => {
    const payload = {
      name: 'Pizza #2',
      toppings: [
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
      ]
    };
    describe('UpdatePizza', () => {
      it('should create a new update pizza action', () => {
        const action = new fromPizzas.UpdatePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA,
          payload
        });
      });
    });
    describe('UpdatePizzaFail', () => {
      it('should create a new update pizza fail action', () => {
        const payload = { message: 'A error occurred when the system was updating an pizza' };
        const action = new fromPizzas.UpdatePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_FAIL,
          payload
        });
      });
    });
    describe('UpdatePizzaSuccess', () => {
      it('should create a new update pizza success action', () => {
        const action = new fromPizzas.UpdatePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.UPDATE_PIZZA_SUCCESS,
          payload
        });
      });
    });
  });
  describe('Remove Pizzas Actions', () => {
    const payload = {
      name: 'Pizza #2',
      toppings: [
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
      ]
    };
    describe('RemovePizza', () => {
      it('should create a new remove pizza action', () => {
        const action = new fromPizzas.RemovePizza(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA,
          payload
        });
      });
    });
    describe('RemovePizzaFail', () => {
      it('should create a new remove pizza fail action', () => {
        const payload = { message: 'A error occurred when the system was removing an pizza' };
        const action = new fromPizzas.RemovePizzaFail(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA_FAIL,
          payload
        });
      });
    });
    describe('RemovePizzaSuccess', () => {
      it('should create a new remove pizza success action', () => {
        const action = new fromPizzas.RemovePizzaSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromPizzas.REMOVE_PIZZA_SUCCESS,
          payload
        });
      });
    });
  });
});

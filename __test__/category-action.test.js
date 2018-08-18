import { createCategory, updateCategory } from "../src/components/action/category-action.js";

describe ('actions', () => {

  it('should create an action', () => {
    let category = {name: 'Rent', budget: 1500};
    let action = createCategory(category);

    expect(action.type).toBe('Category/ADD');
    expect(action.payload.name).toBe('Rent');
    expect(action.payload.budget).toBe(1500);
  });

  it('should create an update action', () => {
    let category = {name: 'hi'};
    let action = updateCategory(category);

    expect(action.type).toBe('Category/UPDATE');
    expect(action.payload).toEqual(category);
  });

});
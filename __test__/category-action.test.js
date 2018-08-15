import { createCategory } from "../src/components/action/category-action.js";

describe ('actions', () => {

it('should create an action', () => {
    let category = {name: 'Rent', budget: 1500};
    let action = createCategory(category);

    expect(action.type).toBe('Category/ADD');
    expect(action.payload.name).toBe('Rent');
    expect(action.payload.budget).toBe(1500);
});

});
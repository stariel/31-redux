import { createCategory, updateCategory } from '../src/components/action/category-action.js';
import reducer from '../src/components/reducer/category-reducer.js';
import {CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DESTROY} from '../src/components/reducer/category-reducer.js';

const defaultState = [];

describe('reducer', () => {

  it('should create a category', () => {
    let category = {name: 'Rent', budget: 1500};
    let addAction = createCategory(category);
    let state = reducer(defaultState, addAction);
    
    expect(state.length).toBe(1);
    expect(state[0].name).toBe('Rent');
    
  });

  it('should update a category', () => {
    let category = {name: 'Rent', budget: 1500};
    let addAction = createCategory(category);
    let state = reducer(defaultState, addAction);

    let updateCat = {id: state[0].id, timestamp: state[0].timestamp, name: state[0].name, budget: 1560};
    let updateAction = updateCategory(updateCat);
    let newState = reducer(state, updateAction);

    expect(newState.length).toBe(1);
    expect(newState[0].budget).toBe(1560);

  });

});
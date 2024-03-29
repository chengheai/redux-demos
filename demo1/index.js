import { createStore } from './redux';

let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState);

store.subscribe(() => {
  let state = store.getState();
  console.log(`${state.info.name}：${state.info.description}`);
});
store.subscribe(() => {
  let state = store.getState();
  console.log(state.counter.count);
});

store.changeState({
  ...store.getState(),
  info: {
    name: 'alex',
    description: 'test1111'
  }
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1
  }
});

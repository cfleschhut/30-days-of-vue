import Vue from 'vue';
import Todos from '@/components/Todos';

describe('Todos', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Todos);
    const vm = new Constructor().$mount();

    expect(vm.$el.querySelector('.title').textContent).toBe('Todos');
    expect(vm.$el.querySelector('.new-todo').placeholder).toBe(
      'What needs to be done?',
    );
  });

  it('should set correct default data', () => {
    const initialData = Todos.data();

    expect(initialData.todos).toEqual([]);
    expect(initialData.newTodo).toEqual('');
  });
});

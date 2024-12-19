import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [], // Начальные задачи
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId);
    },
  },
  getters: {
    todos: state => state.todos,
  },
});

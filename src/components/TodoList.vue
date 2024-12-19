<template>
    <div>
      <h1>Список задач</h1>
      <ul>
        <todo-item
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @remove="removeTodo"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoItem,
    },
    computed: {
      ...mapGetters(['todos']),
    },
    methods: {
      ...mapActions(['removeTodo']),
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none; /* Убираем маркеры списка */
    padding: 0; /* Убираем отступы */
  }
  </style>
  
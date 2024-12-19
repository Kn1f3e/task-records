<template>
    <div>
      <input v-model="newTodoText" placeholder="Введите новую задачу" />
      <button @click="addNewTodo">Добавить</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTodoText: '',
      };
    },
    methods: {
      ...mapActions(['addTodo']),
      addNewTodo() {
        if (this.newTodoText.trim() !== '') {
          const newTodo = {
            id: Date.now(),
            text: this.newTodoText,
          };
          this.addTodo(newTodo);
          this.newTodoText = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-right: 10px;
  }
  </style>
  

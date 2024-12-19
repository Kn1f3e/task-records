<template>
    <li>
      {{ todo.text }}
      <button @click="removeTodo">Удалить</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object,
    },
    methods: {
      removeTodo() {
        this.$emit('remove', this.todo.id);
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  button {
    background-color: #f44336; /* Красный цвет для кнопки удаления */
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #d32f2f; /* Темнее при наведении */
  }
  </style>
  
<template>
  <div class="box">
    <section class="todoapp">
      <header class="header">
        <h1 class="title">Todos</h1>
        <input
          class="input new-todo"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main content">
        <ul class="todo-list">
          <li class="todo" v-for="(todo, key) in todos" :key="key">
            <div class="field is-grouped">
              <div class="control">
                <label class="label">{{ todo }}</label>
              </div>
              <div class="control">
                <button class="button is-small destroy" @click="removeTodo(todo)">Remove</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo.trim()) return false;

      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
};
</script>

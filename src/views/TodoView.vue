<script setup lang="ts">
import TodoForm, { type TodoFormData } from "@/components/TodoForm.vue"
import { useTodorStore } from "@/stores/todo";

const todos = useTodorStore()

function onSubmit(formData: TodoFormData) {
  todos.add({...formData, done: false});
}
</script>

<template>
  <h1 class="text-xl font-bold">Todo</h1>
  <TodoForm @submit="onSubmit" />
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Title</th>
          <th>Description</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="todo in todos.todos" :key="todo.title">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            {{ todo.title }}
            <br />
          </td>
          <td>{{ todo.description }}</td>
          <th>
            <button class="btn btn-ghost btn-xs" @click="todos.remove(todo)">delete</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Description</th>
          <th>Done</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

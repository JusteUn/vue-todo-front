<script setup lang="ts">
import TodoForm, { type TodoFormData } from "@/components/TodoForm.vue"

function onSubmit(formData: TodoFormData) {
  console.log(formData)
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
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span class="badge badge-ghost badge-sm">Task</span>
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">delete</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

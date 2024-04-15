<script setup lang="ts">
import { ref } from 'vue'

const titleInput = ref('')
const descInput = ref('')
</script>

<template>
  <h1 class="text-xl font-bold">Todo</h1>
  <label class="input input-bordered flex items-center gap-2">
    Title
    <input type="text" class="grow" v-model="titleInput" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Description
    <input type="text" class="grow" v-model="descInput" />
  </label>
  <button class="btn btn-primary">Add</button>
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

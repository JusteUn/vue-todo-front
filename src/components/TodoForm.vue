<script setup lang="ts">
import { type Ref, ref } from 'vue'

export interface TodoFormData {
  title: string
  description: string
}

const emit = defineEmits<{
  (e: 'submit', data: TodoFormData): void
}>()

const formData: Ref<TodoFormData> = ref({} as TodoFormData)

function submit() {
  emit('submit', formData.value)
}
</script>

<template>
  <form @submit.prevent="submit">
    <label class="input input-bordered flex items-center gap-2">
      Title
      <input type="text" class="grow" v-model="formData.title" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      Description
      <input type="text" class="grow" v-model="formData.description" />
    </label>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

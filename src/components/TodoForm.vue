<script setup lang="ts">
import { type Ref, ref } from 'vue'
import * as v from 'valibot'

export interface TodoFormData {
  title: string
  description: string
}

const TodoFormSchema = v.object({
  title: v.string([v.minLength(3, "Title length must be at least 3 characters")]),
  description: v.string([v.minLength(3, "Description length must be at least 3 characters")]),
})

const emit = defineEmits<{
  (e: 'submit', data: TodoFormData): void
}>()

const formData: Ref<TodoFormData> = ref({} as TodoFormData)
const errors = ref([] as v.SchemaIssue[])

function submit() {
  const result = v.safeParse(TodoFormSchema, formData.value)
  if (result.success) {
    emit('submit', formData.value)
    formData.value = {} as TodoFormData
    errors.value = []
  } else {
    errors.value = result.issues
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <label class="input input-bordered flex items-center gap-2" :class="{ 'input-error': errors[0]}">
      Title
      <input type="text" class="grow" v-model="formData.title" />
      <p v-if="errors[0]">{{ errors[0].message }}</p>
    </label>
    <label class="input input-bordered flex items-center gap-2" :class="{'input-error': errors[1]}">
      Description
      <input type="text" class="grow" v-model="formData.description" />
      <p v-if="errors[1]">{{ errors[1].message }}</p>
    </label>
    <button type="submit" class="btn btn-primary">Add</button>
  </form>
</template>

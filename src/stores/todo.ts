import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface Todo {
  title: string
  description: string
  done: boolean
}

export const useCounterStore = defineStore('counter', () => {
  const todos: Ref<Todo[]> = ref([])

  function add(item: Todo) {
    todos.value.push(item)
  }
  return { todos, add }
})

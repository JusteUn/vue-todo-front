import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface Todo {
  title: string
  description: string
  done: boolean
}

export const useTodorStore = defineStore('todo', () => {
  const todos: Ref<Todo[]> = ref([])

  function add(item: Todo) {
    todos.value.push(item)
  }
  function remove(item: Todo) {
    const indexOfItem = todos.value.indexOf(item)
    todos.value.splice(indexOfItem, 1)
  }
  return { todos, add, remove }
})

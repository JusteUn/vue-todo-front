<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1 class="text=xl font-bold">Counter</h1>
  <div class="join">
    <button class="btn btn-primary" @click="counter.decrement">-</button>
    <button class="btn join-item">{{ counter.count }}</button>
    <button class="btn btn-primary" @click="counter.increment">+</button>
  </div>
  <p>Double is: {{ counter.doubleCount }}</p>
</template>

<script setup lang="ts"></script>

<template>
  <header>
    <div class="navbar bg-base-200">
      <div class="flex-1">
        <RouterLink to="/"><a class="btn btn-ghost text-xl">daisyUI</a></RouterLink>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/counter">Counter</RouterLink>
          </li>
          <li>
            <RouterLink to="/todo">Todo</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="flex h-screen">
    <div class="m-auto">
      <RouterView />
    </div>
  </div>
</template>

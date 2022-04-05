<template>
  <header class="navbar">
    <div>Vue Composition Api</div>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Главная
        </router-link>
      </li>
      <li>
        <router-link to="/reuse">
          Переиспользование
        </router-link>
      </li>
    </ul>
  </header>

  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script setup>
</script>

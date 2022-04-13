<template>
  <MainHeader @open-messages="isMassagesOpen = true" />
  <router-view />

  <MainMessages :isOpen="isMassagesOpen" @close-messages="isMassagesOpen = false" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store'
import MainHeader from '../components/MainHeader.vue'
import MainMessages from '../components/MainMessages.vue'

const store = useStore()
const router = useRouter()

const isAuth = computed(() => store.getters.isAuth)
const isMassagesOpen = ref(false)

onMounted((): void => {
  if (!isAuth.value) {
    router.push('/auth')
  }
})
</script>

<style scoped></style>

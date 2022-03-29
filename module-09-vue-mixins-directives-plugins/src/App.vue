<template>
  <div class="container">
    <div class="card">
      <div class="list-item">
        <div class="btn primary" @click="changeLang('ru')">RU</div>
        <div class="btn primary" @click="changeLang('en')">EN</div>
      </div>
      <h2>{{ $i18n('title') }}</h2>
    </div>

    <div class="form-control">
      <input v-focus type="text" />
    </div>

    <AppAlert type="primary" closable>
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert>

    <AppAlert1 type="primary" closable>
      <template v-slot:title>Title</template>
      <template v-slot:text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate.</template>
    </AppAlert1>

    <button class="btn primary" style="margin-top: 20px" @click="modal = true">Open modal</button>
    
    <teleport to="body">
      <AppModal v-if="modal" @closeModal="modal = false">
        <template #title>Modal window</template>
        <template #text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusantium, tenetur quod dolores molestias deserunt corrupti officiis! Velit mollitia, eius ad rerum, voluptates totam reprehenderit beatae, nulla placeat deserunt doloribus.</template>
      </AppModal>
    </teleport>
  </div>
  
</template>

<script>
import AppModal from './components/AppModal.vue'
import AppAlert1 from './components/AppAlert1.vue';
import AppAlert from './components/AppAlert.vue';
import VFocus from './directives/VFocus.js';

export default {
  components: { AppAlert, AppAlert1, AppModal },
  directives: {
    focus: VFocus
  },
  data() {
    return {
      modal: false
    }
  },
  inject: ['changeLangI18n'],
  methods: {
    changeLang(lang) {
      this.changeLangI18n(lang);
      this.$forceUpdate();
    }
  }
};
</script>

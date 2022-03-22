<template>
  <div class="container">
    <div v-if="comments.length === 0">
      <button @click="getComments" class="btn primary">Загрузить комментарии</button>
    </div>

    <div v-else class="card">
      <h2>Комментарии</h2>

      <ul class="list">
        <li v-for="comment in comments" :key="comment.id" class="list-item">
          <div>
            <p><strong>{{comment.email}}</strong></p>
            <small>{{comment.body}}</small>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="isLoading" class="loader"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      isLoading: false,
    };
  },
  methods: {
    getComments() {
      this.isLoading = true;

      setTimeout(async () => {
        const URL = 'https://jsonplaceholder.typicode.com/comments?_limit=42';
        const response = await fetch(URL);
        const data = await response.json();
  
        this.comments = data;
        this.isLoading = false;

        return await data;        
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped></style>

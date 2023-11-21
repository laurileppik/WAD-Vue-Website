<template>
    <div class="post">
      <div class="poster">
        <div class="left">
          <div class="image">
            <img src="@/assets/hmt.gif" alt="My picture" width="35" height="35">
          </div>
        </div>
        <div class="right">
          <p>{{ post.createTime }}</p>
        </div>
      </div>
      <div v-if="post && post.image">
        <img class="post-image" :src="require(`@/assets/${post.image}`)" alt="Post Image">
      </div>
      <p class="post-body">{{ post.body }}</p>
      <div class="like">
        <img src="@/assets/fblike.jpeg" alt="Like Image" width="25" height="25">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
    mounted() {
    console.log('post.image:', this.post.image);
  },
  };
  
  </script>
  
  <style scoped>
.post {
  background-color: gainsboro;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px auto;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 60%;
}

.poster {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.left {
  margin-right: 10px;
}

.image img {
  border-radius: 50%;
}

.post-image {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
}



.post-body {
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
}

.like {
  margin-top: 10px;
  cursor: pointer;
}

</style>
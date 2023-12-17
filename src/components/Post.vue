<template>
    <div class="post">
      <div class="poster">
        <div class="left">
          <div class="image">
            <div class="pfpCircle">
            <img src="@/assets/hmt.gif" alt="My picture" width="35" height="35">
          </div>
          </div>
        </div>
        <div class="right">
          <p>{{ post.createtime }}</p>
        </div>
      </div>
      <div v-if="post && post.image">
        <img class="post-image" :src="require(`@/assets/${post.image}`)" alt="Post Image">
      </div>
      <p class="post-body">{{ post.body }}</p>
      <!--<div class="like" @click="incrementLikes">
        <img src="@/assets/fblike.png" alt="Like Image" width="20" height="20">
        <span>&nbsp;{{ post.likes }}</span>
      </div>-->
    </div>
  </template>
  
  
  <script>
  export default {
    props: {
      post: Object,
    },
    methods: {
      incrementLikes() {
        this.post.likes++;
      },
    },
    mounted() {
      if (this.post.likes === undefined) {
        this.$set(this.post, 'likes', 0);
      }
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
  cursor: pointer;
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
  display: flex;
  text-align: justify;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border-color: black;
  border-width: 1px;
  border-style: solid;
}

.like {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
}

.pfpCircle {
  background-color: whitesmoke;
  border-radius: 2rem;
  padding: 0.2rem;
}


</style>
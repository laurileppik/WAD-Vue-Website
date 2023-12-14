<template>
  <div class="main-view">
    <div class="content">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <button @click="resetAllLikes">Reset All Likes</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Post from '@/components/Post.vue';

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    // Map the userId from the Vuex store to a local computed property
    ...mapState(['userId']),
  },
  methods: {

    async fetchPosts(userId) {
      const response = await fetch(`http://localhost:3000/api/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.posts = await response.json();
    },

    resetAllLikes() {
      this.posts.forEach(post => {
        post.likes = 0;
      });
    },

    async logout() {
      try {
        const response = await fetch('http://localhost:3000/logout', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          this.$store.commit('setUserId', null);
          this.$router.push({ name: 'login' });
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    },
  },
  created() {
    console.log('User ID from store:', this.userId);
    if (this.userId != undefined && this.userId!=null) {
      this.fetchPosts(this.userId);
    }
    //this.fetchPosts(this.userId);

  },
};
</script>

<style>
.main-view {
  padding-bottom: 40px;
}
</style>

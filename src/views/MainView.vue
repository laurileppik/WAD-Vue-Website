<template>
  <div class="main-view">
    <div class="content">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Post from '@/components/Post.vue';

export default {
  components: {
    Post,
  },
  computed: {
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
  created() {
    this.fetchPosts();
  },
};
</script>

<style>
.main-view {
  padding-bottom: 40px;
}
</style>


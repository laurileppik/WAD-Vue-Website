<template>
  <div class="main-wrapper">
    <div class="sidebar-left"></div>
    <div class="main-view">
      <button class="logout" @click="logout">Logout</button>
      <div class="content">
        <Post v-for="post in posts" :key="post.id" :post="post" @click="redirectToPostView(post.id)" />
      </div>
      <button class="addpost" @click="redirectAddPostView">Add post</button>
      <button class="deletepost" @click="deleteAllPosts">Delete all posts</button>
      </div>
    <div class="sidebar-right"></div>
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
    redirectAddPostView() {
      this.$router.push({ name: 'addPostView' });
    },

    async redirectToPostView(postId) {
      try {
        console.log("postID", postId);
        const apiUrl = `http://localhost:3000/api/post?postId=${postId}`;
        console.log("API URL:", apiUrl);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const selectedPost = await response.json();

        console.log('Server Response:', response);
        console.log('Selected Post:', selectedPost);

        if (selectedPost && selectedPost.length > 0 && selectedPost[0].id) {
          this.$router.push({
            name: 'postview',
            params: { postId: selectedPost[0].id },
          });

          console.log('After router.push');
        } else {
          console.error('Invalid post data:', selectedPost);
        }
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    },



    deleteAllPosts() {
      const data = {
        id: this.userId,
      };
      console.log(this.userId);
      fetch('http://localhost:3000/api/deleteposts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);

          // Redirect to the main page without posts if the request was successful
          this.fetchPosts(this.userId);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },

    async fetchPosts(userId) {
      const response = await fetch(`http://localhost:3000/api/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.posts = await response.json();
      console.log('Received Posts:', JSON.parse(JSON.stringify(this.posts)));

      this.posts.forEach(post => {
        if (post.createtime) {
          const date = new Date(post.createtime);
          post.createtime = date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
        }
      });

      console.log('Modified Posts:', JSON.parse(JSON.stringify(this.posts)));
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
    //Maybe change this to be if it is an integer fetch because currently not ideal.
    if (this.userId != undefined && this.userId != null) {
      this.fetchPosts(this.userId);
    } else {
      this.$router.push({ name: 'login' });
    }
    //this.fetchPosts(this.userId);

  },
};
</script>

<style scoped>
.main-view {
  padding-bottom: 40px;
  text-align: center;
  flex: 1;
}

.main-wrapper {
  display: flex;
}

.sidebar-left,
.sidebar-right {
  width: 20%;
  background-color: gainsboro;
  margin-top: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
}

.sidebar-left {
  margin-left: 1rem;
}

.sidebar-right {
  margin-right: 1rem;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 5px;
}

.logout {
  margin: 1rem;
  border-radius: 0.5rem;
}

.addpost {
  border-radius: 0.5rem;
}

.deletepost {
  border-radius: 0.5rem;
}


</style>


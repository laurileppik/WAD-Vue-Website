<template>
  <div class="post">
    <h2>A Post</h2>
    <div>
      <h3>Body</h3>
      <textarea v-model="updatedBody" rows="4" cols="50"></textarea>
    </div>
    <div>
      <button @click="updatePost">Update</button>
      <button @click="deletePost">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      postId: this.$route.params.postId,
      updatedBody: '',
    };
  },
  mounted() {
    console.log('PostView component loaded');
  },
  methods: {
    redirectToPostView(postId) {
      this.$emit('click', postId);
    },
    updatePost() {
      console.log('Update button clicked for post id:', this.postId);
      console.log('Update button clicked for post id:', this.updatedBody);
      const data = {
        id: this.postId,
        newPost: this.updatedBody,
      };
      fetch('http://localhost:3000/api/updatepost', {
        method: 'POST',
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
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
    deletePost() {
      const data = {
        id: this.postId,
      };
      fetch('http://localhost:3000/api/deletepost', {
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
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>

<style scoped>
.post {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  margin-left: 15rem;
  margin-right: 15rem;
  background-color: #f0f0f0;
}

.post h2 {
  margin-bottom: 5px;
}

.post button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

.post textarea {
  margin-top: 5px;
}
</style>



<template>
    <div class="post">
        <h2>Add Post</h2>
        <div>
            <h3>Body</h3>
            <textarea v-model="newPostBody" rows="4" cols="50"></textarea>
        </div>
        <div>
            <button @click="addPost">Add</button>
        </div>
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            newPostBody: '',
        };
    }, computed: {
        // Map the userId from the Vuex store to a local computed property
        ...mapState(['userId']),
    },


    methods: {
        addPost() {
            console.log('Add button clicked for post id:', this.newPostBody);
            console.log(this.userId)
            const data = {
                newPost: this.newPostBody,
                userid: this.userId,
            };
            fetch('http://localhost:3000/api/newpost', {
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

  
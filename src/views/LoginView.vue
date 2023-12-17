<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="field" type="email" id="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input class="field" type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
            <button type="button" @click="goToSignup">Go to Signup</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        submitForm() {
            const data = {
                email: this.email,
                password: this.password,
            };

            fetch('http://localhost:3000/login', {
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
                    // Save the JWT into the local storage
                    localStorage.setItem('jwt', data.jwt);

                    // Commit user_id to the store
                    this.$store.commit('setUserId', data.user_id);


                    // Redirect to the main page if the request was successful
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }, goToSignup() {
            this.$router.push('/signup');
        },

    },
};
</script>

<style scoped>
.field {
  width: 100%;
  max-width: 400px;
}

.login {
  text-align: center;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

</style>


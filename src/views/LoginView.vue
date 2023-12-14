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
            // Create an object with the form data
            const data = {
                email: this.email,
                password: this.password,
            };

            // Send a POST request to the server
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
            // Redirect to the signup page
            this.$router.push('/signup');
        },

    },
};
</script>
  
<template>
  <div class="signup">
    <h1>Signup</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
              <input class="field" type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input class="field" type="password" id="password" v-model="password" @input="validatePassword" required />
        <p v-if="!isPasswordValid" class="error-message">
          Password is not valid. Please follow these conditions:
          <ul style="list-style-type: none; padding: 0;">
            <li v-if="!hasUppercase">At least one uppercase alphabet character.</li>
            <li v-if="!hasLowercase">At least two lowercase alphabet characters.</li>
            <li v-if="!hasNumeric">At least one numeric value.</li>
            <li v-if="!startsWithUppercase">Start with an uppercase alphabet.</li>
            <li v-if="!hasUnderscore">Include the character “_”.</li>
            <li v-if="!hasCorrectLength">At least 8 characters and less than 15 characters.</li>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </ul>
        </p>
      </div>
      <button type="submit" :disabled="!isPasswordValid">Signup</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {

    return {
      email: '',
      password: '',
      isPasswordValid: true,
      hasUppercase: false,
      hasLowercase: false,
      hasNumeric: false,
      startsWithUppercase: false,
      hasUnderscore: false,
      hasCorrectLength: false,
      errorMessage: "error",
    };

  },

  methods: {

    submitForm() {
  if (this.isPasswordValid) {
    // Create an object with the form data
    const data = {
      email: this.email,
      password: this.password,
    };

    // Send a POST request to the server
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        // If the server responds with a status code outside the range 200-299,
        // throw an error with the status text (e.g., 'User already exists')
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // Redirect to the main page if the request was successful
      this.$router.push('/');
    })
    .catch((error) => {
      // Display the error message to the user
      this.errorMessage = error.message;
      console.error('Error:', error);
    });
  }
},

    validatePassword() {
      const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;
      this.hasUppercase = /[A-Z]/.test(this.password);
      this.hasLowercase = this.minimumTwoLowercase();
      this.hasNumeric = /\d/.test(this.password);
      this.startsWithUppercase = /^[A-Z]/.test(this.password);
      this.hasUnderscore = /_/.test(this.password);
      this.hasCorrectLength = this.password.length >= 8 && this.password.length < 15;

      this.isPasswordValid = regex.test(this.password);
    },

    minimumTwoLowercase() {
      var lowercaseCnt = 0;
      for (let i = 0; i < this.password.length; i++) { 
        if(this.password[i] == this.password[i].toLowerCase() && this.password[i] != this.password[i].toUpperCase()){
          lowercaseCnt++;
        }
      }
      if(lowercaseCnt > 1){
        return true;
      }
      return false;
    },

  }

};
</script>

<style scoped>

.field {
  width: 100%;
  max-width:400px;
}

.signup {
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
}

.error-message {
  color: red;
}
</style>
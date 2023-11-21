<template>
  <div class="signup">
    <h1>Signup</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" @input="validatePassword" required />
        <p v-if="!isPasswordValid" class="error-message">
          Password is not valid. Please follow these conditions:
          <ul style="list-style-type: none; padding: 0;">
            <li v-if="!hasUppercase">At least one uppercase alphabet character.</li>
            <li v-if="!hasLowercase">At least two lowercase alphabet characters.</li>
            <li v-if="!hasNumeric">At least one numeric value.</li>
            <li v-if="!startsWithUppercase">Start with an uppercase alphabet.</li>
            <li v-if="!hasUnderscore">Include the character “_”.</li>
            <li v-if="!hasCorrectLength">At least 8 characters and less than 15 characters.</li>
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
    };
  },
  methods: {
    submitForm() {
      if (this.isPasswordValid) {
        // Redirect to the main page if all conditions are met
        this.$router.push('/');
      }
    },
    validatePassword() {
      const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;
      this.hasUppercase = /[A-Z]/.test(this.password);
      this.hasLowercase = /[a-z]/.test(this.password);
      this.hasNumeric = /\d/.test(this.password);
      this.startsWithUppercase = /^[A-Z]/.test(this.password);
      this.hasUnderscore = /_/.test(this.password);
      this.hasCorrectLength = this.password.length >= 8 && this.password.length < 15;

      this.isPasswordValid = regex.test(this.password);
    },
  },
};
</script>

<style scoped>
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

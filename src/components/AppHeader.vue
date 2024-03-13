<template>
  <div class="header">
    <h1 class="title"></h1>
    <router-link class="btn-header" to="/">Mis paneles</router-link>
  </div>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<style scoped>
.header {
  box-sizing: border-box;
  background-color: #607d8b;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding: 1rem;
}
.title {
  align-self: center;
  color: #eceff1;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.btn-header {
  background-color: #455a64;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0.5px rgba(49, 49, 93, 0.03),
    0 2px 5px 0 rgba(49, 49, 93, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 0.5rem;
  text-align: center;
  transition: all 600ms ease;
}
.btn-header:hover{
  background-color: #5f737d;
  color: whitesmoke;
}

.btn-login {
  background-color: #00695c;
  color: #fafafa;
}

.userinfo {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
span {
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: normal;
}

img {
  width: 32px;
  border-radius: 50%;
  margin: 0 1rem;
}
</style>

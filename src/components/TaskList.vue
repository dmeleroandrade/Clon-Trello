<template>
 <div class="container-tasks">
     <ul>
       <li
         v-for="(task, index) in tasks"
         :key="index"
         :class="{ completed: task.completed }"
       >         {{ task.title }}
</li>
       <input
         type="text"
         placeholder="añade una nueva tarea..."
         v-model="title"
         v-on:keyup.enter="add()"
       />
     </ul>
 </div>
</template>

<script>
export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array,
  },

  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      //implementar evento
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  background-color: #fafafa;
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  margin: 0.25rem 0;
  padding: 1rem;
}
.completed {
  background-color: #cfd8dc;
  color: #90a4ae;
}

input {
  box-sizing: border-box;
  background-color: #eceff1;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  margin: 0.5rem;
  outline: 0;
  padding: 0.75rem 0;
  transition: background-color 600ms ease;
  width: 100%;
}
.container-tasks {
    margin-left: 30;
}
</style>
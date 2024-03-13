<template>
    <section>
        <header>
            <h3>{{ name }}</h3>
        </header>
        <task-list>
            
        </task-list>
    </section>
</template>

<script>
export default {
    name: 'column',
    props: {
        listId: String,
        name: String
    }
}
</script>

<style scoped>

section {
    box-sizing: border-box;
    background-color: #eceff1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    margin: 1rem;
    padding: 1rem;
    width: 100%;
  }

  header {
    color: #37474f;
    margin: 0;
    padding-bottom: 1rem;
  }

  h3 {
    margin: 0;
  }
</style>
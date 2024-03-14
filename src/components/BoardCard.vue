<template>
    <div>
        <router-link 
        class="board-card" 
        v-bind:to="{name: 'board', params: {name,id}}">
        <span class="board-card-title">{{ name }}</span>
        </router-link>
</div>
</template>

<script>
export default {
    // recibe las propiedades de home.vue, que le damos el id y name
    name: 'board-card',
    props:{
    id: String,
    name:String
    }
}
</script>

<style  scoped>
.board-card {
    background-color: #546E7A;
    box-sizing: border-box;
    border-radius: 5px;
    color: #fafafa;
    margin-left: 2em;
    margin-top: 20em;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: all 600ms ease;
   
}
.board-card:hover{
    background-color: #73909e;
}
</style>


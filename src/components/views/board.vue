<template>
    <section>
        <h3><span>Mis paneles</span> -> {{ name }}</h3>

        <input
        type="text"
        placeholder="Añade una lista"
        v-model="listName"
        v-on:keyup.enter="add()"
        />
        <div class="container">
            <column
            v-for="(list,index) in boardList"
            :key="index"
            :listId="list.id"
            :name="list.name"
            ></column>
        </div>
    </section>
</template>

<script>
import Column from '@/components/Column'
export default {
    name:'board-view',
    components: { Column},

    props: {
        name: String,
        id: String
    },
    data(){
        return{
            listName:'',
            boardList: [
                {id:1, name:'Todo'},
                {id:2, name: 'doing'}
            ]
        }
    },

    methods: {
        add(){
            this.boardList.push({name:this.listName})
        }
    }
}</script>

<style scoped>
section {
    text-align: left;
}
h3 {
    margin-top: 1em;
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
}

span {
    color: #546e7a;
}

/* estilos del form */
h3 {
    color: #37474f;
    text-align: left;
    margin: 1.5rem;
}
    span {
      color: #546e7a;
    }
 
  section {
    text-align: left;
  }

  .container {
    box-sizing: border-box;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  input {
    background-color: #38515d;
    border: 0;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(29, 29, 54, 0.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: #e0e4e7;
    font-size: 1.3rem;
    margin: 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
  }

</style>
<template>
  <div>
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <input
        type="text"
        placeholder="Nuevo panel"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id"
      ></board-card>
    </div>
  </div>
</template>


 <script>
import BoardCard from "@/components/BoardCard";

export default {
  name: "home-view",
  components: { BoardCard },
  data: function () {
    return {
      boardName: "",
      boards: [
        { id: '1', name: "Tareas" },
        { id: '2', name: "compra" },
      ],
    };
  },
  methods: {
    add: function () {
      this.boards.push({ name: this.boardName });
    },
  },
};
</script> 

<style scoped>
h3 {
  text-align: left;
  margin: 1.5rem;
}

.boards-collection {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
  margin: 2em;
  align-items: center;
}
::placeholder {
  color: rgb(239, 239, 239);
}
input {
  box-sizing: border-box;
  background-color: #354e5a;
  border: 2px solid #557383;
  border-radius: 3px;
  font-size: 1.1rem;
  outline: 0;
  padding: 0.5rem;
  transition: all 600ms ease;
  color: whitesmoke;
}
</style>
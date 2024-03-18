import Vue from 'vue'
import * as types from './mutations-types'


export default {
    //Fetch de los paneles creados por el usuario

    [types.FETCH_BOARDS_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
        state.fetchingData = false
        state.erro = null
        state.boards = { ...boards } //destructura el panel y añade los nuevos, como si hiciera un push
    },
    [types.FETCH_BOARDS_FAILURE] (state, {error}) {
        state.fetchingData = false
        state.error = error
    },

    //fetch de las listas de un panel

    [types.FETCH_LISTS_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
        state.fetchingData = false
        state.erro = null
        state.lists = { ...lists } //destructura el panel y añade los nuevos, como si hiciera un push
    },
    [types.FETCH_LISTS_FAILURE] (state, {error}) {
        state.fetchingData = false
        state.error = error
    },

    //fetch de las tareas de una lista
    [types.FETCH_TASKS_REQUEST] (state) {
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
        state.fetchingData = false
        state.erro = null
        state.tasks = { ...tasks } //destructura el panel y añade los nuevos, como si hiciera un push
    },
    [types.FETCH_TASKS_FAILURE] (state, {error}) {
        state.fetchingData = false
        state.error = error
    },


    //Crear un nuevo panel
    [types.ADD_BOARD](state, {board}) {
        Vue.set(state.boards, board.id, board)
    },

    //Crear una nueva lista de tareas
    [types.ADD_BOARD](state, {column}) {
        Vue.set(state.lists, column.id, column)
    },

    //Añadir una nueva tarea a una lista
    [types.ADD_BOARD](state, {task}) {
        Vue.set(state.tasks, task.id, task)
    },

    //borrar una tarea de una lista de tareas
    [types.DELETE_TASK] (state,{taskId}) {
        state.tasks = Object.values(state.tasks).filter(task => task.id !==taskId)
    },

    //Marca como completada una tarea
    [types.MARK_AS_COMPLETED] (state, {task}) {
        task.completed = !task.completed
    }
}
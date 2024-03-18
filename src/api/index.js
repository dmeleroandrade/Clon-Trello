import board from '../components/views/board.vue'
import { db } from './firebase' //imprtamos el api de la app de firebase

const boardsRef = db.ref('/boards')
const listRef = db.ref('/list')
const tasksRef = db.ref('/tasks')

export default {

    getBoardsByUser (userId = 1) {
        const query = boardsRef.orderByChild('owner').equalTo(userId)
        return query.once('value')
    },
    postBoard (name) {
        const id= boardRef.push().key //tendremos un id, que lo dará firebase cuando creamos un nuevo hijo
        const owner = 1 //
        const board = {id, name, owner} //crearé un panel que tendrá un id, que es el que nos da firebase al crear hijo, un name, que es la propiedad de postBoard y un owner, que será siempre uno
    
        return boardsRef.child(id).set(board)
        .then(() => board)
    },

    getListFromBoard (boardId) {
        const query = listRef.orderByChild('board').equalTo(boardId) //hago una queri de listas y le decimos que me las ordene por la propiedad 'board' y que nos devuelve las iguales al boardId que le paso como parametro a equalTo. Nos devuelve con el metodo once solo un valor y que no se quede escuchando.
        return query.once('value')
    },

    postList (board,name) {
        const id = listRef.push().key
        const column = { id, name, board}

        return listRef.child(id).set(column)
        .then(() => column)
    },

    getTasksFromList (listId){
        const query= tasksRef.orderByChild('list').equalTo(listId)
        return query.once('value')
    },

    postTask (list, title){
        const id = tasksRef.push().key
        const task = {id, list, title, completed: false }

        return tasksRef.child(id).set(task)
        .then(() => task)
    },

    deletTask (taskId){
        return tasksRef.child(taskId)
    },
    completedTask (taskId) {
        const query = tasksRef.child(taskId).child('completed')
        return query.once('value')
        .then(snap => snap.val())
        .then(data => query.set(!data))

    }
}
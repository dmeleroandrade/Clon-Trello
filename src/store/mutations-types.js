// como hacemos llamadas asincronas, tenemos estos tres TIPOS DE MUTACIÓN o acción, primero la que le hacemos la petición, y las de exitos(success) y fallo(failure)
export const FETCH_BOARDS_REQUEST = 'FETCH_BOARDS-REQUEST'
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS-SUCCESS'
export const FETCH_BOARDS_FAILURE  = 'FETCH_BOARDS-FAILURE'

export const FETCH_LISTS_REQUEST = 'FETCH_LISTS-REQUEST'
export const FETCH_LISTS_SUCCESS = 'FETCH_LISTS-SUCCESS'
export const FETCH_LISTS_FAILURE  = 'FETCH_LISTS-FAILURE'

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS-REQUEST'
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS-SUCCESS'
export const FETCH_TASKS_FAILURE  = 'FETCH_TASKS-FAILURE'

export const ADD_BOARD = 'ADD_BOARD'
export const ADD_COLUMN = 'ADD_COLUMN'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED'
import * as firebase from 'firebase' 
import settting from './settings'

const app = initializeApp(settting) //aqui iniliacizamos firebase y le pasamos las claves que hemos creado en el proyecto


export const db = firebaseApp.database() //creo una variable llamada db para no tener que llamar todo el rato a firebaseApp.database

export default firebaseApp
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use (Vuex)

export default new Vuex.Store({
  state : {
    temas: [
      {nombre: 'Cuál es el origen de la Arquitectura de Software?.'},
      {nombre: '¿Que es la arquitectura de software?.'},
      {nombre: 'Problematica de la logica de negocio: Definción, interpretación, comunicación,  gestion de conocimiento en el equipo.'},
    ]
    
  }
})
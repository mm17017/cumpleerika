import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import vuetify from './plugins/vuetify'


Vue.use(firestorePlugin)

Vue.config.productionTip = false

import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
 
Viewer.setDefaults({
  Options: {
         "en línea": true, // Iniciar el modo en línea
         "button": true, // Muestra el botón de cierre en la esquina superior derecha
         "navbar": true, // Mostrar navegación en miniatura
         "title": true, // Muestra el título de la imagen actual
         "barra de herramientas": true, // Mostrar barra de herramientas
         "información sobre herramientas": true, // Mostrar porcentaje de zoom
         "movible": true, // Si la imagen se puede mover
         "zoomable": true, // Si la imagen se puede ampliar
         "giratorio": true, // Si la imagen se puede girar
         "escalable": true, // Si la imagen se puede voltear
         "transición": true, // Usa CSS3 en exceso
         "pantalla completa": true, // Si se juega a pantalla completa durante la reproducción
         "keyboard": true, // si el teclado es compatible
         "url": "data-source" // Establece la url de la imagen general
  }
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

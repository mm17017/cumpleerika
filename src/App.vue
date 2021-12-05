<template>
  <v-app id="inspire" class="headline">
    <v-app-bar id="fondo" app color="#000" flat>
      <v-avatar class="hidden-sm-and-down" color="white" size="32">
        <v-icon color="#000">mdi-lan</v-icon>
      </v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-4">
        <h1 class="justify-center">¡¡¡MUCHAS FELICIDADES ERIKA!!!</h1>
      </v-tabs>

      <v-avatar class="hidden-sm-and-down" color="white" size="32">
        <v-icon color="#000">mdi-access-point-network</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main class="blue darken -4">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" dark>
              <br />
              <v-img
                class="imagen"
                src="https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/esponja.png?alt=media&token=f5c6a740-b7d7-47f9-b7df-19a1ec331ebc"
              ></v-img>
              <br />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet rounded="lg" dark>
              <carro />
            </v-sheet>
            <br />
            <v-alert
              dark
              icon="mdi-cursor-default-click"
              border="left"
              prominent
              shaped
              elevation="10"
            >
              <h3>¿Quieres ver mejor la foto?</h3>
              <h4>Haz click sobre ella ;)</h4>
            </v-alert>

            <v-alert shaped  dark>
              <h4>Mis deseos en su cumpleaños y es su vida</h4>
              <p>Para empezar, Dios le bendiga. Dios bendiga su vida grandemente y que la paz de Dios le acompañe todos los dias de su vida.</p>
              <p>Este es un pequeño detalle para celebrar una año mas de su vida. Dios le guie y le de la fuerza para seguir adelante y sobre todo nunca se aleje de Dios.</p>
              <p>Dios bendiga a los su familias, sus amistades y conocidos. Sea su vida un medio de bendicion para los que lo rodean.</p>
              <p>Y me debe el pastel!!!</p>
            </v-alert>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" dark>
              <br />
              <v-img
                class="imagen"
                src="https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/patricio.png?alt=media&token=db140f5e-7f79-45c0-99da-a084bde39daa"
              ></v-img>
              <br />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
     <v-footer padless dark>
    <v-col
      class="text-center"
      cols="12"
      
    >
      Atentamente: Christian Meda
    </v-col>
  </v-footer>
  </v-app>
</template>
<script>
import Carro from "./components/Carro.vue";

export default {
  components: { Carro },
  data: () => ({
    links: ["MUCHAS FELICIDADES ERIKA!!!"],
  }),
};
</script>
<style scoped>
h1 {
  color: aliceblue;
}

.imagen {
  display: flex;
  align-content: center;
  height: 250px;
}
</style>

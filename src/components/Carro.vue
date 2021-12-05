<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <template v-slot:prev="{ on, attrs }">
      <v-btn class="mx-2" fab dark large color="red" v-bind="attrs" v-on="on">
        <v-icon dark> mdi-arrow-left-circle </v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn class="mx-2" fab dark large color="red" v-bind="attrs" v-on="on">
        <v-icon dark> mdi-arrow-right-circle </v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet dark height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <viewer>
            <img class="imge" :src="slide"/>
          </viewer>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        //   'https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_143806.jpg?alt=media&token=bb252b3f-f95e-43b2-8e73-53357b94317f',
        "https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_144241.jpg?alt=media&token=c5f56157-7e4c-43c0-a256-39dfcccd8203",
        "https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_144243.jpg?alt=media&token=ab9e3c85-7798-47f8-baf4-e996c2b237a5",
        "https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_144248.jpg?alt=media&token=7474cbc3-fa13-4848-870d-975e8f454960",
        "https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_144250.jpg?alt=media&token=ed76e2b5-684b-43eb-86d9-2e50776bb482",
        "https://firebasestorage.googleapis.com/v0/b/birth-b1cc1.appspot.com/o/IMG_20211102_144305.jpg?alt=media&token=0777750e-ef44-44b4-9a83-5e44d9fb11a9",
      
      ],
    };
  },
};
</script>

<style scoped>
.imge{
    width: 825px;
}
</style>
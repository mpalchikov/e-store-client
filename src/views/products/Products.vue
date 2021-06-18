<template>
  <v-layout>
    <v-row>
      <v-col>
        <h1>Товары</h1>
        <v-btn :to="{ name: 'newProduct' }">Добавить</v-btn>
        <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      headers: [
        {
          text: "Наименование",
          sortable: false,
          value: "title"
        },
        {
          text: "Цена",
          sortable: false,
          value: "price"
        }
      ],
      products: []
    };
  },
  async created() {
    const response = await axios.get("http://localhost:5000/api/products");
    this.products = response.data;
  }
};
</script>

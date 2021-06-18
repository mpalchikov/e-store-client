<template>
  <v-layout>
    <v-row>
      <v-col>
        <h1>Новый товар</h1>
        <v-form>
          <v-text-field
            v-model="title"
            label="Наименование"
            outlined
          ></v-text-field>
          <v-textarea
            v-model="description"
            label="Описание"
            outlined
          ></v-textarea>
          <v-text-field v-model="price" label="Цена" outlined></v-text-field>
          <v-btn primary @click="save" :loading="loading">Сохранить</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      description: "",
      price: 0.0,
      loading: false
    };
  },
  methods: {
    async save() {
      this.loading = true;
      try {
        await axios.post("http://localhost:5000/api/products", {
          title: this.title,
          description: this.description,
          price: this.price
        });
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

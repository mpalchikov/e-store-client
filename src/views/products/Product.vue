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
      id: null,
      title: "",
      description: "",
      price: 0.0,
      loading: false
    };
  },
  async created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
    }
    if (this.id) {
      const response = await axios.get(
        `http://localhost:5000/api/products/${this.id}`
      );

      this.title = response.data.title;
      this.description = response.data.description;
      this.price = response.data.price;
    }
  },
  methods: {
    async save() {
      this.loading = true;

      const productData = {
        title: this.title,
        description: this.description,
        price: this.price
      };

      try {
        if (this.id) {
          await axios.put(
            `http://localhost:5000/api/products/${this.id}`,
            productData
          );
        } else {
          await axios.post("http://localhost:5000/api/products", productData);
        }
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<template>
  <div class="home">
    <input type="text" v-model="sendData" />
    <button @click="sendDataFunc()">Send Data</button>

    Message {{ message }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      sendData: "",
      message: "",
    };
  },
  methods: {
    sendDataFunc() {
      axios
        .post("http://localhost:3000/api", {inpData:this.sendData})
        .then((response) => {
          this.message = `Seri Porta Yazılan Değer : ${response.data.message}`
        });
    },
  },
};
</script>

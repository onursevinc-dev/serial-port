<template>
  <div class="home">
    <input type="text" v-model="sendData" />
    <button @click="sendDataFunc()">Send Data</button>

    Message {{ message }}

    <div class="">
      <div>{{ time }}</div>
      <button @click="setIntervalTime()">Set Interval Time</button>
      <button @click="clearIntervalTime()">Clear Interval Time</button>
    </div>
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
      time: 0,
      interval1: "",
    };
  },
  beforeDestroy(){
    this.clearIntervalTime()
  },
  created() {
    this.setIntervalTime()
  },
  methods: {
    setIntervalTime() {
      console.log("basıldı");
      let self = this;
      this.interval1 = setInterval(function() {
        console.log("interval içi");
        self.time++
      }, 1000);
    },
    clearIntervalTime() {
      clearInterval(this.interval1);
    },
    sendDataFunc() {
      axios
        .post("http://localhost:3000/api", { inpData: this.sendData })
        .then((response) => {
          this.message = `Seri Porta Yazılan Değer : ${response.data.data +' '+ response.data.message}`;
        });
    },
  },
};
</script>

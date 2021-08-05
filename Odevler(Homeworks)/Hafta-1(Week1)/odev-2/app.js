const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: ""
    };
  },
  methods: {
    showAlert(){
      alert("This is an alert!");
    },
    keydownInput(event){
      this.value = event.target.value;
    },
    keydownEnter(e){
      this.value2 = event.target.value;
    }
  },
});
app.mount("#exercise");

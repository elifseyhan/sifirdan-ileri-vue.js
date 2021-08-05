//Vue instance
const app = Vue.createApp({
    data() {
        return {
            title: "Vue.js Bootcamp 1. gün",
            content: "Lorem ipsum dolor sit amet...",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız.",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp"
            },
            owner: "pogaca",
            coords: {
                x: 0,
                y: 0,
            }
        };
    },
    //Fonksiyonları içeren bölüm
    methods: {
        changeTitle(ptitle){
            // alert();
            this.title = ptitle;
        },
        updateCoords(message, event){
            // console.log(message, event.x, event.y);
            this.changeTitle(`${event.x}, ${event.y}`);
            this.coords = {
                x: event.x,
                y: event.y,
            };
        }
    },
}).mount("#app");

// Vue2 Version
// new Vue({
    // el: "#app",
//     data : {

//     }
// })
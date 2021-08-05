const app = Vue.createApp({
    data() {
        return {
            name: "Elif",
            age: 30,
            image_url: "https://i1.wp.com/filmloverss.com/wp-content/uploads/2020/12/avatar-filmloverss.jpg?resize=750%2C500&ssl=1"
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    },
}).mount("#exercise");
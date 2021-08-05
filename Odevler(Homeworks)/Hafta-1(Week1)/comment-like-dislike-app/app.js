const app = Vue.createApp({
    data() {
        return {
            comments: [
                {
                    id: 1,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likeCount: 0,
                    dislikeCount: 0
                },
                {
                    id: 2,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likeCount: 0,
                    dislikeCount: 0
                },
                {
                    id: 3,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likeCount: 0,
                    dislikeCount: 0
                },
                {
                    id: 4,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, tempore accusamus iusto nobis dolore ratione itaque perferendis delectus? Nostrum corporis, quod voluptates quis consequuntur eveniet beatae dolor aperiam ad.',
                    likeCount: 0,
                    dislikeCount: 0
                },
            ]
        }
    },
}).mount("#exercise");
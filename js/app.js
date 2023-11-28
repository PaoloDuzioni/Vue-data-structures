const { createApp } = Vue;
// console.log(Vue);

createApp({
    data() {
        return {
            productsList: [
                {
                    title: 'Black',
                    description:
                        'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.',
                    ingredients: ['Coffee'],
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG',
                },
                {
                    title: 'Cortado',
                    description:
                        'Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.',
                    ingredients: ['1oz Espresso', '1oz Steamed Milk'],
                    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg',
                },
                {
                    title: 'Cappuccino',
                    description:
                        'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.',
                    ingredients: ['Espresso', 'Steamed Milk', 'Foam'],
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Wet_Cappuccino_with_heart_latte_art.jpg',
                },
                {
                    title: 'Americano',
                    description:
                        'With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.',
                    ingredients: ['Espresso', 'Hot Water'],
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg/1280px-Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg',
                },
                {
                    title: 'Espresso',
                    description:
                        'An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.',
                    ingredients: ['1oz Espresso'],
                    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg',
                },
            ],
            activeProduct: null,
        };
    },
    methods: {
        setActiveProduct(index) {
            this.activeProduct = index;
        },
    },
}).mount('#app');

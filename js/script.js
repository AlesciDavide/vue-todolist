const {createApp} = Vue

createApp({
    data(){
        return {
            todoList: [
                {
                    text: 'Finire l\'esercizio todoList',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Anadare a mangiare',
                    done: false,
                },
                {
                    text: 'fare una capriola',
                    done: false,
                },
            ]
        }
    },
    methods:{

    }
}).mount('#app')
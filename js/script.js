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
                    done: true,
                },
                {
                    text: 'fare una capriola',
                    done: false,
                },
            ]
        }
    },
    methods:{
        /* funzione per rimuovere un item dalla lista */
        removeItemTodo: function(index){
            this.todoList.splice(index, 1);
        }
    }
}).mount('#app')
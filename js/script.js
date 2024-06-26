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
            ],
            newTask: '',
            showMod: false,
        }
    },
    methods:{
        /* funzione per rimuovere un task dalla lista */
        removeItemTodo: function(index){
            this.todoList.splice(index, 1);
        },
        /* funzione per aggiungere un task alla lista */
        addItemTodo: function(newTask){
            if(newTask.trim().length > 0) {
                const newObj = {
                    text: newTask.trim(),
                    done: false
                }
                this.todoList.push(newObj);
            }
            this.clearInput();
        },
        /* pulire l'input */
        clearInput: function(){
            this.newTask = '';
        },
        /* toggle classe done */
        toggClassDone: function(index){
            this.todoList[index].done = !this.todoList[index].done
        },
        /* funzione per cambiare l'argomento di una task */
        changeNameTask: function(){
            this.showMod = true;
        },
        apllyModTask: function(){
            this.showMod = false;
        }
    }
}).mount('#app')
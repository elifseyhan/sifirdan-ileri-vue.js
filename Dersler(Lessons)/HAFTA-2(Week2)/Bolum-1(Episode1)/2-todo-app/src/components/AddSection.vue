<template>
    <label for="todoText"></label>
    <input v-model="todoText" @keydown.enter="addnewTodo" type="text" id="todoText" placeholder="Bir şeyler yazınız...">
</template>

<script>
export default {
    data(){
        return{
            todoText: null
        }
    },
    methods: { 
        addnewTodo(){
            this.$emit("addTodo", this.todoText);
            this.todoText = null;
        }
    }
}
</script>
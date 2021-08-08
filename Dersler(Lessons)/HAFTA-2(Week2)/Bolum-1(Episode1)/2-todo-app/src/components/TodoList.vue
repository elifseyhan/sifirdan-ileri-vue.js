<template>
    <ul>
      <!-- <li 
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li> -->
      <TodoListItem  @delete-todo-item="$emit('delete-todo-item', $event)" v-for="todo in todoList" :key="todo.id" :item="todo" />
    </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
    props: ["todoList"],
    components: {
        TodoListItem
    }
}
</script>
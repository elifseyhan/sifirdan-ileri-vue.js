<template>
    <ul>
      <TodoListItem
      v-for="todo in provideData.todoList" :key="todo.id" :item="todo" />
    </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
export default {
    // props: ["todoList"],
    inject: ['provideData'],
    components: {
        TodoListItem
    }
}
</script>
<template>
    <!-- <small class="d-flex justify-content-end mt-2 green">{{ todoList.length }} Adet todo vardır.</small> -->
    <small class="d-flex justify-content-end mt-2 green">{{ itemCount }} Adet todo vardır.</small>
</template>

<script>
export default {
    props: ["itemCount"]
}
</script>
<template>
  <Modal>
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>
    <template #content>
      <p class="text-green">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo et atque provident illum aliquid mollitia perspiciatis, eveniet quisquam eaque in eligendi amet quas maiores accusantium exercitationem veniam libero voluptas.</p>
    </template>
    <template #default>
      Bu default olarak gösterilecek...
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: {
    Modal
  },
  methods: {
    onSave(){
      alert("Saved!!")
    }
  }
}
</script>
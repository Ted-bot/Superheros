<template>
  <div class="mb-4">
    <h1 v-if="title" class="text-white">{{ title }}</h1>
    <table class="table-auto bg-white">
      <tbody>
        <tr
          v-for="(value, name, index) in content"
          :key="index"
          :class="index % 2 != 0 ? 'bg-gray-300' : ''"
        >
          <td class="border px-4 py-2 font-semibold">
            {{ name }}
          </td>
          <td class="border px-4 py-2">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    title: {
      type: String,
      default: ""
    },

    content: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style></style>

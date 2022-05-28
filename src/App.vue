<script setup>
import BrowseRevenueGroups from "./components/BrowseRevenueGroups.vue";
import CreateRevenueGroups from "./components/CreateRevenueGroups.vue";
</script>

<template>
  <div class="mx-auto flex justify-center space-x-10 pt-14">
    <div class="p-5 border-[3px] border-gray-300 border-opacity-80 rounded-sm w-[30%]">
      <h1 class="block font-bold text-xl">Create Revenue Group</h1>
      <CreateRevenueGroups />
    </div>
    <div class="w-[40%]">
      <h1 class="block font-bold text-xl">Browse Revenue Groups</h1>
      <BrowseRevenueGroups />
    </div>
  </div>
</template>

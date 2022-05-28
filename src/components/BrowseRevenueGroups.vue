<script setup>
import { storeToRefs } from "pinia";
import { useRevenueStore } from "../store/useRevenueStore";
import DeleteLogo from "../assets/DeleteLogo.vue";

const revenueStore = useRevenueStore();
const { browseRevenues, getBrowseRevenues } = storeToRefs(revenueStore);
</script>

<template>
  <div v-if="browseRevenues.length > 0">
    <div class="border-[3px] border-gray-300 border-opacity-80 rounded-md mt-10">
      <div class="p-2">
        <div class="flex items-center w-full justify-between">
          <h1 class="text-sm font-semibold text-black text-opacity-60">Rule</h1>
          <h1 class="text-sm font-semibold text-black text-opacity-60">Group Name</h1>
          <h1 class="text-sm font-semibold text-black text-opacity-60">Group Description</h1>
          <h1 class="text-sm font-semibold text-black text-opacity-60">Action</h1>
        </div>
      </div>

      <div class="bg-blue-200 w-full px-3 bg-opacity-30">
        <div
          v-for="revenue in getBrowseRevenues"
          :key="revenue.id"
          class="flex items-center w-full space-x-3 justify-between pb-2 pt-2"
        >
          <div class="text-sm font-semibold text-black text-opacity-70">{{ revenue.id }}</div>
          <div class="text-sm font-semibold text-black text-opacity-70">{{ revenue.name }}</div>
          <div class="text-sm font-semibold text-black text-opacity-70">{{ revenue.description }}</div>
          <button @click.prevent="revenueStore.deleteRevenue(revenue)">
            <DeleteLogo class="text-black text-opacity-20 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Please submit new group</h1>
  </div>
</template>

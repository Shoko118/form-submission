<script setup>
import { storeToRefs } from "pinia";
import { useRevenueStore } from "../store/useRevenueStore";
import AddLogo from "../assets/AddLogo.vue";
import AddLogoRounded from "../assets/AddLogoRounded.vue";
import DeleteLogo from "../assets/DeleteLogo.vue";
import DeleteLogoRounded from "../assets/DeleteLogoRounded.vue";

const revenueStore = useRevenueStore();
const {
  modelName,
  modelDescription,
  createRevenues,
  modelRuleDescription,
  newModelRuleDescription,
  rulesInput,
  newRules,
  rulesArray,
} = storeToRefs(revenueStore);
</script>

<template>
  <form>
    <div class="w-[100%] flex-col relative" v-for="revenue in createRevenues" :key="revenue.id">
      <label for="Group name" class="block font-semibold text-base mt-10 mb-2">Group Name</label>
      <input
        type="text"
        placeholder="Group name"
        v-model.trim="modelName"
        class="w-full border-[2px] border-gray-300 border-opacity-100 rounded-md text-sm form-input"
      />
      <label class="block font-semibold text-base mt-5 mb-2" for="Group description">Group Description</label>
      <textarea
        type="text"
        placeholder="Group description"
        v-model.trim="modelDescription"
        spellcheck="true"
        class="w-full border-[2px] border-gray-300 border-opacity-100 rounded-md text-sm form-input pb-10"
      />
      <!-- <div><input type="checkbox" /> Speicial group</div> -->
      <div class="flex justify-between items-center">
        <h2 class="block font-semibold text-base mt-5">Rules</h2>
        <div class="bg-blue-100 rounded-full px-3 py-1.5 flex items-center mt-5">
          <AddLogo class="w-5 h-5 mr-2" />
          <button
            class="font-semibold text-base text-blue-500"
            @click.prevent="revenueStore.addRuleGroup(createRevenues)"
          >
            Add
          </button>
        </div>
      </div>

      <div
        class="mt-3 pb-6 p-2 bg-clip-border border-slate-300 border-dashed border-[2px]"
        v-for="(rule, index) in revenue.rules"
        :key="rule.id"
      >
        <h3 class="font-semibold text-sm text-black">Rule {{ rule.jobId }}</h3>
        <input
          type="text"
          v-model.trim="modelRuleDescription"
          class="mt-2 w-[80%] border-[2px] border-gray-300 border-opacity-100 rounded-md form-input"
        />
        <button @click.prevent="revenueStore.addRules">
          <AddLogoRounded class="ml-5 w-5 h-5" />
        </button>
        <input
          type="text"
          v-model.trim="newModelRuleDescription"
          v-for="newRule in rulesInput"
          :key="newRule"
          :disabled="newModelRuleDescription"
          class="w-[80%] border-[2px] border-gray-300 border-opacity-100 rounded-md form-input"
        />
        <button @click.prevent="revenueStore.removeRuleInput(index)">
          <DeleteLogoRounded v-for="newRule in rulesInput" :key="newRule" class="ml-5 w-5 h-5 mt-6" />
        </button>
      </div>
    </div>

    <div v-if="newRules.length >= 0" class="flex-col items-center">
      <div
        v-for="rule in rulesArray"
        :key="rule"
        class="p-2 pb-6 bg-clip-border border-slate-300 border-dashed border-[2px] mt-7"
      >
        <h3 class="font-semibold text-sm text-black">Rule {{ rule.newJobId }}</h3>

        <input
          type="text"
          v-for="rule in rulesArray"
          :key="rule"
          :disabled="newModelRuleDescription"
          class="w-[80%] border-[2px] border-gray-300 border-opacity-100 rounded-md form-input"
        />
        <button class="text-red-500 font-bold" @click.prevent="revenueStore.deleteNewRules(rule)">
          <DeleteLogoRounded v-for="rule in rulesArray" :key="rule" class="ml-5 w-5 h-5 mt-5" />
        </button>
      </div>
    </div>
    <div class="text-right mt-5">
      <button
        class="bg-blue-700 px-3 py-2 text-white rounded-md hover:bg-blue-600"
        @click.prevent="revenueStore.onSubmit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

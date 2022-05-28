import { defineStore } from "pinia";

export const useRevenueStore = defineStore({
  id: "revenueStore",
  state: () => ({
    modelName: "",
    modelDescription: "",
    modelRuleDescription: "",
    newModelRuleDescription: [],
    revenueId: 0,
    ruleId: 0,
    newJobId: 1,
    rulesInput: [],
    browseRevenues: [],
    rulesArray: [],
    newRules: [
      {
        newJobId: 2,
        jobRuleDescription: "ads",
      },
    ],
    createRevenues: [
      {
        id: 1,
        name: "",
        description: "",
        rules: [
          {
            jobId: 1,
            jobRuleDescription: "",
          },
        ],
      },
    ],
  }),
  getters: {
    getBrowseRevenues(state) {
      return state.browseRevenues.sort((itemA, itemB) => {
        console.log("YO", itemA.id, itemB.id);
        if (itemA.id > itemB.id) return 1;
      });
    },
  },
  actions: {
    onSubmit() {
      if (this.modelName === "") return;
      if (this.modelDescription === "") return;
      if (this.modelRuleDescription === "") return;

      const pushCreateRevenues = {
        id: (this.revenueId += 1),
        name: this.modelName,
        description: this.modelDescription,
        rules: { id: (this.ruleId += 1), ruleDescription: this.modelRuleDescription },
      };

      // console.log(pushCreateRevenues);
      this.browseRevenues.push(pushCreateRevenues);

      this.modelName = "";
      this.modelDescription = "";
      this.modelRuleDescription = "";
    },
    addRules() {
      if (this.rulesInput.length >= 1) return alert("you can't add more");

      this.rulesInput.push(this.newModelRuleDescription);
    },
    addRuleGroup() {
      const pushNewRules = {
        newJobId: (this.newJobId += 1),
        jobRuleDescription: this.jobRuleDescription,
      };

      if (this.rulesArray.length >= 1) return alert("you can't add more");

      this.rulesArray.push(pushNewRules);
    },
    removeRuleInput(index) {
      this.rulesInput.splice(index, 1);
    },
    deleteRevenue(revenue) {
      this.browseRevenues = this.browseRevenues.filter((item) => item.id !== revenue.id);
    },
    deleteNewRules(rule) {
      // this.rulesArray.sort((itemA, itemB) => {
      //   if (itemA.newJobId === itemB.newJobId) return 0;
      //   if (itemA.newJobId > itemB.newJobId) return 1;
      //   if (itemA.newJobId < itemB.newJobId) return -1;
      // });

      // this.rulesArray.forEach((item) => {
      //   console.log(` THE ID ${item.newJobId} `);
      // });

      this.rulesArray = this.rulesArray.filter((item) => item.newJobId !== rule.newJobId);
    },
  },
});

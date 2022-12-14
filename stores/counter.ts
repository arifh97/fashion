import { defineStore } from "pinia";

export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions:{
    increment(example = 1){
      this.count += example
    },
    decrement(example = 1){
      if(this.count!=0){
        this.count -= example
      }
    }
  }
})
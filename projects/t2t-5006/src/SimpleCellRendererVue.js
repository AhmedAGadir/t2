import Vue from 'vue';

export default Vue.extend({
  template: `<div><img src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png">{{displayValue}}</img></div>`,

  data: function () {
    return {
      displayValue: '',
    };
  },
  beforeMount() {
    this.displayValue =  this.params.value 
  },
  methods: {
    medalUserFunction() {
      console.log(
        `user function called for medal column: row = ${
          this.params.rowIndex
        }, column = ${this.params.column.getId()}`
      );
    },
  },
});
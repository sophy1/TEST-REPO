    import Vue from 'vue';

    new Vue({
      el: '#app',
      template: '<div>{{ prevYear}} {{ nextYear }}</div>',
      data: {
        currentYear: new Date().getFullYear()
      },
      computed: {
        prevYear() { // VUE_MISSING_RETURN_VALUE_IN_COMPUTED
          this.currentYear - 1;
        },
        nextYear: {
          get() { // VUE_MISSING_RETURN_VALUE_IN_COMPUTED
            this.currentYear + 1;
          },
          set(nextYear) {
            this.currentYear = nextYear - 1;
          }
        }
      }
    });

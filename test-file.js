    import Vue from 'vue';

    Vue.component('Hello', {
      propsData: { // VUE_MISPLACED_OPTION alarm because 'propsData' option is used in a Vue component option.
        msg: 'hello'
      },
      template: '<div>{{ msg }}</div>'
    });

    new Vue({
      el: '#app',
      template: '<Hello msg="hi" />'
    });

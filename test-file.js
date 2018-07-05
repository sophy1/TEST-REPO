import Vue from 'vue';

// Example 1
new Vue({
  el: '#app',
  data: {
    $options: [ // VUE_RESERVED_PROPERTY_IN_OPTION alarm because the '$options' property is predefined in a Vue instance.
      { id: 'opt1', name: 'my option 1' },
      { id: 'opt2', name: 'my option 2' }
    ]
  },
  methods: {
    $set() { // VUE_RESERVED_PROPERTY_IN_OPTION alarm because the '$set' method is predefined in a Vue instance.
      // do something
    }
  },
  template: '<div @click="$set"><div v-for="opt in $options" :key="opt.id">{{ opt.name }}</div></div>'
});

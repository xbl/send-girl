<template>
  <v-tabs>
    <v-tabs-bar dark>
      <v-tabs-item
        v-for="i in tabs"
        :key="'tab-title-' + i.name"
        :href="'#tab-' + i.name"
      >
        {{ i.name }}
      </v-tabs-item>
      <v-tabs-item>
        <v-icon>add</v-icon>
      </v-tabs-item>
      <v-menu>
        <v-tabs-item slot="activator">
          <v-icon>toc</v-icon>
          <v-icon>arrow_drop_down</v-icon>
        </v-tabs-item>
        <v-list v-for="n in 4" v-bind:key="n">
          <v-list-tile @click="alert(1)">Item {{ n }}</v-list-tile>
        </v-list>
      </v-menu>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in tabs"
        :key="'tab-content' + i.name"
        :id="'tab-' + i.name"
      >
        <v-card>
          <v-toolbar dense>
            <v-select
              v-bind:items="methods"
              v-model="i.method"
              hide-details
              single-line
            ></v-select>
            <v-text-field v-model="i.url" hide-details single-line label="Enter request URL"></v-text-field>
            <v-btn color="grey lighten-1">Params</v-btn>
            <v-btn color="primary" @click="send(i)" >Send</v-btn>
            <v-btn color="primary">Save</v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>{{ i.name }}</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
</template>
<script>
import request from 'superagent/superagent';

export default {
  data() {
    return {
      text: 'Welcome to Your Vue.js App!',
      tabs: [{
        name: 'New Tab1',
        method: 'GET',
      }, {
        name: 'New Tab2',
        method: 'GET',
      }, {
        name: 'New Tab3',
        method: 'GET',
      }],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    };
  },
  methods: {
    send(item) {
      const agent = request.agent();
      agent[item.method.toLowerCase()](item.url)
        .end((err, res) => {
          /* eslint-disable no-console */
          console.log(res);
        });
    },
  },
};
</script>

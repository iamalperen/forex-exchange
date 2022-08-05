<template>
  <div class="selector-container">
    <select v-model="state.selectedExchange" @change="onExchangeSelect($event)">
      <option disabled value="">Select Exchange</option>
      <option v-for="exchange in state.exchangeList" v-bind:key="exchange" :value="exchange">{{
          exchange.toUpperCase()
        }}
      </option>
    </select>
    <select v-model="state.selectedSymbol" @change="onSymbolSelect($event)">
      <option disabled value="">Select Symbol</option>
      <option v-for="symbol in state.symbolList" v-bind:key="symbol.symbol" :value="symbol.displaySymbol">
        {{ symbol.displaySymbol.toUpperCase() }}
      </option>
    </select>
  </div>

</template>


<script>
import {getExchanges, getSymbols} from "@/services/finnhub.service";
import { state } from '../state/store';

export default {
  name: "PageSelectors",
  data() {
    return {
      state
    }
  },
  methods: {
    onExchangeSelect(event) {
      this.state.selectedSymbol = '';
      getSymbols(event.target.value).then(data => {
        this.state.symbolList = data;
      });
    },
    onSymbolSelect(event) {
      this.state.selectedSymbol = event.target.value;
    },
  },
  mounted() {
    getExchanges().then(data => {
      this.state.exchangeList = data;
    });
  }
}
</script>

<style scoped>

.selector-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
}

select {
  display: block;
  margin: 10px;
  background-color: white;
  border: thin solid #c6c6da;
  border-radius: 4px;
  font: inherit;
  line-height: 1.5em;
  padding: 10px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .selector-container {
    flex-direction: column;
  }

  select {
    margin: 10px 0;
  }
}

</style>
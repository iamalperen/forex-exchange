<template>
  <div class="chart-container">
    <div class="chart-body">
      <div class="details">
        <div class="details-top">
          <div class="flag">
            <div
                :class="`currency-flag currency-flag-xl currency-flag-${state.selectedSymbol.split('/')[0].toLowerCase()}`"></div>
          </div>
          <div class="flag">
            <div
                :class="`currency-flag currency-flag-xl currency-flag-${state.selectedSymbol.split('/')[1].toLowerCase()}`"></div>
          </div>
          <div class="exchange">{{ state.selectedExchange }}</div>
        </div>
        <div class="currency-pair">{{ state.selectedSymbol }}</div>
      </div>
      <div class="price">
        <div class="current-price">
          {{ state.selectedSymbol.split('/')[0] }}
          {{ state.selectedSymbolClosePrices[state.selectedSymbolClosePrices.length - 1]?.toFixed(2) }}
        </div>
        <div :class="[priceChange > 0 ? 'up' : 'down', 'price-change']">
          <i :class="[priceChange > 0 ? 'up' : 'down', 'arrow']"/>
          {{ priceChange }}
        </div>
      </div>
      <div class="chart-wrapper">
        <LineChartComponent/>
      </div>
    </div>
    <div class="chart-footer">
      <button :class="[state.selectedInterval === '15' ? 'active' : '', 'interval']" @click="() => getSymbolData('15')">
        15M
      </button>
      <button :class="[state.selectedInterval === '60' ? 'active' : '', 'interval']" @click="() => getSymbolData('60')">
        1H
      </button>
      <button :class="[state.selectedInterval === 'D' ? 'active' : '', 'interval']" @click="() => getSymbolData('D')">
        1D
      </button>
      <button :class="[state.selectedInterval === 'W' ? 'active' : '', 'interval']" @click="() => getSymbolData('W')">
        1W
      </button>
      <button :class="[state.selectedInterval === 'M' ? 'active' : '', 'interval']" @click="() => getSymbolData('M')">
        1M
      </button>
    </div>
  </div>
</template>

<script>
import {state} from '../state/store';
import {getSymbolCandles} from "@/services/finnhub.service";
import LineChartComponent from '@/components/LineChartComponent'

export default {
  name: "PageChart",
  components: {
    LineChartComponent
  },
  data() {
    return {
      state,
      priceChange: ''
    }
  },
  methods: {
    getSymbolData(int) {
      state.selectedInterval = int;
      getSymbolCandles(state.selectedSymbol, int).then(data => {
        state.selectedSymbolClosePrices = data['c'];
      });
    }
  },
  watch: {
    'state.selectedSymbol': {
      handler() {
        getSymbolCandles(state.selectedSymbol, 'D').then(data => {
          state.selectedSymbolClosePrices = data['c'];
        });
      },
      deep: true
    },
    'state.selectedSymbolClosePrices': {
      handler() {
        const lastPrice = state.selectedSymbolClosePrices[state.selectedSymbolClosePrices.length - 1];
        const firstPrice = state.selectedSymbolClosePrices[0];
        this.priceChange = (lastPrice - firstPrice).toFixed(2);
      },
      deep: true
    }
  },
  beforeMount() {
    if (state.selectedSymbol) {
      getSymbolCandles(state.selectedSymbol, 'D').then(data => {
        state.selectedSymbolClosePrices = data['c'];
      });
    }
  }
}
</script>

<style scoped>

.chart-container {
  flex: 1;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #eff2f5;
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
}

.chart-body {
  position: relative;
}

.details {
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
}

.price {
  position: absolute;
  right: 0;
  top: 0;
}

.chart-wrapper {
  width: 100%;
  height: 300px;
  padding-top: 100px
}

.details-top {
  display: flex;
  align-items: center;
  justify-content: center;
}

.details-top > * {
  margin-right: 10px;
}

.exchange {
  font-size: 16px;
}

.exchange:first-letter {
  text-transform: uppercase;
}

.currency-pair {
  font-size: 32px;
}

.chart-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.interval {
  width: 60px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

.interval.active {
  background-color: #eaeaea;
}

.current-price {
  font-size: 24px;
}

.price-change.up {
  color: green;
}

.price-change.down {
  color: red;
}

.arrow {
  display: inline-block;
  margin-right: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  padding: 3px;
}

.arrow.up {
  border-color: green;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.arrow.down {
  border-color: red;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

</style>
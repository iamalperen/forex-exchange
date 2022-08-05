<template>
  <LineChart ref="lineRef" :chartData="testData" :options="options" :height="300" />
</template>

<script>
import { computed, defineComponent, ref, watch, toRefs } from 'vue';
import {LineChart} from 'vue-chart-3';
import {Chart, registerables} from "chart.js";
import {state} from "@/state/store";

Chart.register(...registerables);

export default defineComponent({
  name: 'LineChartComponent',
  components: {LineChart},
  setup() {
    const data = ref([]);
    const lineRef = ref();

    const options = ref({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        },
      },
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
    });

    const testData = computed(() => ({
      labels: data.value,
      datasets: [
        {
          fill: true,
          data: data.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    }));

    let stateRef = toRefs(state)

    watch(() => stateRef, (currentValue) => {
          const chartDataArr = (Object.keys(currentValue.selectedSymbolClosePrices.value).map(key => currentValue.selectedSymbolClosePrices.value[key]));
          data.value = chartDataArr;
        },
        { deep: true }
    );

    return { testData, lineRef, options };
  },
  created() {

  }
});
</script>
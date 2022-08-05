<template>
  <main>
    <div class="container">
      <div class="selectors">
        <PageSelectors/>
      </div>
      <div class="chart">
        <PageChart v-if="state.selectedSymbol"/>
        <div v-if="!state.selectedSymbol" class="no-data">Please select an exchange and symbol pair.</div>
      </div>
    </div>
  </main>
</template>

<script>
import PageSelectors from "@/components/PageSelectors";
import PageChart from "@/components/PageChart";
import {state} from "@/state/store";

export default {
  name: "PageContent",
  data() {
    return {
      state
    }
  },
  components: {
    PageSelectors,
    PageChart
  }
}
</script>

<style scoped>

main {
  margin-bottom: 40px;
}

main .container {
  display: flex;
  flex-direction: column;
  background-color: #F5F8FA;
}

.selectors {
  display: flex;
  flex: 1;
}

.chart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.no-data {
  text-align: center;
}

@media only screen and (min-width: 768px) {
  main .container {
    flex-direction: row;
  }

  .selectors {
    flex: 2;
  }

  .chart {
    flex: 6;
  }
}

</style>
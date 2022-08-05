<template>
  <header>
    <div class="container">
      <h1>
        Forex Exchange
      </h1>
      <span>Checkout the current price on different exchanges for a currency pair</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style scoped>

header {
  width: 100%;
  background-color: #ffffff;
  height: 75px;
  padding: 0;
  margin-bottom: 40px;
  box-shadow: 0px 10px 30px 0px rgb(82 63 105 / 5%);
}

header .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #181c32;
}

h1 {
  font-size: 18px;
  margin: 0;
}

span {
  font-size: 8px;
  color: #5a5656;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 24px;
  }

  span {
    font-size: 12px;
  }
}

</style>
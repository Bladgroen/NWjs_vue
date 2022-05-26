<template>
  <div class="box">
    <div class="img">
    </div>
    <div class="text-box">
      <p class="text"></p>
      <p class="sub-text"></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "transitionBox",

}

</script>

<style scoped>

.img{
  width: 2em;
  height: 2em;
  margin-top: 0.5em;
  margin-left: 1em;
  border-radius: 50%;
  animation: pulse-bg 1s infinite;
}
.box{
  display: flex;
  width: 15em;
  height: 5em;
  background-color: #2b2b2b;
  margin-bottom: 1em;
  border-radius: 15px;
}
.text{

  margin: 0;
  margin-top: 0.5em;

  width: 80px;
  height: 23px;
  animation: pulse-bg 1s infinite;
}
.sub-text{

  width: 80px;
  height: 23px;
  animation: pulse-bg 1s infinite;
}
.text-box{
  margin-left: 1em;
}

@keyframes pulse-bg {
  0% { background-color: #ddd; }
  50% { background-color: #aaa; }
  100% { background-color: #ddd; }
}


</style>


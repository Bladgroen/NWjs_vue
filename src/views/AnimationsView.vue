<template>
  <div>
    <button class="toggleButton" v-on:click="show = !show">
      Toggle
    </button>
    <div class="group" >
      <transition v-for="users in users" :key="users" class="box" name="test" mode="out-in">
        <transition-box v-if="show"/>
      </transition>
    </div>

    <animation-background />
    <div class="marquee-text">
      <marquee-text >
        <p>test Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
      </marquee-text>
    </div>
    <a href="/video">test</a>
    <a href="/login">naar login</a>
  </div>
</template>

<script>
import AnimationBackground from "@/components/animationBackground";
import TransitionBox from "@/components/transitionBox";
import MarqueeText from 'vue-marquee-text-component'

export default {
  name: "AnimationsView",
  components: {TransitionBox, AnimationBackground, MarqueeText},
  data() {
    return{
      show: false,
      users: 20,
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style scoped>
.toggleButton {
  margin-bottom: 1em;
}
.marquee-text{
  background-color: white;
}
.box{
  margin-left: 20px;
}
.group{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.slide-fade-enter-active {
  transition: all 5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.test-enter-from,
.test-leave-to{
  transform: translateY(-500px) rotate(-200deg);
  opacity: 0;
}
.test-enter-active,
.test-leave-active{
  transition:  transform 0.5s, all 0.3s ease-out ;
}

</style>


<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 65 65"
    fill="none"
    stroke="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.5 37.834V48.5007"
      stroke="black"
      stroke-width="5.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="black"
    />
    <path
      d="M38.2913 5.83398C39.7057 5.83429 41.0621 6.39639 42.062 7.39665L52.27 17.6047C53.2703 18.6046 53.8324 19.9609 53.8327 21.3753V53.834C53.8327 55.2485 53.2708 56.605 52.2706 57.6052C51.2704 58.6054 49.9138 59.1673 48.4994 59.1673H16.4993C15.0849 59.1673 13.7283 58.6054 12.7281 57.6052C11.7279 56.605 11.166 55.2485 11.166 53.834V11.1673C11.166 9.75283 11.7279 8.39628 12.7281 7.39608C13.7283 6.39589 15.0849 5.83398 16.4993 5.83398H38.2913Z"
      stroke="currentColor"
      stroke-width="5.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.834 37.834H43.1673"
      stroke="black"
      stroke-width="5.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.5007 27.166H24.5007C23.0279 27.166 21.834 28.3599 21.834 29.8327V45.8327C21.834 47.3054 23.0279 48.4993 24.5007 48.4993H40.5007C41.9734 48.4993 43.1673 47.3054 43.1673 45.8327V29.8327C43.1673 28.3599 41.9734 27.166 40.5007 27.166Z"
      stroke="black"
      stroke-width="5.33333"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      id="rect-1"
      class="blink blur"
      x="34"
      y="40"
      width="7"
      height="7"
      fill="red"
    />
    <rect
      id="rect-2"
      class="blink blur"
      x="24"
      y="40"
      width="7"
      height="7"
      fill="green"
    />
    <rect
      id="rect-3"
      class="blink blur"
      x="24"
      y="30"
      width="17"
      height="5"
      fill="#f89a0c"
    />
  </svg>
</template>
<style lang="css" scoped>
.blur {
  filter: blur(1px);
}

.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
#rect-1 {
  animation-delay: 300ms;
}
#rect-2 {
  animation-delay: 100ms;
}
#rect-3 {
  animation-delay: 800ms;
}
</style>

<script setup lang="ts"></script>
<template>
  <div class="icon-wrapper">
    <svg
      id="check-book"
      width="48"
      height="48"
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 56.3333V19"
        stroke="#053326"
        stroke-width="5.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="book-path"
        d="M58.6673 16.5V11.1667C58.6673 10.4594 58.3864 9.78115 57.8863 9.28105C57.3862 8.78095 56.7079 8.5 56.0007 8.5H42.6673C39.8383 8.5 37.1252 9.62381 35.1248 11.6242C33.1245 13.6246 32.0007 16.3377 32.0007 19.1667C32.0007 16.3377 30.8768 13.6246 28.8765 11.6242C26.8761 9.62381 24.163 8.5 21.334 8.5H8.00065C7.29341 8.5 6.61513 8.78095 6.11503 9.28105C5.61494 9.78115 5.33398 10.4594 5.33398 11.1667V45.8333C5.33398 46.5406 5.61494 47.2189 6.11503 47.719C6.61513 48.2191 7.29341 48.5 8.00065 48.5H24.0007C26.1224 48.5 28.1572 49.3429 29.6575 50.8431C31.1578 52.3434 32.0007 54.3783 32.0007 56.5C32.0007 54.3783 32.8435 52.3434 34.3438 50.8431C35.8441 49.3429 37.8789 48.5 40.0007 48.5H56.0007C56.7079 48.5 57.3862 48.2191 57.8863 47.719C58.3864 47.2189 58.6673 46.5406 58.6673 45.8333V42.3667"
        stroke="#053326"
        stroke-width="5.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g transform="translate(44, 20)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 28 28"
        >
          <path
            id="pencil"
            d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
            fill="#053326"
          />
        </svg>
      </g>
    </svg>
  </div>
</template>
<style lang="css" scoped>
@keyframes left-right {
  from {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(-20deg);
  }
}

@keyframes gradient-color {
  from {
    fill: red;
  }
  to {
    fill: none;
  }
}

#pencil {
  transform-origin: center;
  animation: left-right 1.5s ease-in infinite;
}
</style>

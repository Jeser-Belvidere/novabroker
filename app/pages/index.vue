<template>
  <div>
    <div class="wrapper">
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="70"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            ОЦЕНКА ТС
          </text>
        </svg>
      </div>
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="30"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            ОФОРМЛЕНИЕ
          </text>
        </svg>
      </div>
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="40"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            УВЭОС - ГЛОНАСС
          </text>
        </svg>
      </div>
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="70"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            ЛАБОРАТОРИЯ
          </text>
        </svg>
      </div>
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="30"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            СБКТС
          </text>
        </svg>
      </div>
      <div class="text-container">
        <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMid slice">
          <text
            x="60"
            y="25"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Arial"
            font-size="9"
            fill="rgb(218, 187, 141)"
          >
            ЭПТС
          </text>
        </svg>
      </div>
    </div>
    <canvas id="flashlight" ref="flashlight" :class="isMounted ? '' : 'green-bkg'"/>
    <div class="title-wrapper">
      <div class="title">
        <h1>NOVABROKER</h1>
        <h2>ТАМОЖЕННЫЕ УСЛУГИ</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, ref } from "vue";
const isMounted = ref(false);
const canvasFlashlight = useTemplateRef<HTMLCanvasElement>("flashlight");

const addFlashlight = (canvas: HTMLCanvasElement | null) => {
  if (!canvas) {
    console.error("Canvas is null");
    return;
  }

  const sizes = {
    width: window.innerWidth,
    heigth: window.innerHeight,
  };

  canvas.width = sizes.width;
  canvas.height = sizes.heigth;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.fillStyle = "rgba(5, 51, 38, 1)";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const radius = 150;

    ctx.fillStyle = "rgba(5, 51, 38, 1)";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();
    const radialGradient = ctx.createRadialGradient(x, y, 1, x, y, radius);
    radialGradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    radialGradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.globalCompositeOperation = "xor";

    ctx.fillStyle = radialGradient;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  });

  window.addEventListener('touchmove', (event) => {
    const x = event.touches[0]?.clientX ?? 0;
    const y = event.touches[0]?.clientY ?? 0;

    const radius = 150;

    ctx.fillStyle = "rgba(5, 51, 38, 1)";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();
    const radialGradient = ctx.createRadialGradient(x, y, 1, x, y, radius);
    radialGradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
    radialGradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.globalCompositeOperation = "xor";

    ctx.fillStyle = radialGradient;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  })
};
//add onResize
onMounted(() => {
  addFlashlight(canvasFlashlight.value);
  isMounted.value = true;
});
</script>

<style lang="css" scoped>
.title-wrapper {
  z-index: 2;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--warm-beige);
      font-weight: 600;
      font-size: 80px;
      letter-spacing: 10px;
      @media screen and (width <=440px) {
        font-size: 40px;
      }
    }

    h2 {
      color: var(--light-grey);
      font-weight: 400;
      letter-spacing: 10px;
      @media screen and (width <=440px) {
        font-size: 20px;
      }
    }
  }
}

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--dark-forest-green);
  z-index: 0;
  display: grid;
  grid-template-rows: auto;
  width: 100vw;
  height: 100vh;
}

.text-container {
  display: flex;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.text-container svg {
  width: 100%;
  height: 100%;

  text {
    @media screen and (width <=1200px) {
      font-size: 13px;
    }

    @media screen and (width <=400px) {
      font-size: 18px;
    }
  }
}

.green-bkg {
  background-color: var(--dark-forest-green);
}

#flashlight {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
}
</style>

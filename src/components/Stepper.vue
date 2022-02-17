<template>
  <div id="step-control" class="stepper-panel">
    <div class="stepper-container">
      <div
        class="step checked"
        :class="{
          active: currentStep === 1,
          checked: currentStep === 2 || currentStep === 3,
        }"
      >
        <div class="circle-container"></div>
        <div class="label-container">寄送地址</div>
        <span class="connect-line"></span>
      </div>
      <div
        class="step step-center"
        :class="{ active: currentStep === 2, checked: currentStep === 3 }"
      >
        <div class="circle-container circle--2"></div>
        <div class="label-container">運送方式</div>
        <span class="connect-line-1"></span>
      </div>
      <div class="step step-right" :class="{ active: currentStep === 3 }">
        <div class="circle-container circle--3"></div>
        <div class="label-container">付款資訊</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>
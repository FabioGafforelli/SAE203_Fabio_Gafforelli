<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
export default {
    name:"App",
    components: { header1, footer1 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
        <div class="flex justify-start items-start w-auto relative px-auto py-auto bg-gray-50 border border-white"
>
  <p class="flex text-red-600 text-center text-base">Histoire</p>
  <svg
    width="126"
    height="54"
    viewBox="0 0 126 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-grow h-[53.11px] relative"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M99.7551 44.2595H26.2694C20.4716 44.2595 15.7715 42.2779 15.7715 39.8336L15.7715 13.2779C15.7715 10.8335 20.4716 8.85193 26.2694 8.85193L78.7592 8.85193C84.5571 8.85193 89.2572 10.8335 89.2572 13.2779V15.4909M99.7551 44.2595C93.9573 44.2595 89.2572 42.2779 89.2572 39.8336L89.2572 15.4909M99.7551 44.2595C105.553 44.2595 110.253 42.2779 110.253 39.8336V19.9168C110.253 17.4724 105.553 15.4909 99.7551 15.4909L89.2572 15.4909M68.2613 8.85193L47.2654 8.85193M36.7674 35.4076H68.2613M36.7674 17.7038H68.2613V26.5557H36.7674V17.7038Z"
      stroke="#111827"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</div>
    </div>

</template>
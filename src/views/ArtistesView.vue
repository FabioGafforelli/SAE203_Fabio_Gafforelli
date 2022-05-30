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
        <p class="m-auto w-[311px] h-[81px] text-2xl text-center text-black">
  Retrouvez tous nos artistes en cliquant sur leur fiche
</p>
<div class="grid grid-cols-2">
    <div class="flex justify-start items-start gap-[43px]">
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
    <img
      src="/public/images/Artistes-FF.png"
      class="flex-grow-0 flex-shrink-0 relative object-cover"
    />
    <div class="flex-grow-0 flex-shrink-0 w-[151px] h-7 relative">
      <div class="relative sm:text-base lg bg-[#efefef]"></div>
      <p class="w-[150px] h-7 absolute left-px top-0 text-xs text-left text-[#7d7d7d]">
        FOREVER THE FALLEN
      </p>
    </div>
  </div>
  <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
  <img src="/public/images/Artistes-TW.png" class="flex-grow-0 flex-shrink-0 w-[132px] h-[132px] object-cover" />
  <div class="flex-grow-0 flex-shrink-0 w-[133px] h-7 relative">
    <div class="w-[133px] h-5 absolute left-[-1px] top-[3px] bg-[#efefef]"></div>
    <p class="w-[93px] h-7 absolute left-5 top-0 text-base text-left text-[#7d7d7d]">THIS WOLF</p>
  </div>
</div>
</div>
</div>
<br>
<div class="grid grid-cols-2">
    <div class="self-stretch flex-grow relative">
  <img
    src="/public/images/Artistes-Rammstein.png"
    class="w-[132px] h-[132px] absolute left-[-1px] top-[-1px] object-cover"
  />
  <div class="w-[133px] h-7 absolute left-[-1px] top-[107px]">
    <div class="w-[133px] h-5 absolute left-[-1px] top-[3px] bg-[#efefef]"></div>
    <p class="w-[124px] h-7 absolute left-[7px] top-0 text-base text-center text-[#7d7d7d]">
      RAMMSTEIN
    </p>
  </div>
</div>
<div class="w-[175px] h-[136px] relative">
  <img
    src="/public/images/Artistes-ItLives.png"
    class="w-[132px] h-[132px] absolute left-[-1px] top-[-1px] object-cover"
  />
  <div class="w-[132px] h-5 absolute left-[-1px] top-[111px] bg-[#efefef]"></div>
  <p class="w-[172px] h-7 absolute left-[3px] top-[108px] text-xs text-left text-[#7d7d7d]">
    IT LIVES IT BREATHES
  </p>
</div>
</div>
<div class="grid grid-cols-2">
    <div class="flex-grow-0 flex-shrink-0 w-[132px] h-[134px] relative">
  <img
    src="/public/images/Artistes-PD1.png"
    class="w-[131.01px] h-[132px] absolute left-[-0.01px] top-[-1px] object-cover"
  />
  <div class="w-[132px] h-7 absolute left-[-1px] top-[105px]">
    <div class="w-[132px] h-5 absolute left-[-1px] top-[5px] bg-[#efefef]"></div>
    <p class="w-[123.07px] h-7 absolute left-[6.95px] top-0 text-base text-center text-[#7d7d7d]">
      Parkway Drive
    </p>
  </div>
</div>
<div class="flex-grow-0 flex-shrink-0 w-[132px] h-[134px] relative">
  <img
    src="/public/images/Artistes-PD2.png"
    class="w-[132px] h-[132px] absolute left-[-1px] top-[-1px] object-cover"
  />
  <div class="w-[132px] h-7 absolute left-[-1px] top-[105px]">
    <div class="w-[132px] h-5 absolute left-[-1px] top-[5px] bg-[#efefef]"></div>
    <p class="w-[122.93px] h-7 absolute left-[7.05px] top-0 text-base text-center text-[#7d7d7d]">
      Parkway Drive
    </p>
  </div>
</div>
</div>
    </div>
<footer1 />
</template>
<template>
    <figure>
        <img class="rounded-t-lg" :src="image" alt="">
        <figcaption class="flex flex-col relative px-5 py-7 border-2 border-t-0 rounded-b-lg">
            <h3 class="text-2xl text-gray-900">{{titre}}</h3>
            <address class="not-italic text-gray-500">{{ lieu }}</address>
            <div class="order-first flex items-center">
                <div class="text-2xl text-indigo-500">${{ price.toLocaleString("en-US") }}</div>
                <div class="text-gray-500 ">/months</div>
            </div>
            <hr class="border-indigo-100 border-t-2 my-2"/>
            <div class="flex justify-between text-sm">
                <div><bed class="inline-block align-top"/>4 Beds </div>
                <div><bath class="inline-block align-top"/> {{ nbrSDB }} Bathrooms </div>
                <div><dimension class="inline-block align-top"/> 6x7.5 m² </div>
            </div>
            <div class="grid place-items-center w-12 h-12 border-2 border-indigo-100 rounded-full absolute top-7 right-5">
                <heart :class="{'fill-indigo-500': favoris}"/>
            </div>
        </figcaption>
    </figure>
</template>

<script>
import bed from "./icones/Bed.vue"
import bath from "./icones/Bath.vue"
import dimension from "./icones/Dimension.vue"
import heart from "./icones/Heart.vue"
export default {
    props: {
        price: {
            type: Number,
            default: 2700,
        },
        titre: {
            type: String,
            required:true
        },
        image: String,
        nbrSDB: Number,
        lieu: String,
    },
    components: { bed, bath, dimension, heart }
}

</script>

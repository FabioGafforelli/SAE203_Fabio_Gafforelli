<template>
    <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-6 my-10   "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:rocoeursae203.fabiogafforelli.fr'">
            <label for="q" class="text-center my-4">Texte à chercher :</label>
            <input type="text" class="border bg-white border-Default/me/Noir shadow-contact" placeholder="Rechercher" id="q" name="q" x-model="q">
            <button type="submit" class="bg-Default/me/Noir px-8 py-4 my-5 bg-red-800 text-white">Rechercher</button>
        </form>
</template>
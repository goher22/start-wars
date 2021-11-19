<template>
    <v-app-bar app>
        <v-toolbar-title>Star Wars</v-toolbar-title>
        <v-container>
            <router-link to="/">
                <v-btn text>
                    Actores
                </v-btn>
            </router-link>
            <router-link to="/Contact">
                <v-btn text>
                    Contacto
                </v-btn>
            </router-link>
        </v-container>
    </v-app-bar>
</template>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
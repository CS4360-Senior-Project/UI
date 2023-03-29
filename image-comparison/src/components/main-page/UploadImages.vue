<template>
    <v-container>
        <!-- Upload Files -->
        <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">

            <v-row style="margin: 10px" justify="center">
                <h2 style="color: #125488">Upload two images to compare</h2>
            </v-row>

            <v-row justify="center">
                <v-col cols="5">
                    <div style="height:200px; border-style: dotted; border-color: #2A93D5"></div>
                    <div style="padding-top: 8px;">
                        <v-btn style="width: 100%; color: #D1EBFF"
                               color="#2A93D5">Upload Sample 1</v-btn>
                    </div>
                </v-col>

                <v-col cols="5">
                    <div style="height:200px; border-style: dotted; border-color: #2A93D5"></div>
                    <div style="padding-top: 8px">
                        <v-btn style="width: 100%; color: #D1EBFF"
                               color="#2A93D5">Upload Sample 2</v-btn>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-btn style="color: #D1EBFF; background-color: #125488">Compare Handwriting</v-btn>
            </v-row>
        </v-card>
    </v-container>
</template>
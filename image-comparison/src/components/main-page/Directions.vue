<template>
    <v-container fluid>
        <!--v-parallax src="https://mcdn.wallpapersafari.com/medium/31/54/fbX3Ei.png"></v-parallax-->
        <v-row>
            <!-- Upload Directions -->
            <v-container fluid style="margin-top: 35px">
                <h1 class="box-title pb-5" style="text-align: center; color: #125488">
                    Comparing handwriting samples
                </h1>

                <v-row justify="center">
                    <div>
                        <img
                            height="350"
                            src="../images/goodExample.jpg"
                            style="border-style: solid;
                                    border-width: 2px;
                                    border-color: #2A93D5;"/>
                        <h3 style="text-align: center; color: #2A93D5">Good Example</h3>
                    </div>
                    <div style="margin: 10px"></div>
                    <div>
                        <img
                            height="350"
                            src="../images/badExample.jpg"
                            style="border-style: solid;
                                    border-width: 2px;
                                    border-color: #2A93D5;"/>
                        <h3 style="text-align: center; color: #2A93D5">Bad Example</h3>
                    </div>
                </v-row>
                <v-row justify="center" style="margin-top: 20px; color: #125488">
                    <h2> Ensure image is clear and in jpg format</h2>
                </v-row>
            </v-container>
        </v-row>
    </v-container>
</template>
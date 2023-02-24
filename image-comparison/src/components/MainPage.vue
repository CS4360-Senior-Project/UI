<template>
    <v-container fluid>
        <!--v-parallax src="https://mcdn.wallpapersafari.com/medium/31/54/fbX3Ei.png"></v-parallax-->
        <v-row>
            <v-col  cols="6">
                <!-- Upload Directions -->
                <v-container fluid style="margin-top: 35px">
                    <h1 class="box-title pb-5" style="text-align: center; color: #9c6142">
                        Comparing handwriting samples
                    </h1>

                    <v-row justify="center">
                        <v-col cols="4">
                            <div style="height:200px;
                                        border-style: solid;
                                        border-width: 2px;
                                        border-color: #948d89;
                                        background-color: white"></div>
                            <h3 style="text-align: center; color: #6b6060">Good Example</h3>
                        </v-col>
                        <v-col cols="4">
                            <div style="height:200px;
                                        border-style: solid;
                                        border-width: 2px;
                                        border-color: #948d89;
                                        background-color: white"></div>
                            <h3 style="text-align: center; color: #6b6060">Bad Example</h3>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="color: #9c6142">
                        <h2> Ensure image is clear and in jpg format</h2>
                    </v-row>
                </v-container>
            </v-col>

            <v-col  cols="6">
                <!-- Upload Files -->
                <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">

                    <v-row style="margin: 10px" justify="center">
                        <h2 style="color: #6b6060">Upload two images to compare</h2>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="5">
                            <div style="height:200px; border-style: dotted; border-color: #9c6142"></div>
                            <div style="padding-top: 8px;">
                                <v-btn style="width: 100%; color: #e5dccf"
                                       color="#9c6142">Upload Sample 1</v-btn>
                            </div>
                        </v-col>

                        <v-col cols="5">
                            <div style="height:200px; border-style: dotted; border-color: #9c6142"></div>
                            <div style="padding-top: 8px">
                                <v-btn style="width: 100%; color: #e5dccf"
                                       color="#9c6142">Upload Sample 2</v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-btn style="color: #6b6060; background-color: #bcbcb4">Compare Handwriting</v-btn>
                    </v-row>

                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "MainPage"
    };
</script>
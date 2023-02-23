<template>
    <v-container fluid>
        <v-row>
            <v-col  cols="6">
                <!-- Upload Directions -->
                <v-container fluid >
                    <h1 class="box-title pb-5" style="text-align: center;">
                        Upload two images to compare
                    </h1>

                    <v-row justify="center">
                        <v-col cols="4">
                            <div style="height:200px;
                                        border-style: solid;
                                        background-color: #C8DBD7"></div>
                            <h3 style="text-align: center;">Good Example</h3>
                        </v-col>
                        <v-col cols="4">
                            <div style="height:200px;
                                        border-style: solid;
                                        background-color: #C8DBD7"></div>
                            <h3 style="text-align: center;">Bad Example</h3>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <h2> Ensure image is clear and in jpg format</h2>
                    </v-row>
                </v-container>
            </v-col>

            <v-col  cols="6">
                <!-- Upload Files -->
                <v-container fluid style="border-style: solid;">

                    <v-row justify="center">
                        <v-col cols="5">
                            <div style="height:200px; border-style: solid;"></div>
                            <div style="padding-top: 8px;">
                                <v-btn style="width: 100%; color: #C8DBD7"
                                       color="#3C5556">Upload Sample 1</v-btn>
                            </div>
                        </v-col>

                        <v-col cols="5">
                            <div style="height:200px; border-style: solid;"></div>
                            <div style="padding-top: 8px">
                                <v-btn style="width: 100%; color: #C8DBD7"
                                       color="#3C5556">Upload Sample 2</v-btn>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-btn>Compare Handwriting</v-btn>
                    </v-row>

                </v-container>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "MainPage"
    };
</script>
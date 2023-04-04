<!-- <template>
    <v-container>
        <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">

            <v-row style="margin: 10px" justify="center">
                <h2 style="color: #125488">Upload two images to compare</h2>
            </v-row>

            <v-row justify="center">
                <v-col cols="5">
                    <div style="height:200px; border-style: dotted; border-color: #2A93D5">
                        <!-- <div id="preview">
                            <img v-if="url" :src="url" />
                    </div>
                    <div style="padding-top: 8px">
                        <input
                            ref="file1"
                            v-on:change="handleFile1()" 
                            type="file"
                            />
                    </div>
                </v-col>

                <v-col cols="5">
                    <div style="height:200px; border-style: dotted; border-color: #2A93D5"></div>
                    <div style="padding-top: 8px">

                        <input
                            ref="file2"
                            v-on:change="handleFile2()" 
                            type="file"/>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-btn style="color: #D1EBFF; background-color: #125488">Compare Handwriting</v-btn>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import UploadService from "../services/app.js";
import { ref } from "vue"

export default{
    name:'upload-image',
    
    setup() {
        const file1 = ref(null)
        const file2 = ref(null)

        const handleFile1 = async() => {
            console.log("selected file", file1.value.files)
            // Upload to server
        }

        const handleFile2 = async() => {
            console.log("selected file", file2.value.files)
            // Upload to server
        }

        return {
            handleFile1,
            handleFile2,
            file1,
            file2
       }
    }
}
</script>

<style>
input {
	cursor: pointer;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

</style> -->

<template>
    <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">
        <v-row style="margin: 10px" justify="center">
            <h2 style="color: #125488">Upload two images to compare</h2>
        </v-row>

        <v-row>
            <!-------------------( IMAGE SAMPLE 1 )------------------------->
            <v-col cols="6">
                <div v-if="previewImage1">
                    <div>
                        <img
                            class="preview my-3"
                            :src="previewImage1"
                            alt=""
                            style="width:100%; border-style: dotted; border-color: #2A93D5" />
                    </div>
                </div>
                <div v-else style="height:310px; border-style: dotted; border-color: #2A93D5; margin-bottom: 10px;"></div>
                <label class="btn btn-default p-0">
                    <input
                        type="file"
                        accept="image/*"
                        ref="file"
                        @change="selectImage1"
                    />
                </label>
            </v-col>

            <!-------------------( IMAGE SAMPLE 2 )------------------------->
            <!-- <v-col cols="6">
                <div v-if="previewImage1">
                    <div>
                        <img
                            class="preview my-3"
                            :src="previewImage1"
                            alt=""
                            style="width:100%; border-style: dotted; border-color: #2A93D5" />
                    </div>
                </div>
                <div v-else style="height:310px; border-style: dotted; border-color: #2A93D5; margin-bottom: 10px;"></div>
                <label class="btn btn-default p-0">
                    <input
                        type="file"
                        accept="image/*"
                        ref="file"
                        @change="selectImage1"
                    />
                </label>
            </v-col> -->
        </v-row>
  
        <!------------------------ UPLOAD IMAGES -------------------------->
        <div v-if="currentImage1" class="progress" style="margin-bottom: 10px">
            <div
                class="progress-bar progress-bar-info"
                role="progressbar"
                :aria-valuenow="progress"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: progress + '%' }"
            >{{ progress }}%</div></div>

        <v-row justify="center">
            <v-col cols="6">
                <v-btn
                    :disabled="!currentImage1"
                    @click="upload"
                    style="width: 100%; color: #D1EBFF" color="#2A93D5"
                >Upload</v-btn>
            </v-col>
        </v-row>

        <div v-if="message" align-items="center" class="alert alert-secondary" role="alert" style="margin-top: 10px">
            <div style="text-align: center" justify="center">{{ message }}</div>
        </div>

    </v-card>
</template>

<script>
import UploadService from "@/services/app.js";
// import { ref } from "vue"

export default {
    name: "upload-image",
    data() {
        return {
            currentImage1: undefined,
            previewImage1: undefined,

            progress: 0,
            message: "",

            imageInfos: [],
        };
    },
    methods: {
        selectImage1() {
            this.currentImage1 = this.$refs.file.files.item(0);
            this.previewImage1 = URL.createObjectURL(this.currentImage1);
            this.progress = 0;
            this.message = "";
        },

        upload() {
            this.progress = 0;

            UploadService.upload(this.currentImage1, (event) => {
                this.progress = Math.round((100 * event.loaded) / event.total);
            })
                .then((response) => {
                this.message = response.data.message;
                return UploadService.getFiles();
                })
                .then((images) => {
                this.imageInfos = images.data;
                })
                .catch((err) => {
                this.progress = 0;
                this.message = "Could not upload the image! " + err;
                this.currentImage1 = undefined;
            });
        },
    },

    mounted() {
        UploadService.getFiles().then(response => {
        this.imageInfos= response.data;
        });
    }
};
</script>

<style>
input {
	cursor: pointer;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}

</style>
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
                <div v-else style="height:313px; border-style: dotted; border-color: #2A93D5; margin-bottom: 13px;"></div>
                <label class="btn btn-default p-0">
                    <input
                        type="file"
                        accept="image/*"
                        ref="file1"
                        name="file1"
                        @change="selectImage1"
                    />
                </label>
            </v-col>

            <!-------------------( IMAGE SAMPLE 2 )------------------------->
            <v-col cols="6">
                <div v-if="previewImage2">
                    <div>
                        <img
                            class="preview my-3"
                            :src="previewImage2"
                            alt=""
                            style="width:100%; border-style: dotted; border-color: #2A93D5" />
                    </div>
                </div>
                <div v-else style="height:313px; border-style: dotted; border-color: #2A93D5; margin-bottom: 10px;"></div>
                <label class="btn btn-default p-0">
                    <input
                        type="file"
                        accept="image/*"
                        ref="file2"
                        name="file2"
                        @change="selectImage2"
                    />
                </label>
            </v-col>

        </v-row>
  
        <!------------------------ UPLOAD IMAGES -------------------------->
        <v-progress-linear 
            v-if="loading"
            indeterminate 
            style="margin-top: 10px;
            margin-bottom: 10px"
            color="blue"></v-progress-linear>
        <!-- <div v-if="isLoadable" class="progressInfo" style="margin-bottom: 10px">
            <div class="mb-2"
                v-for="(progressInfo, index) in progressInfo"
                :key="index">
                <span>{{ progressInfo.fileName }}</span>
                <div class="progress">
                    <div class="progress-bar progress-bar-info"
                        role="progressbar"
                        :aria-valuenow="progressInfo.percentage"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        :style="{ width: progressInfo.percentage + '%' }"
                    >{{ progressInfo.percentage }}%</div>
                </div>
            </div>
        </div> -->
    
        <v-row justify="center">
            <v-col cols="6">
                <v-btn
                    :disabled=isDisabled
                    @click="uploadFiles"
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
// import { mapGetters } from 'vuex'
// import { ref } from "vue"

export default {
    name: "upload-image",
    data() {
        return {
            currentImage1: undefined,
            previewImage1: undefined,

            currentImage2: undefined,
            previewImage2: undefined,

            selectedFiles: undefined,

            loading: false, // LOAD BAR
            progressInfo: [],
            fileInfo: [],
            message: "",
        };
    },

    computed: {
        // ..mapGetters(["images"])

        isDisabled() {
            /*----- If both files aren't added, disable button to prevent premature upload attempt -----*/
            if (!this.currentImage1 && !this.currentImage2) {
                return true
            }
        },

        isLoadable() {
            /*----- If both files are added, show loading bar -----*/
            if (this.currentImage1 && this.currentImage2) {
                return true
            }
        },
    },

    methods: {
        selectImage1() {
            this.currentImage1 = this.$refs.file1.files.item(0);
            this.previewImage1 = URL.createObjectURL(this.currentImage1);
            this.progressInfo = [];
            this.message = "";
        },

        selectImage2() {
            this.currentImage2 = this.$refs.file2.files.item(0);
            this.previewImage2 = URL.createObjectURL(this.currentImage2);
            this.progressInfo = [];
            this.message = "";
        },

        getSelectedFiles() {
            const selectedFiles = []
            selectedFiles.push(this.currentImage1)
            selectedFiles.push(this.currentImage2)
            return selectedFiles
        },

        uploadFiles() {
            this.message = "";

            this.selectedFiles = this.getSelectedFiles()
            for (let i = 0; i < this.selectedFiles.length; i++) {
                console.log("SELECTED: ", this.selectedFiles[i])
                this.upload(i, this.selectedFiles[i]);
            }

            // const formData = new FormData();
            // formData.append(this.selectedFiles[0]);
            // formData.append(this.selectedFiles[1]);

            // console.log("FILES: ", formData)

            // this.upload(formData);
        },


        // upload(file) {
        //     UploadService.upload(file)
        //     .then((response) => {
        //         let prevMessage = this.message ? this.message + "\n" : "";
        //         this.message = prevMessage + response.data.message;
        //         console.log(response.data.status);
        //     })
        //     .catch(error => {
        //         this.message = "Could not upload the files";
        //         console.log(error);
        //     });
        // }

        upload(id, file) {
            this.progressInfo[id] = { percentage: 0, fileName: file.name };
            this.loading = true
            UploadService.upload(file, (event) => {
                this.progressInfo[id].percentage = Math.round(100 * event.loaded / event.total);
            })
            .then((response) => {
                this.loading = false
                this.message = 'The percent similarity between the two images is: ' + response.data.status + "%";
                console.log(response.data.status);
            })
            .catch(error => {
                this.progressInfo[id].percentage = 0;
                this.message = "Could not upload the file: " + file.name;
                console.log(error);
            });
        }
    },
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
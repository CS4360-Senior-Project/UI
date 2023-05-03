<!-- 
REFERENCE CODE: https://stackoverflow.com/questions/54343169/how-to-download-images-without-displaying-them-using-vue-js
                https://www.positronx.io/vue-js-download-file-with-axios-example-tutorial/ -->

<template>
    <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">
        <v-row style="margin: 10px" justify="center">
            <h2 style="color: #125488">Image Processing</h2>
        </v-row>
        <v-row style="margin: 10px" justify="center">
            <h5 style="color: #2A93D5">If your image needs to be clearer, upload your image here to be preprocessed for machine learning.</h5>
        </v-row>

        <v-row justify="center">
            <v-col cols="4">
                <div v-if="previewImage">
                    <div>
                        <img
                            class="preview my-3"
                            :src="previewImage"
                            alt=""
                            style="width:100%; border-style: dotted; border-color: #2A93D5" />
                    </div>
                </div>

                <div v-else style="height:500px; border-style: dotted; border-color: #2A93D5; margin-bottom: 13px;">
                    <span style="padding-left: 40%; color: gray">Upload Image here</span>
                </div>
                <form @submit.prevent="uploadFile">
                    <v-row>
                        <v-col cols="4">
                            <input type="file" ref="fileInput">
                        </v-col>

                        <v-col cols="5"></v-col>

                        <v-col cols="3">
                            <v-btn type="submit" style="color: #D1EBFF" color="#2A93D5">Submit</v-btn>
                        </v-col>
                    </v-row>
                </form>
            </v-col>

            <v-col cols="4">
                <div v-if="imageData">
                    <img :src="imageData" style="height:614px; border-style: dotted; border-color: #2A93D5; margin-top: 10px; margin-bottom: 13px"/>
                    <v-btn style="color: #D1EBFF" color="#2A93D5" @click="downloadImg">Download</v-btn>
                </div>
                <div v-else style="height:499px; border-style: dotted; border-color: #2A93D5;">
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
        return {
            imageData: null,
            previewImage: null,
        };
    },

    methods: {
        async uploadFile() {
            const file = this.$refs.fileInput.files[0]
            this.previewImage = URL.createObjectURL(file)
            console.log("SELECTED: ", file)
            const formData = new FormData();
            formData.append('image', file);
            try {
                const response = await axios.post('http://127.0.0.1:8000/process-image/', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                });
                this.imageData = 'http://localhost:8000' + response.data.image_url;
                console.log("IMAGE DATA: ", this.imageData)
            }
            catch (error) {
                console.error(error);
            }
        },
        downloadImg() {
            const file = this.$refs.fileInput.files[0]
            const filename = file.name + '.png'
            const link = document.createElement('a')
            link.href = this.imageData
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            console.log('downloading', this.imageData)
        },
    },
};
</script>
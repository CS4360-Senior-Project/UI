<template>
    <v-card style="margin-top: 35px; padding: 25px; padding-bottom: 45px;">
        <v-row style="margin: 10px" justify="center">
            <h2 style="color: #125488">Convert Words in an Image to Machine Readable Text</h2>
        </v-row>
        <v-row style="margin: 10px" justify="center">
            <h5 style="color: #2A93D5">This page is good to speed up the process of reading documents, labels and more.</h5>
        </v-row>

        <v-row justify="center">
            <v-col cols="6">
                <div v-if="imageData" align-items="center" style="margin-top: 10px">
                    <div 
                        ref="copyData"
                        style="border: solid black; padding: 15px;"
                        justify="center">{{ imageData }}</div>
                    <v-btn
                        style="color: #D1EBFF; margin-top: 10px"
                        color="#2A93D5"
                        @click="copyText">Copy Text</v-btn>
                </div>

                <div v-if="previewImage">
                    <div>
                        <img
                            class="preview my-3"
                            :src="previewImage"
                            alt=""
                            style="width:100%; border-style: dotted; border-color: #2A93D5" />
                    </div>
                </div>

                <div v-else style="height:500px; border-style: dotted; border-color: #2A93D5; margin-bottom: 13px;"></div>
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
                const response = await axios.post('http://127.0.0.1:8000/read-image/', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                });
                this.imageData = response.data.status;
                console.log("IMAGE DATA: ", response.data.status)
            }
            catch (error) {
                console.error(error);
            }
        },

        async copyText() {
            const copyData = this.$refs.copyData;
            const textToCopy = copyData.innerText;

            try {
                await navigator.clipboard.writeText(textToCopy);
                alert("Text copied to clipboard");
            } catch (err) {
                console.error("Failed to copy text: ", err);
            }
        },
    },
};
</script>
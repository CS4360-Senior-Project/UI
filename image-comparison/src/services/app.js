import http from "./http-client";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload-image/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }

  // getFiles() {
  //   return http.get("/files");
  // }
}

export default new UploadFilesService();

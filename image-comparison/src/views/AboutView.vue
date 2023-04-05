<template>
  <v-parallax
    src="https://www.farmtruckphotographyanddesign.com/uploads/1/4/2/8/14280842/s159229868158895232_p12_i5_w2560.jpeg"
    height="400"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-bold mb-4"><u>ABOUT</u></h1>
    </div>
  </v-parallax>

  <v-container>
    <h1 style="color: #2A93D5"> What is KATABA?</h1>
    <p style="color: #36454F"> KATABA is a machine learning and image processing project, created to quickly and accurately distinguish features in handwriting samples. 
      Using a machine learning model to compare two images, KATABA will analyze how confident it is that they're created by the same author.</p>

    <h1 style="color: #2A93D5"> How does KATABA work? </h1>
    <p style="color: #36454F"> The machine learning model is completely trained on 10k+ prompts from the forensics CSAFE database. Those images were then processed using Python packages
      such as PIL and OpenCV to sharpen features and reduce noise. After image processing is complete, a CSV file with the image data is created to feed into the 
      machine learning model. The model was trained and tested for loss to find the best possible model, and saved in to be used in the API. Our API is run on a 
      Django Rest Framework to recieve the user inputted comparison images, which are then fed into the saved machine learning model. This model will compare the two images
      and return how confident the model is that the two writers came from the same author.</p>

    <h1 style="color: #2A93D5"> Why use Kataba? </h1>
    <p style="color: #36454F"> Our project will have the ability to aid in criminal prosecution and fraud detection using handwriting image comparison. </p>
    <p style="color: #36454F"> KATABA could be helpful for forensic systems to determine whether the sample was produced by the expected author or not.
      This tool will be helpful for fraud protection because it can be used to determine if the handwriting images uploaded are from the same person or not.
      There is no public information about a certain ML model or specific AI application is in use currently by law enforcement. There are several articles
      and studies on how useful automation is when processing and analyzing data. They can gain access to evidence more quickly and aid in the discovery of
      more pertinent discoveries by making connections that may serve to clarify emphasis and direction. </p>

    <p style="color: #36454F"> Additionally, this tool provides fast pattern recognition to reduce the time and uncertainty it takes to compare handwriting samples. Our project
      has real world applications for fraud detection and forensic analysis and can provide an extra piece of evidence in a court of law. Currently, the only
      similar tools use image processing to extract handwriting and translate it to text online (ex. Taking a picture of a handwritten essay to convert to a word document).
      Everyone can remember a time when they signed an important document (checks, mortgages, contracts, etc.). Forging or having one’s signature forged can lead to large
      financial and criminal issues. Humans have long analyzed handwriting using their vision to try to prevent forgeries. Recent advancements in image recognition using deep
      learning have led to higher breast cancer detection rates than when doctors used their vision alone. The same image processing techniques can lead to fast and accurate
      analysis of signatures to aid in fraud detection and prevention, and ceramal prosecutions. </p>
  </v-container>
</template>


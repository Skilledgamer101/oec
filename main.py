import text_from_link as tl
import text_from_file as tf
import test

#tl.detect_document_uri("gs://oec-letters.appspot.com/Screenshot (5).png")

def main():
    letters = input("Please type the letters you want to practice: ")
    file = "gs://storage-buckettest/canvas_post.jpeg"
    detected = tl.detect_document_uri(file)
    test.evaluate(letters, detected)


# from gcs
# tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
# from local
# tf.detect_document("./sample.png")

# doesnt work (from other web)
# tl.detect_document_uri("https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true")

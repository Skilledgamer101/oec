import text_from_link as tl
import text_from_file as tf

letter = input("Please type the letter you want to practice:  ")
tf.detect_document("./A.png")


# from gcs
tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
# from local
tf.detect_document("./sample.png")

# doesnt work (from other web)
# tl.detect_document_uri("https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true")

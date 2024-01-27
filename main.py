import text_from_link as tl
import text_from_file as tf

tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
tf.detect_document("./sample.img")

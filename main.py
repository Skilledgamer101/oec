import text_from_link as tl
import text_from_file as tf

#tl.detect_document_uri("gs://oec-letters.appspot.com/Screenshot (5).png")


letters = input("Please type the letters you want to practice: ")
file = input("Please enter the path to your handwritten letters: ")
detected = tf.detect_document(file)
print("")
for letter in letters:
    if letter in detected:
        print(f"Nice job! You wrote {letter} correctly!\n")
    else:
        print(f"You might need a little practice writing {letter}\n")


# from gcs
# tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
# from local
# tf.detect_document("./sample.png")

# doesnt work (from other web)
# tl.detect_document_uri("https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true")

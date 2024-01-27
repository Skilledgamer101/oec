import text_from_link as tl
import text_from_file as tf
import Topic_Finder as firebase

#tl.detect_document_uri("gs://oec-letters.appspot.com/Screenshot (5).png")


letters = input("Please type the letters you want to practice: ")
file = "gs://storage-buckettest/canvas_post.jpeg"
detected = tl.detect_document_uri(file)
print("")
for letter in letters:
    if letter in detected:
        print(f"Nice job! You wrote {letter} correctly!\n")
        firebase.ref.update(
            {letter:{
                "attempts":firebase.letters[letter]["attempts"]+1,
                "correctness":firebase.letters[letter]["correctness"]+1
            }}
        )
    else:
        print(f"You might need a little practice writing {letter}\n")
        firebase.ref.update(
            {letter:{
                "attempts":firebase.letters[letter]["attempts"]+1,
                "correctness":firebase.letters[letter]["correctness"]-1
            }}
        )

# from gcs
# tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
# from local
# tf.detect_document("./sample.png")

# doesnt work (from other web)
# tl.detect_document_uri("https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true")

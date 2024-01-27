import text_from_link as tl
import text_from_file as tf
import Topic_Finder as firebase

#tl.detect_document_uri("gs://oec-letters.appspot.com/Screenshot (5).png")

points_map = {
              "5" : "Five in a row!",
              "10": "Ten in a row!",
              "15": "Fifteen in a row!",
              "20": "Twenty in a row!",
              "25": "Twenty-five in a row!",
              "30": "Thirty in a row!"
              }
letters = input("Please type the letters you want to practice: ")
file = "gs://storage-buckettest/canvas_post.jpeg"
detected = tl.detect_document_uri(file)
print("")
for letter in letters:
    if letter in detected:
        print(f"Nice job! You wrote {letter} correctly!\n")
        firebase.data_letters.update(
            {letter:{
                "attempts":firebase.data_letters.get()[letter]["attempts"]+1,
                "correctness":firebase.data_letters.get()[letter]["correctness"]+1
            }}
        )
        firebase.data_points.update(
            {"points":{
                "value": firebase.data_points.get()["value"]+1
            }}
        )        
        
    else:
        print(f"You might need a little practice writing {letter}\n")
        firebase.data_letters.update(
            {letter:{
                "attempts":firebase.data_letters.get()[letter]["attempts"]+1,
                "correctness":firebase.data_letters.get()[letter]["correctness"]-1
            }}
        )
        firebase.data_points.update(
            {"points":{
                "value": firebase.data_points.get()["value"]-1
            }}
        )   
    points = str(firebase.data_points.get()["value"])
    if points in points_map:
        print(f"Congrats! You got the award {points_map[points]} for achieving {points} points!\n")


# from gcs
# tl.detect_document_uri("gs://cloud-samples-data/vision/handwriting_image.png")
# from local
# tf.detect_document("./sample.png")

# doesnt work (from other web)
# tl.detect_document_uri("https://github.com/GriDaniel/site-personal/blob/main/public/images/exp-mockup.png?raw=true")

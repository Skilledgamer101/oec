import Topic_Finder as firebase

points_map = {
              "5" : "Five in a row!",
              "10": "Ten in a row!",
              "15": "Fifteen in a row!",
              "20": "Twenty in a row!",
              "25": "Twenty-five in a row!",
              "30": "Thirty in a row!"
              }

def evaluate(letters, detected):
    for letter in letters:
        if letter in detected:
            print(f"Nice job! You wrote {letter} correctly!")
            print("Earned 1 point!")
            # go in letters
            firebase.data_letters.update(
                # find me the section that has this letter
                {letter:{
                    # .get() is a dict, without it its a pointer (used for update)
                    "attempts":firebase.data_letters.get()[letter]["attempts"]+1,
                    "correctness":firebase.data_letters.get()[letter]["correctness"]+1
                }}
            )
            firebase.data_points.update(
                {"value": firebase.data_points.get()["value"]+1}
                
            )
            print(f"Now you have {firebase.data_points.get()['value']} points!\n")

            
        else:
            print(f"You might need a little practice writing {letter}")
            firebase.data_letters.update(
                {letter:{
                    "attempts":firebase.data_letters.get()[letter]["attempts"]+1,
                    "correctness":firebase.data_letters.get()[letter]["correctness"]-1
                }}
            )
            # go in points
            firebase.data_points.update(
                # now find me the section called value
                {
                    # lost streak
                    "value": 0
                }
            )
            print("Unfortunately you've lost your streak, and now have 0 points.")
            print("Try again!\n")   
        points = str(firebase.data_points.get()["value"])
        if points in points_map:
            print(f"Congrats! You got the award {points_map[points]} for achieving {points} points!\n")
            firebase.data_points.update(
                {
                    points: True
                }
            )
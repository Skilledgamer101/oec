import text_from_link as tl
import text_from_file as tf
import test
import Topic_Finder as firebase

#tl.detect_document_uri("gs://oec-letters.appspot.com/Screenshot (5).png")

def main():
    choice = input("Enter 1 to practice writing letters of your choice.\nEnter 2 to practice 5 letters you need the most improvement on.\nEnter 3 to see your top 5 letters.\nEnter 4 to quit.\n")
    while choice != "4":
        print("")
        if choice == "1":
            practice_letters()
        elif choice == "2":
            practice_worst_letters()
        elif choice == "3":
            print_top_five()
        else:
            print("Invalid input.")
        choice = input("Enter 1 to practice writing letters of your choice.\nEnter 2 to practice letters you need the most improvement on.\nEnter 3 to see your top 5 letters.\nEnter 4 to quit.\n")
    quit()

def practice_letters():
    letters = input("Please type the letters you want to practice: ")
    file = "gs://storage-buckettest/canvas_post.jpeg"
    detected = tl.detect_document_uri(file)
    test.evaluate(letters, detected)

def practice_worst_letters():
    print("5 letters you need the most improvement on are:\n")
    firebase.worst_letters()

def print_top_five():
    print("Your top 5 letters are:\n")
    firebase.best_letters()

def quit():
    print("Thanks for using the app!")

main()
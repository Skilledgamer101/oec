import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import initialize_app, storage
from google.cloud import firestore

def worst_letters():
    reverse_ref = db.reference()
    print(reverse_ref)
    query=reverse_ref.order_by_child('correctness')
    results = query.get()
    for key,value in results.items():
        print(key,value)

print(firebase_admin)
cred_obj = firebase_admin.credentials.Certificate('oec-letters-firebase-adminsdk-m8ia4-f51fd3672c.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':'https://oec-letters-default-rtdb.firebaseio.com/',
    'storageBucket': 'oec-letters.appspot.com'})
ref = db.reference("/")
letters = ref.get()
#Print data_base
for key,value in letters.items():
    print(key,value)
    




#For now

print(letters['A']['attempts'])

worst_letters()

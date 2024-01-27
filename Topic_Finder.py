import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from firebase_admin import initialize_app, storage
from google.cloud import firestore

cred_obj = firebase_admin.credentials.Certificate('oec-letters-firebase-adminsdk-m8ia4-f51fd3672c.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':'https://oec-letters-default-rtdb.firebaseio.com/',
    'storageBucket': 'oec-letters.appspot.com'})

base_ref = db.reference("/")
data_letters = db.reference("/characters")
data_points = db.reference("/points")

reverse_ref = db.reference("characters")
query=reverse_ref.order_by_child('correctness')
results = query.get()

def worst_letters():
    for key in list(results.keys())[:-6:-1]:
        print(key)

def best_letters():
    for key in list(results.keys())[:5]:
        print(key)

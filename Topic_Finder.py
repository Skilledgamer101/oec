import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred_obj = firebase_admin.credentials.Certificate('oec-letters-firebase-adminsdk-m8ia4-f51fd3672c.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':'https://oec-letters-default-rtdb.firebaseio.com/'
	})
ref = db.reference("/")
letters = ref.get()

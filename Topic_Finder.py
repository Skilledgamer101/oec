import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
print(firebase_admin)

cred_obj = firebase_admin.credentials.Certificate('oec-letters-firebase-adminsdk-m8ia4-f51fd3672c.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL':'https://oec-letters-default-rtdb.firebaseio.com/'
	})
ref = db.reference("/")
letters = ref.get()
#Print data_base
for key,value in letters.items():
    print(key,value['attempts'])

#For now
for i, j in zip(range(65, 91), range(97, 123)):
    print(chr(i),chr(j))
    ref.update(
        {chr(i):{
            "attempts":0,
             "correctness":0
         },
        chr(j):{
            "attempts":0,
            "correctness":0
        }} 
    )
    




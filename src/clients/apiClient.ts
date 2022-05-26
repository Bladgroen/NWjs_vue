import {collection, getDocs} from "firebase/firestore"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {db} from "@/firebase";

export async function getData() {
    const querySnapshot = await getDocs(collection(db, "Dashboard"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Status} ${doc.data().date}`);
    });
}

export async function registerUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log(this.auth)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export async function loginUser(email, password) {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    console.log(response);
}

export function test2() {
    console.log(this.auth.currentUser)
}
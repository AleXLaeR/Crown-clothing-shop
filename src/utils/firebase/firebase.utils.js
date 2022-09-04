import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    // writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKpVL9Ec673TzdIDtaGq0GR9SRbS-jkS4",
    authDomain: "crwn-clothing-db-dc999.firebaseapp.com",
    projectId: "crwn-clothing-db-dc999",
    storageBucket: "crwn-clothing-db-dc999.appspot.com",
    messagingSenderId: "50571649299",
    appId: "1:50571649299:web:ec022495810b6487483ae6",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(
    auth,
    provider
);

export const db = getFirestore();

/*
export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}
 */

export const getCategoriesAndDocs = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey);
    const aQuery = query(collectionRef);

    const querySnapshot = await getDocs(aQuery);
    return querySnapshot.docs.map((docSnap) => docSnap.data());
}

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) return userDocRef;

    const { displayName, email } = userAuth;
    const creationTimestamp = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            creationTimestamp,
            ...additionalInformation,
        });
    } catch (error) {
        alert(`Error creating a user: ${error.message}`);
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(
        auth,
        email,
        password
    );
}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangeListener = (cb) =>
    onAuthStateChanged(auth, cb);

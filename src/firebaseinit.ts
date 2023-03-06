import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig: Record<string, string> = {
apiKey: "AIzaSyDOWCeXy_2qAIyQxCKGOnzHzDlpJW6Mztw",
authDomain: "hyrulejobs.firebaseapp.com",
projectId: "hyrulejobs",
storageBucket: "hyrulejobs.appspot.com",
messagingSenderId: "295532801929",
appId: "1:295532801929:web:79afc533f66c916fd43b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
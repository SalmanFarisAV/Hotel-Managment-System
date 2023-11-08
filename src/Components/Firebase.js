import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgyLQpTMIIsPz70s38gE9-oP_L9IoVgxY",
  authDomain: "dbms-hms.firebaseapp.com",
  projectId: "dbms-hms",
  storageBucket: "dbms-hms.appspot.com",
  messagingSenderId: "48906713065",
  appId: "1:48906713065:web:f927902b67c2dda6a93d78",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
export { database, ref, set, onValue, update, storage };

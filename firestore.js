import { getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { app } from "./firebase-config.js"
export const db = getFirestore(app);
export { getFirestore, addDoc, collection, getDocs, onSnapshot, orderBy, query};
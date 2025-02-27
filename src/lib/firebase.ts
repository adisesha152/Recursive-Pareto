import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "recursivepareto-47a4d",
  privateKeyId: "e5e3fa8d58cdd89fdcddf6cd4c1836e02b53b927",
  clientEmail: "firebase-adminsdk-fbsvc@recursivepareto-47a4d.iam.gserviceaccount.com",
  clientId: "111838442324008631321",
  // Add any other required configuration from your Firebase console
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

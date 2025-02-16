// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEPbWfqcRNRkua_Z4Try45BG6-u8He3CE',
  authDomain: 'practice-board-a4f91.firebaseapp.com',
  projectId: 'practice-board-a4f91',
  storageBucket: 'practice-board-a4f91.firebasestorage.app',
  messagingSenderId: '163336077969',
  appId: '1:163336077969:web:4542014a4746099d127530',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Storage 인스턴스 생성
const storage = getStorage(app);

export { storage };

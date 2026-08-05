import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db =
  firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);

export async function logClickEvent(source: string) {
  try {
    await addDoc(collection(db, 'click_events'), {
      source,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.warn('Error logging click event to Firestore:', err);
  }
}

export async function submitAgentLead(data: {
  fullName: string;
  phoneNumber: string;
  lineId?: string;
  experience?: string;
}) {
  try {
    const docRef = await addDoc(collection(db, 'agent_leads'), {
      ...data,
      lineId: data.lineId || '',
      experience: data.experience || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    return { success: true, id: docRef.id };
  } catch (err: any) {
    console.error('Error submitting lead to Firestore:', err);
    return { success: false, error: err.message || 'เกิดข้อผิดพลาดในการลงทะเบียน' };
  }
}

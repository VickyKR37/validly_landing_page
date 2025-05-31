'use server';

import admin from 'firebase-admin';

// Ensure Firebase app is initialized only once
if (!admin.apps.length) {
  try {
    // Initialize Firebase Admin SDK.
    // In a Firebase environment (like Cloud Functions, App Engine, or Firebase Hosting with SSR),
    // it can often initialize without explicit credentials.
    // For local development, ensure GOOGLE_APPLICATION_CREDENTIALS is set in your environment,
    // or provide a service account key explicitly:
    // admin.initializeApp({ credential: admin.credential.cert(require('./path/to/your-service-account-key.json')) });
    admin.initializeApp();
    console.log('Firebase Admin SDK initialized.');
  } catch (e: any) {
    console.error('Firebase Admin SDK initialization error:', e.stack);
  }
}

export const db = admin.firestore();

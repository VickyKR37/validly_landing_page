
import admin from 'firebase-admin';

let db: admin.firestore.Firestore;

if (!admin.apps.length) {
  try {
    console.log('[firebaseAdmin] Attempting to initialize Firebase Admin SDK...');
    // Log if GOOGLE_APPLICATION_CREDENTIALS is set, for debugging purposes.
    if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.log(`[firebaseAdmin] GOOGLE_APPLICATION_CREDENTIALS is set: ${process.env.GOOGLE_APPLICATION_CREDENTIALS}`);
    } else if (process.env.NODE_ENV === 'development') {
      // Warn only in development if it's not set, as it's expected to be auto-provided in Firebase environments.
      console.warn('[firebaseAdmin] GOOGLE_APPLICATION_CREDENTIALS is not set. For local development, this is typically required for firebase-admin to initialize correctly.');
    } else { // NODE_ENV is 'production' or other, and GOOGLE_APPLICATION_CREDENTIALS is not set
        console.warn('[firebaseAdmin] GOOGLE_APPLICATION_CREDENTIALS is not set. In Firebase environments (like App Hosting or Cloud Functions), this is usually automatically managed by the environment. If this is a deployed environment outside of Firebase and this variable is not set, this is likely an issue.');
    }

    admin.initializeApp();
    console.log('[firebaseAdmin] Firebase Admin SDK initialized successfully.');
    db = admin.firestore();
  } catch (e: any) {
    console.error('[firebaseAdmin] Firebase Admin SDK initialization FAILED:', e.message);
    // Re-throw the error to make the failure explicit and stop further execution if admin SDK isn't ready.
    // This might provide a more specific error to Next.js/Turbopack.
    throw new Error(`[firebaseAdmin] Failed to initialize Firebase Admin SDK. Original error: ${e.message}`);
  }
} else {
  console.log('[firebaseAdmin] Firebase Admin SDK already initialized. Getting default app instance.');
  // Ensure db is assigned from the default app if already initialized
  db = admin.app().firestore();
}

export { db };

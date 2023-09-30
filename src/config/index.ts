// App
export const HOST = process.env.HOST || '0.0.0.0';
export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Payload
export const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || '';

// MongoDB
export const {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;
export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`;

// Google Cloud Storage
export const GCS_CREDENTIALS = JSON.parse(
  atob(process.env.GCS_CREDENTIALS || 'e30='),
);
export const GCS_BUCKET = process.env.GCS_BUCKET || 'reshipi-media-dev';

// Email
export const SENDGRID_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Reshipi';
export const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@reshipi.app';
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';

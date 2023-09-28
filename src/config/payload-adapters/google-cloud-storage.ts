import { gcsAdapter } from '@payloadcms/plugin-cloud-storage/gcs';
import { GCS_BUCKET, GCS_CREDENTIALS } from '..';

export const GcsAdapter = gcsAdapter({
  options: {
    credentials: GCS_CREDENTIALS,
  },
  bucket: GCS_BUCKET,
});

export default GcsAdapter;

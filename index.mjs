import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({ region: 'us-east-2' });
export const handler = async (event) => {
  const record = event.Record[0];
  const Bucket = record.s3.bucket.name;
  const Key = record.s3.object.key;
  const getObjetctResult = await s3Client.getObject({
    Bucket,
    Key,
  });
  const megaByte = 1024 * 1024;

  if (getObjetctResult.ContentLength > 1 * megaByte) {
    console.log('Objeto muito grande');
    return 'Objeto muito grande';
  }

  console.log('Objeto de tamanho ok');
  return 'Objeto de tamanho ok';
};

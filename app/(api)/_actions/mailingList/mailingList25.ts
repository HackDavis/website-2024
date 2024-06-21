'use server';
import { getMailCollection } from '../../_utils/mongodb/mongoClient.mjs';

export async function addEmail(email: string) {
  const mailCollection = await getMailCollection();
  try {
    await mailCollection.insertOne({ email });
  } catch (error) {
    console.error('Failed to add email to DB', error);
  }
}

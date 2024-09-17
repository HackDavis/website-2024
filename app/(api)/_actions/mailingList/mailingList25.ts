'use server';
import { getMailCollection } from '../../_utils/mongodb/mongoClient.mjs';

export async function addEmail(email: string) {
  const mailCollection = await getMailCollection();
  if (!email.trim()) {
    return;
  }
  try {
    const old_email = await mailCollection.findOne({ email });
    if (old_email) {
      console.log('Email Already Exists');
      return;
    }

    await mailCollection.insertOne({ email });
  } catch (error) {
    console.error('Failed to add email to DB', error);
  }
}

'use server';
import { getDatabase } from '../../_utils/mongodb/mongoClient.mjs';
import { Db } from 'mongodb';

type Event = {
  startTime: Date;
  endTime: Date;
  title: string;
  location: string;
  description?: string;
  type: string;
};

export async function getAllEvents(): Promise<Event[]> {
  const db: Db = await getDatabase();
  let events: Event[] = [];
  try {
    events = (await db.collection('DOE_Events').find({}).toArray()).map(
      (doc) => ({
        startTime: doc.start_time,
        endTime: doc.end_time,
        title: doc.title,
        location: doc.location,
        description: doc.description,
        type: doc.type,
      })
    );
  } catch (error) {
    console.error('Failed to fetch Events from DB', error);
    return [];
  }

  return events;
}

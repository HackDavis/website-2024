'use server';
import { getDatabase } from '../../_utils/mongodb/mongoClient.mjs';
import { Db } from 'mongodb';
import type { Event } from '@/public/types/Schedule.types';

export async function getAllEvents(): Promise<Event[]> {
  const db: Db = await getDatabase();
  let events: Event[] = [];
  try {
    events = (await db.collection('DOE_Events').find({}).toArray()).map(
      (doc) => ({
        startTime: doc.startTime,
        endTime: doc.endTime,
        title: doc.title,
        location: doc.location,
        type: doc.type,
      })
    );
  } catch (error) {
    console.error('Failed to fetch Events from DB', error);
    return [];
  }

  return events;
}

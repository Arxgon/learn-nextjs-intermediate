export async function getAllEvents() {
  const response = await fetch(
    "https://learn-nextjs-71534-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  //firebase return data as object

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

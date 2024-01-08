export default async function fetchGet(path: string, queries: object) {
  const entries = Object.entries(queries);
  const queryString = entries.map((e) => e.join('=')).join('&');
  return fetch(`${process.env.BASE_URL}${path}?${queryString}`, {
    credentials: 'include',
  });
}

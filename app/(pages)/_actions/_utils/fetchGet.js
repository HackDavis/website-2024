export default async function fetchGet(path, queries) {
  const entries = Object.entries(queries);
  const queryString = entries.map((e) => e.join('=')).join('&');
  const res = await fetch(`${process.env.BASE_URL}${path}?${queryString}`);
  const data = await res.json();
  return data;
}

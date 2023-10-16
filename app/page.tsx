async function getData() {
  const res = await fetch('http://159.138.11.4:8081/query/editions')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const editions = await getData()

  return (
    <ul>
      {editions.map((edition) => (
        <li key={edition.id}>{edition.edition_id}</li>
      ))}
    </ul>
  )
}

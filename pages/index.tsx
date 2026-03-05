import { useEffect, useState } from 'react';

export default function Home() {
  const [items, setItems] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => { fetch('/api/payments').then((r) => r.json()).then(setItems); }, []);
  return (<main><h1>Payments</h1><ul>{items.map((i) => <li key={i.id}>{i.name}</li>)}</ul></main>);
}

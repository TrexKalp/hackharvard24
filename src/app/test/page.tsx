'use client';
import React, { useEffect, useState } from 'react';

const Page: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [textParam, setTextParam] = useState<string>('EMERGENCY;EMERGENCY ROOM ADMIT;SNF;Medicare;nan;CATHOLIC;DIVORCED;WHITE;HUMERAL FRACTURE;0;1');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on each fetch
      try {
        const response = await fetch(`http://localhost:8000/?new_text=${encodeURIComponent(textParam)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API.');
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [textParam]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
      <input
        type="text"
        value={textParam}
        onChange={(e) => setTextParam(e.target.value)}
        placeholder="Enter new text parameter"
      />
    </div>
  );
};

export default Page;

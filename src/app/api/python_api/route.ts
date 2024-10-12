// pages/api/proxy.js

export default async function handler(req, res) {
    const { method, query, body } = req;
  
    // Define the URL of the Python FastAPI backend
    const apiUrl = `http://localhost:8000`;
      
    // Convert query parameters to a query string
    const queryString = new URLSearchParams(query).toString();
    
    try {
      // Proxy the request from Next.js to the FastAPI backend
      const response = await fetch(`${apiUrl}${req.url}?${queryString}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          // Forward any headers from the Next.js request to FastAPI
          ...req.headers
        },
        body: method === 'GET' ? null : JSON.stringify(body),
      });
  
      const data = await response.json();
  
      // Respond to the Next.js frontend with the data from the FastAPI backend
      res.status(response.status).json(data);
  
    } catch (error) {
      console.error('Error fetching data from FastAPI:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
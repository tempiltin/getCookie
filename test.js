(async () => {
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({
          _csrf_frontend: 'example_csrf_token',
          frontend: 'example_frontend_value',
          page_url: 'http://example.com',
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Serverdan javob:', data);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  })();
  
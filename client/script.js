async function shorten() {
    const longUrl = document.getElementById('longUrl').value;
  
    const res = await fetch('/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl })
    });
  
    const data = await res.json();
  
    if(data.shortUrl) {
      document.getElementById('result').innerHTML = `
        Короткая ссылка: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>
      `;
    } else {
      document.getElementById('result').innerText = 'Ошибка при создании ссылки';
    }
  }
  
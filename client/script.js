async function shorten() {
  const input = document.getElementById('longUrl');
  
  if (!input) {
    alert('Поле ввода не найдено!');
    return;
  }

  const longUrl = input.value;

  const res = await fetch('http://localhost:5000/shorten', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({longUrl})
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

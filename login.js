function performFetch() {
  const myHeaders = new Headers();
  myHeaders.append(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
  );
  myHeaders.append("Accept-Language", "en-US,en;q=0.9");
  myHeaders.append("Cache-Control", "max-age=0");
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Origin", "http://q.net");
  myHeaders.append("Referer", "http://q.net/login");
  myHeaders.append("Upgrade-Insecure-Requests", "1");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
  );

  const urlencoded = new URLSearchParams();
  urlencoded.append("username", "Adata");
  urlencoded.append("password", "pasarpon");
  urlencoded.append("dst", "");
  urlencoded.append("popup", "true");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("http://q.net/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("sukses"))
    .catch((error) => console.error(error));
}

// Run performFetch every 5 seconds
setInterval(performFetch, 500);

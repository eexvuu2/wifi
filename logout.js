const myHeaders = new Headers();
myHeaders.append(
  "Accept",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
);
myHeaders.append("Accept-Language", "en-US,en;q=0.9");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Referer", "http://q.net/status");
myHeaders.append("Upgrade-Insecure-Requests", "1");
myHeaders.append(
  "User-Agent",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function fetchData() {
  try {
    const response = await fetch("http://q.net/logout.html?", requestOptions);
    const result = await response.text();
    console.log("sukses");
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

// Call fetchData every 5 seconds
setInterval(fetchData, 10000);

export default function responseProcessor(response) {
  if (response.ok) {
    return response.json();
  }

  return response.json()
    .then((body) => Promise.reject(body));
}

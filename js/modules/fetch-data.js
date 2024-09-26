export async function fetchData() {
    const url = "./assets/db.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
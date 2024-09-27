export const fetchData=async()=>{
    const url = "./assets/db.json";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
export const fetchLodgingById=async(id)=>{
  const url = "./assets/db.json";
  const response = await fetch(url);
  const data = await response.json();
  return data.services.lodging.find(d=>d.id==id);
}
 
 const API_URL = "https://jsonplaceholder.typicode.com/users";

 export async function getUsers() {

  const response = await fetch(API_URL);

  if(!response){
    throw new Error("Failed to fetch the users!");
  }

  const data = await response.json();

  return data;
  
 }



 export async function getUserById(id) {

  const response = await fetch(`${API_URL}/${id}`);

  if(!response){
    throw new Error("Failed to fetch the users!");
  }
  

  const data = await response.json();

  return data;
 }

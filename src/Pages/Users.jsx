import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../Services/Service";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import UserGrid from "../Components/UserGrid";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import FilterBar from "../Components/FilterBar";



function Users(){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); 



  async function fetchUsers() {
   
    try {
    setIsLoading(true);
    setError("");
    const data = await getUsers();
    setUsers(data);

    } catch (error) {

      setError(error.message)
      
    }
    finally{
      setIsLoading(false);
    }
    
  }



  useEffect(() => {
    fetchUsers();

  },[])


  const cities = useMemo(() => {

    const cityList = users.map((user) => user.address.city);

    return[...new Set(cityList)].sort();
  },[users]);

  const filteredUsers = useMemo(() => {

    const searchTerm = search.trim().toLowerCase();

    return users.filter((user) => {

      const matchName = user.name.toLowerCase().includes(searchTerm);

      const matchCity = user.address.city.includes(selectedCity);

      return matchCity && matchName;
    },[users, search, selectedCity]);



  })




  return(
    
    <>
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Header totalusers={users.length} visibleUsers={users.length} />
        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <SearchBar search={search} onSearchChange={setSearch} />
            <FilterBar cities={cities}  selectedCtiy={selectedCity} onCityChange={setSelectedCity} />
          </div>
        </section>
    

   {isLoading && <Loading />}
   {!isLoading && error && (
     
     <ErrorMessage message={error} onRetry={fetchUsers} />
   )}

   {!isLoading && !error && <UserGrid users={filteredUsers} /> }
     </div>
    </div>

    
    
    
    
    
    
    
    </>


  )

}

export default Users;
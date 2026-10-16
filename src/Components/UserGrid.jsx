import UserCard from "./UserCard";



function UserGrid({users}){

  return(
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      }


    </div>
  )
}


export default UserGrid;
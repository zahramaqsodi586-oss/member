import { Link } from 'react-router-dom';


function UserCard({ user }){

  return(
    <article
    className="group rounded-2xl border bordeer-slate-200 bg-white p-6 shadow-sm transition
    duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">


      <div className="flex items-start justfiy-between gap-4">

        <div className="flex items-center gap-4">

        <div 
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full 
        bg-linear-to-br from-blue-500 to-indigo-600 text-xl font-bold text-white shadow-sm">
          
         {user.name.charAt(0)}
        </div>

        <div className="min-w-0">
          <h2 className="truncate font-bold text-slate-900">
            {user.name}
          </h2>

          <p className="truncate text-sm text-slate-500">
            @{user.username}
          </p>
        </div>
      </div>


      <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
        #{user.id}
      </span>

      </div>


      {/*information*/}

      <div className="mt-6 space-y-3 text-sm">

        <div className="flex items-start gap-3">
          <span>📧</span>

          <div className="min-w-0">
            <p className="text-xs text-slate-400">
              Email
            </p>

            <p className="truncate text-slate-600">
              {user.email}
            </p>
          </div>
        </div>


        <div className="flex items-start gap-3">
          <span>📱</span>

          <div>
            <p className="text-xs text-slate-400">
              Phone
            </p>

            <p className="text-slate-600">
              {user.phone}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span>🌐</span>

          <div>
            <p className="text-xs text-slate-400">
              Website
            </p>

            <p className="text-slate-600">
              {user.website}
            </p>

          </div>
        </div>

      </div>

      {/*Location*/}

      <div className="mt-6 rounded-xl bg-slate-50 p-4">

        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Location
        </p>

        <p className="mt-1 font-semibold text-slate-800">
          {user.address.city}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {user.address.city}, {user.address.suite} 
        </p>

      </div>

      {/* company*/}

      <div className="mt-4">

        <p className="text-xs text-slate-400">
          Company
        </p>

        <p className="mt-1 font-medium text-slate-700">
          {user.company.name}
        </p>
      </div>


      {/* Future details button */}
      <Link
      to={`/user/${user.id}`}
       className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition 
       hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
        View Profile 
       </Link>

    </article>

  )
}

export default UserCard;
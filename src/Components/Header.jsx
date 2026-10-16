


function Header({totalUsers, visibleUsers}){


  return(

    <header>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
            User Mangement
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Users
          </h1>

          <p className="mt-2 text-slate-500">
              Search and filter users by name and city.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Showing
          </p>

          <p className="mt-1 text-lg font-bold text-slate-800">
            {visibleUsers}{""}

            <span className="text-sm font-normal text-slate-500">
              / {totalUsers} users
            </span>
          </p>

        </div>
      </div>
    </header>




  )
}

export default Header;
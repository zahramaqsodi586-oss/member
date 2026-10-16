

function SearchBar({search, onSearchChange}){

  return(
    <div className="relative flex-1">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
      <input
      type="text"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search Users by name...."
      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm
       text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 
      focus:ring-4 focus:ring-blue-500/10" />



    </div>

  )
}


export default SearchBar;
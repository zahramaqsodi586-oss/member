


function FilterBar({selectedCtiy, onCityChange, cities}){

  return(
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="min-w-48">
        <select
        value={selectedCtiy}
        onChange={(event) => onCityChange(event.target.value) }

          className="w-full rounded-xl border border-slate-200 px-4 py-3
          text-sm text-slate-700 outline-none transition focus:border-blue-500
          focus:ring-4 focus:ring-blue-500/10 ">
            <option value="">All Cities</option> 

            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
             </select>
    </div>

    <button
    type="button"
    disabled={true}
    className="rounded-xl bg-slate-200 px-4 py-3 text-sm font-medium 
    text-slate-700 hover:bg-slate-300">
      Clear Filters
    </button>

    </div>

  )
}

export default FilterBar;
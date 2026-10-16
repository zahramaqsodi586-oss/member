

function ErrorMessage({message, onRetry}){

  return(
    <div className="flex min-h-96 items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-8 text-center">

        <div className="text-4xl">🔺</div>
        <h2 className="mt-4 text-xl font-bold text-red-800">Something went wrong!</h2>
        <p className="mt-2 text-sm text-red-200">{message}</p>

        <button
        onClick={onRetry}
        className="mt-6 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">
          Try again
        </button>
      </div>
    </div>


  )
}

export default ErrorMessage;
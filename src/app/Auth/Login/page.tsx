export default function page() {
    return (
        <>
            <h1 className="mx-auto max-w-md font-bold text-secondary text-lg flex justify-center my-4">Login</h1>
            <form className="mx-auto max-w-md">
                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>
                <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </div>
                <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="mt-4 bg-secondary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Sign In
                </button>
                </div>
            </form>
    </>
    )
}






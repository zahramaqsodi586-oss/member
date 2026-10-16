import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import { getUserById } from "../Services/Service";

function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");

      const userData = await getUserById(id);
      setUser(userData);
      console.log("user Data: ", userData)
      console.log("user", user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchUsers} />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/users"
        className="inline-block mb-6 text-blue-600 font-semibold hover:text-blue-800"
      >
        🔙 Back To Users
      </Link>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex items-center gap-5 border-b pb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600">
              {user.name.charAt(0)}
            </span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>

            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <p className="text-sm text-gray-500">Email</p>

            <p className="text-sm text-gray-500">Phone</p>

            <p className="font-medium text-gray-900 mt-1">{user.phone}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Website</p>

            <p className="font-medium text-gray-900 mt-1">{user.website}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Company</p>

            <p className="font-medium text-gray-900 mt-1">{user.company.name}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Address</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Street</p>

              <p className="font-medium">{user.address.street}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Suite</p>

              <p className="font-medium">{user.address.suite}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">City</p>

              <p className="font-medium">{user.address.city}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Zip Code</p>

              <p className="font-medium">{user.address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default UserDetails;

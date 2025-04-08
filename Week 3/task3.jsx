const UserCard = ({ name, email }) => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
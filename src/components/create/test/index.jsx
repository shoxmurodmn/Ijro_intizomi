import React, { useState } from "react";
import "./style.css"; // CSS faylni import qilish

const UserSelector = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Fake data from a database
  const users = [
    { id: 1, name: "S.N.Yuldashov", role: "Boshliq" },
    { id: 2, name: "F.B.Boyzoqova", role: "Devonxona mudiri" },
    { id: 3, name: "S.D.Jumayeva", role: "Mutaxassis" },    { id: 1, name: "S.N.Yuldashov", role: "Boshliq" },
    { id: 2, name: "F.B.Boyzoqova", role: "Devonxona mudiri" },
    { id: 3, name: "S.D.Jumayeva", role: "Mutaxassis" },
    { id: 1, name: "S.N.Yuldashov", role: "Boshliq" },
    { id: 2, name: "F.B.Boyzoqova", role: "Devonxona mudiri" },
    { id: 3, name: "S.D.Jumayeva", role: "Mutaxassis" },
    { id: 1, name: "S.N.Yuldashov", role: "Boshliq" },
    { id: 2, name: "F.B.Boyzoqova", role: "Devonxona mudiri" },
    { id: 3, name: "S.D.Jumayeva", role: "Mutaxassis" },
 
  ];

  // Search function
  const handleSearch = (e) => {
      setSuggestions(users)

//       console.log("");
      
//     const value = e.target.value;
//     setSearchTerm(value);
//     if (value.trim()) {
//       setSuggestions(
//         users.filter((user) =>
//           user.name.toLowerCase().includes(value.toLowerCase())
//         )
//       );
//     } else {
//       setSuggestions([]);
//     }
  };

  // Add selected user
  const handleSelectUser = (user) => {
    if (!selectedUsers.find((u) => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    setSearchTerm("");
    setSuggestions([]);
  };

  // Remove user
  const handleRemoveUser = (id) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="user-selector">
      {/* Input field */}
      <input
        type="text"
        placeholder="Xodimning ismi"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={handleSearch}
        className="search-input"
      /> 

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="suggestions-box"> 
            <ul className="suggestions-dropdown">
            {suggestions.map((user) => (
              <li
                key={user.id}
                className="suggestion-item"
                onClick={() => handleSelectUser(user)}
              >
                {user.name} - {user.role}
              </li>
            ))}
          </ul>
        </div>
       
      )}
      {/* Selected users list */}
      <div className="selected-users">
        {selectedUsers.map((user) => (
          <div key={user.id} className="selected-user">
            <div>
              <strong>{user.name}</strong>
              <p>{user.role}</p>
            </div>
            <button
              onClick={() => handleRemoveUser(user.id)}
              className="remove-button"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSelector;

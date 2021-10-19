import axios from "axios";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
// import ContactForm from './ContactForm';
// import EditForm from './EditForm';

const EditContactForm = () => {
  const history = useHistory();
  // const {id} = useParams();
  // const[user, setUser] = useState(null);
  const [id, setID] = useState(null);
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // useEffect(() => {
  //     var users = JSON.parse(localStorage.getItem("users"));
  //     var user = [];
  //     console.log(users);
  //     users.forEach(element => {
  //         if(element.id === id) {
  //             setUser(element);
  //             setUsername(element.username);
  //             setLastname(element.lastname);
  //             setEmail(element.email);
  //             setNumber(element.number);
  //         }
  //     });
  // },[])

  // console.log(user);

  // const onAddContactHandler = (contactData) => {
  //     fetch(`http://localhost:3001/contacts/${id}`,{
  //         method: 'PUT',
  //         body: JSON.stringify(contactData),
  //         headers: {
  //             'Content-Type' : 'application/json',
  //         }
  //     }).then(() => {
  //         history.push('/');
  //     })
  //     console.log(contactData);

  // };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setUsername(localStorage.getItem("UserName"));
    setLastname(localStorage.getItem("LastName"));
    setEmail(localStorage.getItem("Email"));
    setNumber(localStorage.getItem("Number"));
  }, []);

  const onFormHandler = () => {
    axios
      .put(`http://localhost:3001/contacts/${id}`, {
        username,
        lastname,
        email,
        number,
      })
      .then(() => {
        history.push("/");
      });
  };

  // const onFormHandler = async (e) => {
  //     e.preventDefault();
  //     await axios.put("http://localhost:3001/contacts");
  //     history.push("/");
  // }

  // const updateUser = async () => {
  //     const result = await axios.get(`http://localhost:3001/contacts/${id}`)
  //     console.log(result.data);
  //     setUsername(result.data);
  //     setLastname(result.data);
  //     setEmail(result.data);
  //     setNumber(result.data);

  // }

  return (
    <div className="main-controls">
      <h1 className="form-header">Update</h1>
      <form className="form" onSubmit={onFormHandler}>
        <div className="control">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="name">LastName</label>
          <input
            type="text"
            id="name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="gmail">Email</label>
          <input
            type="email"
            id="gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="number">Phone Number</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">update</button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;

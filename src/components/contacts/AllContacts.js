import React, { useEffect, useState } from "react";
// import ContactList from './ContactList';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import ContactItems from './ContactItems';

const AllContacts = () => {
  const history = useHistory();
  const [loaded, setLoaded] = useState([]);

  // useEffect(() => {
  //     contactUsers();
  // },[])

  // const contactUsers = async() => {
  //     const result = await axios.get("http://localhost:3001/contacts");
  //     setLoaded(result.data);
  // };

  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((response) => {
      setLoaded(response.data.reverse());
      console.log(response.data);
      // localStorage.setItem('users', JSON.stringify(response.data));
    });
  }, []);

  const onEditHandler = (data) => {
    let {id,username,lastname,email,number} = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('UserName',username);
    localStorage.setItem('LastName',lastname);
    localStorage.setItem('Email',email);
    localStorage.setItem('Number',number)
    console.log(data);
  };

  

  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3001/contacts/${id}`)
    .then(() => {
      history.push('/')
    })
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Number</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loaded.map((data, index) => {
            return (
              <tr key={data.id}>
                <th scope="row">{index + 1}</th>
                <td>{data.username}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>

                <td>
                  <Link
                    to={`/newcontact/edit/${data.id}`}
                    className="btn btn-primary"
                    onClick={() => onEditHandler(data)}
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <Link
                    to={`/newcontact/delete/${data.id}`}
                    className="btn btn-danger"
                    onClick={() => onDeleteHandler(data.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllContacts;

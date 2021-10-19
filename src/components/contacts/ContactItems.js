import React from "react";
import { Link } from "react-router-dom";

const ContactItems = (props) => {
  const onEditHandler = (id) => {
    console.log(id);
  };

  const onDeleteHandler = (id) => {
    console.log(id);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">UserName</th>
          <th scope="col">LastName</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.username}</td>
          <td>{props.lastname}</td>
          <td>{props.email}</td>
          <td>{props.number}</td>
          <td>
            <Link
              to={`/newcontact/edit/${props.id}`}
              className="btn btn-primary"
            >
              <button onClick={() => onEditHandler(props.id)}>Edit</button>
            </Link>
          </td>
          <td>
            <Link
              to={`/newcontact/delete/${props.id}`}
              className="btn btn-danger"
            >
              <button onClick={() => onDeleteHandler(props.id)}>Delete</button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactItems;

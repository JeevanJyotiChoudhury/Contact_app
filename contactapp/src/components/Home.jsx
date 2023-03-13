import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

const Home = () => {
  const contact = useSelector((state) => state);
  const dispatch = useDispatch()

  const deleteContact =(id)=> {
    dispatch({type:'DELETE_CONTACT',payload:id})
    toast.success('deleted successfully')
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-end my-5">
            <Link to="/add" className="btn btn-outline-dark">
              Add Contact
            </Link>
          </div>
          <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((el, id) => (
                  <tr key={id}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.number}</td>
                    <td>
                      <Link
                        to={`/edit/${el.id}`}
                        className="btn btn-small btn-primary mx-2"
                      >
                        Edit
                      </Link>
                      <button type='button' onClick={()=>deleteContact(el.id)} className="btn btn-small btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

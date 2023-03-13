import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from 'react-toastify';

const EditContact = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch()
  const contact = useSelector((state) => state);
  const currentContact = contact.find((contact) => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find(el=> el.id !== parseInt(id) && el.email === email )
    const checkNumber = contact.find((el)=>el.id !== parseInt(id) && el.number === parseInt(number))
    if (!name || !number || !email) {
      return toast.warn("Please fill in all details");
    }
    if(checkEmail){
      return toast.error("This Email is already exists!!");
    }
    if(checkNumber){
      return toast.error("This Number is already exists!!");
    }
  
    
    const data = {
      id:parseInt(id),
      name,
      email,
      number,
    }
    dispatch({type:'UPDATE_CONTACT',payload:data})
    toast.success('Student updated successfully')
    navigate('/');
  };

  return (
    <>
      <div className="container">
        {currentContact ? (
          <>
            <h1 className=" display-3 text text-center my-5">
              Edit Contact - {id}
            </h1>
            <div className="row">
              <div className="col-md-6 mx-auto shadow p-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-group p-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Phone Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group p-2">
                    <input
                      className=" btn btn-dark "
                      type="submit"
                      value="Add Contact"
                    />
                    <Link className="btn btn-danger mx-3" to="/">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <h1 className=" display-3 text text-center my-5">
            Student Contact with id - {id} is not exist.
          </h1>
        )}
      </div>
    </>
  );
};

export default EditContact;

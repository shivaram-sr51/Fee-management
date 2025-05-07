import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function EditNewFeeHead() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [EditNewFeeHead, setEditNewFeeHead] = useState({
    name: "",
    amount: "",
    standard: "",
  });

  const { name, amount, standard } = EditNewFeeHead;

  const onInputChange = (e) => {
    setEditNewFeeHead({
      ...EditNewFeeHead,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    LoadEditNewFeeHead();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/NewFeeHead/${id}`, EditNewFeeHead);
    navigate("/MDB");
  };

  const LoadEditNewFeeHead = async () => {
    const result = await axios.get(`http://localhost:8080/NewFeeHead/${id}`);
    setEditNewFeeHead(result.data);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div className="row w-100">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto border rounded p-4 shadow">
          <h2 className="text-center mb-4">Edit FeeHead Setup</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Fee Head Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Amount" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter amount"
                name="amount"
                value={amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Standard" className="form-label">
                Standard
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter standard"
                name="standard"
                value={standard}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger" to="/MDB">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

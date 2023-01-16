import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import requestInstance from "../../controllers/axiosConfig";
import { ClientUser } from "../Utils/User.types";

const ClientForm = (props: { userInfo: ClientUser; isNew?: boolean }) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<ClientUser>(props.userInfo);

  const handleChange = (e: React.FormEvent) => {
    const property = e.target as HTMLTextAreaElement;

    switch (property.name) {
      case "name":
        setUserInfo({ ...userInfo, ...{ name: property.value } });
        break;
      case "email":
        setUserInfo({ ...userInfo, ...{ email: property.value } });
        break;
      case "phone":
        setUserInfo({ ...userInfo, ...{ phone: property.value } });
        break;
      case "location":
        setUserInfo({ ...userInfo, ...{ location: property.value } });
        break;
      case "id":
        setUserInfo({ ...userInfo, ...{ id: property.value } });
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (props.isNew) {
      await requestInstance.post(`http://localhost:5000/api/v1/clients`, {
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.id,
        phone: userInfo.phone,
        location: userInfo.location,
      });
    } else {
      await requestInstance.put(`http://localhost:5000/api/v1/clients`, {
        name: userInfo.name,
        email: userInfo.email,
        _id: userInfo._id,
        id: userInfo.id,
        phone: userInfo.phone,
        location: userInfo.location,
      });
    }
    navigate("/clients");
  };

  return (
    <div id='client-form'>
      <form onSubmit={handleSubmit}>
        <div className='client-label-input-wrapper'>
          <label htmlFor='name'>name: </label>
          <input
            type={"text"}
            className='input'
            name='name'
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className='client-label-input-wrapper'>
          <label htmlFor='email'>email: </label>
          <input
            type={"text"}
            className='input'
            name='email'
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className='client-label-input-wrapper'>
          <label htmlFor='phone'>telefone: </label>
          <input
            type={"text"}
            className='input'
            name='phone'
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className='client-label-input-wrapper'>
          <label htmlFor='location'>endereço: </label>
          <input
            type={"text"}
            className='input'
            name='location'
            value={userInfo.location}
            onChange={handleChange}
          />
        </div>
        <div className='client-label-input-wrapper'>
          <label htmlFor='id'>CPF: </label>
          <input
            type={"text"}
            className='input'
            name='id'
            value={userInfo.id}
            onChange={handleChange}
          />
        </div>
        <div id='client-form-submit-cancel-wrapper'>
          <button className='button' type='submit'>
            submit
          </button>
          <Link to='/clients'>
            <button className='button'>cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;

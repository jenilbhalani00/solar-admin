import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/Navbar'
// import Navbar from '../assets/Navbar';

const Update = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate()

  var { id } = useParams();
  // console.log("id------>",id)

  useEffect(() => {

    axios.get('https://solar-api-d41x.onrender.com/u_data/' + id)
      .then(function (response) {
        // handle success
        console.log(response.data);

        setName(response.data.data.name)
        setEmail(response.data.data.email)
        setPassword(response.data.data.password)
        setMobile(response.data.data.mobile)
        setAge(response.data.data.age)
        setCity(response.data.data.city)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () { 
        // always executed
      });
    // Update(id)
  }, [id])

  const Update = async (id) => {

    const data = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      age: age,
      city: city
    }

    await axios.post('https://solar-api-d41x.onrender.com/update/' + id, data)
      .then((response) => {
        console.log(response.data)
        navigate('/')

      })

    setName("")
    setEmail("")
    setPassword("")
    setMobile("")
    setAge("")
    setCity("")


  }

  return (
    <>

      <div style={{
        backgroundImage: `url('https://www.zunroof.com/blog/wp-content/uploads/2018/07/space-based-solar-system.jpg')`,
        height: `100vh`,
        objectFit: `cover`
      }}>

      <div className='box'>
        <div className='boder border-purple-500 m-auto text-center'>
          <h4 className='text-white'>Update user</h4>
          <input type='name' className='mt-2 fs-5 w-25 rounded' value={name} placeholder='name'
            onChange={(e) => {
              setName(e.target.value
              )
            }}></input>

          <br></br>

          <input type='email' className='mt-2 fs-5 w-25 rounded' value={email} placeholder='email'
            onChange={(e) => {
              setEmail(e.target.value
              )
            }}
          ></input>

          <br></br>

          <input type='password' className='mt-2 fs-5 w-25 rounded' value={password} placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input> <br></br>
              <input type='number' className='mt-2 fs-5 w-25 rounded' value={mobile} placeholder='email'
            onChange={(e) => {
              setMobile(e.target.value
              )
            }}
          ></input>
              <input type='number' className='mt-2 fs-5 w-25 rounded' value={age} placeholder='email'
            onChange={(e) => {
              setAge(e.target.value
              )
            }}
          ></input>
              <input type='text' className='mt-2 fs-5 w-25 rounded' value={city} placeholder='email'
            onChange={(e) => {
              setCity(e.target.value
              )
            }}
          ></input>
          <input type='submit' onClick={() => Update(id)} value="update" className='mt-3 p-2 bg-success text-white rounded' ></input>
        </div>
        </div>
        
      </div>

    </>
  )
}

export default Update

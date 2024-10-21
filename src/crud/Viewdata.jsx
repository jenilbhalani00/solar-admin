import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';


const Viewdata = () => {

    const [lstUser, setLstUser] = useState(null)

  
    const deldata = (id) => {
     
      axios.get('https://solar-api-d41x.onrender.com/delete/' + id)
      axios.get("https://solar-api-d41x.onrender.com")
      .then((res) => {
        setLstUser(res.data.data)
      })
    
    }
  
    useEffect(() => { 
      axios.get("https://solar-api-d41x.onrender.com")
      .then((res) => {
        setLstUser(res.data.data)
        console.log(res.data)
      })
  
    },[])
    return (
        <>
        <div style={{
            backgroundImage:`url('https://www.zunroof.com/blog/wp-content/uploads/2018/07/space-based-solar-system.jpg')`,
            height:`100vh`,
            objectFit:`cover`
            }}>
<br></br>
        <h2 className='text-center text-white fw-normal '>USER DATA</h2> <br></br>

        <div className='container'>

            <Table striped bordered hover className='table-auto border text-center gap-5' >
                <thead>
                    <tr>

                        <td>#</td>
                        <td>name</td>
                        <td>email</td>
                        <td>password</td>
                        <td>mobile</td>
                        <td>age</td>
                        <td>city</td>
                        <td>Update</td>
                        <td>delete</td>

                    </tr>
                </thead>
            
                {lstUser && lstUser.map((item, index) => (
                    <>
                        <tbody>
                            <tr >
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.mobile}</td>
                                <td>{item.city}</td>
                                <td>{item.age}</td>
                                <td><Link to={`/updatedata/${item._id}`}><button className='btn bg-success' > update</button></Link></td>
                                <td><button className='btn bg-danger' onClick={() => deldata(item._id)}>delete</button></td>

                            </tr>

                        </tbody>

                    </>
                ))}
            </Table>

        </div>
        </div>
        </>
    )
}

export default Viewdata

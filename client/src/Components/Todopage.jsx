import React, { useEffect, useState } from 'react'
import ListTodo from './ListTodo'
import axios from 'axios'
import { baseURL } from '../utils/constant'
import PopUp from './PopUp'

const Todopage = () => {

    const [toDos, setToDos] = useState([]);
    const [input, setinput] = useState("");
    const [uiUpdate, setuiUpdate] = useState(false);
    const [showPopup, setshowPopup] = useState(false)
    const [popUpinfo, setpopUpinfo] = useState({})





    useEffect(() => {
        axios.get(`${baseURL}/get`)
            .then((res) => setToDos(res.data))
            .catch((error) => console.log(error))


    }, [uiUpdate])


    // The todo in this saveTodo function which is on the left of input is coming from server side model/Schema

    const saveTodo = () => {
        axios.post(`${baseURL}/save`, { todo: input })
            .then((res) => {
                console.log(res.data)
                setuiUpdate((prevState) => !prevState)
                setinput("")
            })
            .catch((error) => console.log(error))
    }








    return (
        <>


            <div className='title'>
                <h2>Todo Application</h2>
            </div>
            <div className='input_holder'>

                <input value={input} onChange={(e) => setinput(e.target.value)} placeholder="Type anything" type="text" />

                <button onClick={saveTodo}>Add </button>


            </div>
            <div className='list'>
                {toDos.map(item =>
                    <ListTodo
                        key={item._id}
                        text={item.todo}
                        id={item._id}
                        setuiUpdate={setuiUpdate}
                        setshowPopup={setshowPopup}
                        setpopUpinfo={setpopUpinfo}
                    />)}

            </div>

            {showPopup && <PopUp setshowPopup={setshowPopup} popUpinfo={popUpinfo} setuiUpdate={setuiUpdate} />}








        </>
    )
}

export default Todopage
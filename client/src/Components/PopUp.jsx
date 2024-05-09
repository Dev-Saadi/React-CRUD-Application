import axios from 'axios';
import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { baseURL } from '../utils/constant';

const PopUp = ({ setshowPopup, popUpinfo, setuiUpdate }) => {

    const [inputPopup, setinputPopup] = useState(popUpinfo.text)

    const updatebtn = () => {
        axios.put(`${baseURL}/update/${popUpinfo.id}`, { todo: inputPopup })
            .then((res) => {
                console.log(res.data)
                setuiUpdate((prevState) => !prevState)
                setshowPopup(false)
            })
    }


    return (
        <div className='backdrop'>
            <div className="popup">
                <RxCrossCircled className='cross' onClick={() => setshowPopup(false)} />
                <h2>Update</h2>
                <div className="popup__input_holder">
                    <input value={inputPopup} onChange={(e) => setinputPopup(e.target.value)} placeholder="Update Your Listing" type="text" />
                    <button onClick={updatebtn}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default PopUp
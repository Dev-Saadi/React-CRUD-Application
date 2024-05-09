import axios from 'axios';
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { baseURL } from '../utils/constant';

const ListTodo = ({ text, id, setuiUpdate, setshowPopup, setpopUpinfo }) => {


    const deleteTodo = () => {
        axios.delete(`${baseURL}/delete/${id}`)
            .then(res => {
                console.log(res.data)
                setuiUpdate((prevState) => !prevState)
            })
    }

    const TodoUpdate = () => {
        setpopUpinfo({ text, id })
        setshowPopup(true)
    }



    return (
        <div className='toDo'>
            {text}
            <div className='icons'>
                <FaRegEdit onClick={TodoUpdate} className='icon' />
                <RiDeleteBinLine onClick={deleteTodo} className='icon2' />
            </div>
        </div>
    )
}

export default ListTodo
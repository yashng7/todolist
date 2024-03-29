import React from "react"
import styles from './header.module.css'
import Logo from '../../assets/Logo.svg'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useState } from "react"


function Header({ onAddTask }) {

    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(event){
        setTitle(event.target.value)
    }


    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text" placeholder="add a new task" value={title} onChange={onChangeTitle}/>
                <button>
                    Create
                    <AiFillPlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}

export default Header
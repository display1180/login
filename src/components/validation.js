import styles from './login.module.css'
import { useState, useEffect } from 'react'
import Modal from './Modal'

function Login() {
    const [Id, setId] = useState('')
    const [Pw, setPw] = useState('')
    const [Message, setMessage] = useState('')
    const [ModalOpen, setModalOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Id, Pw)
    }

    const closeAction = () => {
        setModalOpen(false)
    }

    const check = (Id, Pw) => {
        setMessage('')
        if (!id) {
            setMessage('아이디가 없습니다')
        }
        if (!Pw) {
            setMessage('패스워드가 없습니다')
        }

        if (Id && Pw) {
            setMessage('로그인했습니다.')
        }
    }

    const saveUserId = (event) => {
        setId(event.target.value)
    }

    const saveUserPw = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 27) {
                closeAction()
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])

    return (
        <div className={styles.wrap}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={Id} onChange={saveUserId} placeholder="아이디"></input>
                <input type="password" className="password" onChange={saveUserPw} value={Pw} placeholder="비밀번호"></input>
                <button type="submit">Login</button>
            </form>
            {Message}
            {ModalOpen && <Modal closeAction={closeAction} />}
        </div>
    )
}

export default Login

import styles from './login.module.css'
import { useState, useEffect } from 'react'
import Modal from './Modal'

// 1. 로그인 화면 간단 구성
// 2. form action 확인
// 3. form 에서 input 읽어오기 !!
// 4. 읽아온 input 확인 or 체크 !!
// 5. 읽어온 input 따라서 올바른 문구 띄우기. ( 아이디 or 비밀번호가 잘못되었다. 올바른 아이디 비밀번호입니다. )

function Login() {
    const [Id, setId] = useState('')
    const [Pw, setPw] = useState('')
    const [Message, setMessage] = useState('')
    const [ModalOpen, setModalOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(Id, Pw)
        check(Id, Pw)

        // console.log('현재 스테이트값', Val);
    }
    const closeAction = () => {
        setModalOpen(false)
    }

    const check = (Id, Pw) => {
        setMessage('')
        if (!Id) {
            setMessage('아이디가 없습니다')
        }
        if (!Pw) {
            setMessage('패스워드가 없습니다')
        }

        if (Id && Pw) {
            setMessage('로그인했습니다')
        }
    }
    const saveUserId = (event) => {
        setId(event.target.value)
        console.log(event.target.value)
    }

    const saveUserPw = (event) => {
        setPw(event.target.value)
        console.log(event.target.value)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 27) {
                // The "Esc" key was pressed
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
            <div className={styles.loginBox}>
                <span>JiranSicurity</span>
                <h2>PRUUF</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="id" value={Id} onChange={saveUserId} placeholder="아이디"></input>
                    <input type="password" className="password" onChange={saveUserPw} value={Pw} placeholder="비밀번호"></input>
                    <button type="submit">Login</button>
                </form>
                <div className={styles.links}>
                    <a href="#">회원가입</a>
                    <button onClick={() => setModalOpen(true)}>비밀번호 초기화</button>
                </div>
                {Message}
                {ModalOpen && <Modal closeAction={closeAction} />}
            </div>
        </div>
    )
}

export default Login

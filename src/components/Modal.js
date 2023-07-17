import React from 'react'

function Modal({ closeAction }) {
    return (
        <>
            <div>모달컴포넌트 여기에 ㅋㅋ</div>
            <button onClick={closeAction}>close</button>
        </>
    )
}

export default Modal

function Modal({ closeAction }) {
    return (
        <>
            <div>모달</div>
            <button onClick={closeAction}>close</button>
        </>
    )
}

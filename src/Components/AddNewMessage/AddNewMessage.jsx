import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'


import './AddNewMessage.css'

export default function AddNewMessage() {
    const { addNewMessage } = useContext(ContactDetailContext)

    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const message = event.target.mensaje.value
        if (!message) return
        addNewMessage(message)
        event.target.reset()
    }
    return (
        <div className="new-message-container">
            <form className="new-message-form" onSubmit={handleSubmitNewMessage}>
                <label htmlFor="mensaje" className="visually-hidden">Mensaje:</label>
                <div className="input-left-icons">
                    <button type="button" className="icon-button">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                            <path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 c-0.795,0-1.439,0.879-1.439,1.962S8.358,11.603,9.153,11.603z M14.849,11.603c0.795,0,1.439-0.879,1.439-1.962 S15.644,7.679,14.849,7.679c-0.795,0-1.439,0.879-1.439,1.962S14.053,11.603,14.849,11.603z M12.001,3.235 c-4.84,0-8.765,3.925-8.765,8.765s3.925,8.765,8.765,8.765s8.765-3.925,8.765-8.765S16.841,3.235,12.001,3.235z M12.001,19.271 c-3.996,0-7.271-3.275-7.271-7.271c0-3.996,3.275-7.271,7.271-7.271c3.996,0,7.271,3.275,7.271,7.271 C19.272,15.996,15.997,19.271,12.001,19.271z M12.001,15.765c2.375,0,4.401-1.341,5.327-3.254h-1.637 c-0.795,1.066-2.031,1.761-3.69,1.761c-1.666,0-2.903-0.699-3.692-1.761H6.671C7.599,14.424,9.626,15.765,12.001,15.765z"></path>
                        </svg>
                    </button>
                    <i class="bi bi-plus"></i>
                </div>
                <input
                    type="text"
                    id='mensaje'
                    name='mensaje'
                    className="new-message-input"
                    placeholder="Escribe un mensaje"
                    autoComplete="off"
                />
                <button type="submit" className="send-button">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
                        <path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                    </svg>
                </button>
            </form>
        </div>
    )
}

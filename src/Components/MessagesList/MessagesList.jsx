import React, { useContext } from 'react'
import './MessagesList.css'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)
    return (
        <div className='messages-list-container'>
            {
                contactSelected.messages.map((message) => {
                    const isMyMessage = message.send_by_me;
                    return (
                        <div
                            key={message.message_id}
                            className={`message-bubble ${isMyMessage ? 'my-message' : 'other-message'}`}
                        >
                            <div className='message-content'>
                                {message.message_content}
                            </div>
                            <div className='message-meta'>
                                <span className='message-time'>
                                    {new Date(message.message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                                {isMyMessage && (
                                    <span className='message-status'>
                                        {/* Simple check mark icon simulation */}
                                        {message.message_state === 'VISTO' ? '✓✓' : '✓'}
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MessagesList


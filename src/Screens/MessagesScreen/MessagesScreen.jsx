import React, { useContext } from 'react'
import './MessagesScreen.css'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList/MessagesList'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage'
import { LuVideo, LuSearch,LuEllipsisVertical } from "react-icons/lu";

export default function MessagesScreen() {

    const {
        contactSelected,
        loadingContactsState
    } = useContext(ContactDetailContext)

    if (loadingContactsState || !contactSelected) {
        return (
            <div className='messages-screen-container'>
                <ContactSidebar />
                <div className='chat-area'>
                    <div className='loading-container'>
                        {/* You could add a spinner here */}
                        Cargando chat...
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='messages-screen-container'>
            <ContactSidebar />
            <div className='chat-area'>
                <div className='chat-header'>
                    <div className='msgr-contact-info'>
                        <button className="back-btn-mobile" onClick={() => window.history.back()} aria-label="Volver">
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </button>
                        <div className='header-avatar-container'>
                            <img
                                src={contactSelected.contact_avatar}
                                alt={contactSelected.contact_name}
                                className='header-avatar'
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/40' }}
                            />

                        </div>
                        <div className='header-contact-text'>
                            <h2 className='header-contact-name'>{contactSelected.contact_name}</h2>
                        </div>
                    </div>
                    <div className='header-actions'>
                        {/* Placeholder for header actions like search, menu etc. */}
                        <button className="icon-btn" title="Videollamada">
                            <LuVideo size={20} />
                        </button>
                        <button className="icon-btn" title="Buscar mensaje">
                            <LuSearch size={20} />
                        </button>
                        <button className="icon-btn" title="Menú">
                            <LuEllipsisVertical size={20} />
                        </button>
                    </div>
                </div>

                <MessagesList />
                <AddNewMessage />
            </div>
        </div>
    )
}

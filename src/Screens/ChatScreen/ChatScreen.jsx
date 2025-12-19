import React, { useContext } from 'react'
import './ChatScreen.css'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ThemeContext } from '../../Context/ThemeContext'

export default function ChatScreen() {
  // Assuming ThemeContext might be needed for conditional classes if not handled by CSS selectors alone
  // But CSS is utilizing general structure. Let's keep it simple.

  return (
    <div className='chat-screen-container'>
      <ContactSidebar />
      <div className='welcome-area'>
        <div className='welcome-image-container'>
          {/* WhatsApp Web generic image placeholder url */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
            alt="WhatsApp Web"
            className='welcome-image'
            style={{ width: '100px', height: '100px', opacity: 0.6 }} // Temporary styling for the placeholder icon
          />
        </div>
        <h1 className='welcome-title'>WhatsApp Web</h1>
        <p className='welcome-text'>
          Envía y recibe mensajes sin necesidad de mantener tu teléfono conectado. <br />
          Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
        </p>
        <div className='welcome-footer'>
          <svg className='lock-icon' viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10v6H6v-6h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path></svg>
          Cifrado de extremo a extremo
        </div>
      </div>
    </div>
  )
}

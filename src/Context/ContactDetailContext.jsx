import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { ContactListContext } from "./ContactListContext";
export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const { contact_id } = useParams()
    const { getContactById, updateContactById, loadingContactsState } = useContext(ContactListContext)

    // Derived state directly from the list context
    const contactSelected = getContactById(contact_id)

    function addNewMessage(content) {
        if (!contactSelected) return;

        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message_content: content,
            message_state: 'NOT_SEND',
            message_created_at: new Date(),
            send_by_me: true
        }
        /* Clonamos el contacto seleccionado */
        const contactSelectedCloned = { ...contactSelected }

        /* Clonamos los mensajes del contacto seleccionado */
        const messagesCloned = [...contactSelectedCloned.messages]

        /* Agregamos al clone de mensajes el nuevo mensaje */
        messagesCloned.push(new_message)

        /* Guardamos la nueva lista clonada modificada */
        contactSelectedCloned.messages = messagesCloned

        /* actualizo el contacto con el nuevo mensaje */
        updateContactById(contactSelectedCloned, contact_id)
    }

    const providerValues = {
        contactSelected,
        addNewMessage,
        loadingContactsState 
    }


    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider

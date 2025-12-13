import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

export default function MessagesList() {
    const {contactSelected} = useContext(ContactDetailContext)
  return (
    <div>MessagesList</div>
  )
}

/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/
import './ContactSidebar.css'
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { LuEllipsisVertical, LuMessageSquarePlus } from "react-icons/lu";

export default function ContactSidebar() {

    return (
        <aside className="aside-contactsidebar">
            <header className="sidebar-header">
                <div className="profile-container">
                    <div className="profile-pic-placeholder" title="Perfil">
                        <img className="contact-avatar" src="/perfil.jpg" alt="Perfil" />
                    </div>
                </div>
                <div className='header-actions'>
                    <LuMessageSquarePlus
                        size={24}
                        style={{ cursor: 'pointer' }}
                        className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
                        title="Nuevo chat" />
                    <LuEllipsisVertical
                        size={24}
                        style={{ cursor: 'pointer' }}
                        title='Menu' />

                </div>
            </header>

            <div className="search-container">
                <ContactSearchForm />
            </div>
            <div className="filter-buttons-container" aria-label="Filtrar conversaciones">
                <button className="filter-chip active">Todos</button>
                <button className="filter-chip">No leídos</button>
                <button className="filter-chip">Favoritos</button>
                <button className="filter-chip">Grupos</button>
            </div>

            <div className="contacts-container">
                <ContactList />
            </div>
        </aside>
    )
}

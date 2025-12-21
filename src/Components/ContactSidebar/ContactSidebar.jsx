/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/
import './ContactSidebar.css'
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'
import { LuEllipsisVertical, LuMessageSquarePlus } from "react-icons/lu";

export default function ContactSidebar() {
    const {isDark, toggleTheme} = useContext(ThemeContext)

    return (
        <aside className={`aside ` + (isDark ? 'aside-dark' : '')}>
            <header className="sidebar-header">
                <div className="profile-container">
                    <div className="profile-pic-placeholder" title="Perfil">
                        <img className="contact-avatar" src="https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/491869305_3656823064617681_9124250933866114570_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa3QHRbHsHa8GkOQ9ufa765gsYpO1xJI61tDLhmPu2Rwn49Q&oe=695198A8&_nc_sid=5e03e0&_nc_cat=111" alt="Perfil" />
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
                        style={{cursor: 'pointer'}}
                        title='Menu' />
                    
                </div>
            </header>
       
            <div className="search-container">
                <ContactSearchForm />
            </div>
            {/* <div className="filter-buttons-container">
                <button className="filter-btn">Todos</button>
                <button className="filter-btn">No leídos</button>
                <button className="filter-btn">Favoritos</button>
                <button className="filter-btn">Grupos</button>
            </div> */}

            <div className="contacts-container">
                <ContactList />
            </div>
        </aside>
    )
}

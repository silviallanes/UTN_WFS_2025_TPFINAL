/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/


import './ContactSidebar.css'
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'

export default function ContactSidebar() {
    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        <aside className={`aside ` + (isDark ? 'aside-dark' : '')}>
            <header className="sidebar-header">
                <div className="profile-container">
                    <div className="profile-pic-placeholder" title="Perfil">
                        <img className="contact-avatar" src="https://media-eze1-2.cdn.whatsapp.net/v/t61.24694-24/491869305_3656823064617681_9124250933866114570_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5Aa3QHRbHsHa8GkOQ9ufa765gsYpO1xJI61tDLhmPu2Rwn49Q&oe=695198A8&_nc_sid=5e03e0&_nc_cat=111" alt="Perfil" />
                    </div>
                </div>
                <div className="header-actions">
                    <button className="icon-btn" title="Comunidades">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 20.664a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5ZM12 6.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z M12 10.5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1Z"></path></svg>
                    </button>
                    <button className="icon-btn" title="Estados">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.072 1.5C6.262 1.5 1.5 6.203 1.5 12.012c0 5.808 4.762 10.512 10.572 10.512s10.572-4.704 10.572-10.512c0-5.81-4.762-10.512-10.572-10.512Zm0 18.253c-4.27 0-7.74-3.473-7.74-7.741 0-4.269 3.47-7.741 7.74-7.741 4.27 0 7.74 3.472 7.74 7.741 0 4.268-3.47 7.741-7.74 7.741Z"></path></svg>
                    </button>
                    <button className="icon-btn" title="Nuevo chat">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821v11.02c0 1.033.641 1.646 1.674 1.646h1.674v3.315c0 .323.23.472.423.472.296 0 .466-.201.625-.36l3.376-3.427h8.233c1.033 0 1.674-.613 1.674-1.646V4.821c0-1.032-.641-1.646-1.674-1.646Zm-5.417 8.01H6.162a.662.662 0 1 1 0-1.323h7.426a.662.662 0 0 1 0 1.323Zm3.12 3.55H6.162a.662.662 0 1 1 0-1.323h10.546a.662.662 0 0 1 0 1.323Zm0-7.1H6.162a.662.662 0 1 1 0-1.323h10.546a.662.662 0 0 1 0 1.323Z"></path></svg>
                    </button>
                    <button className="icon-btn" title="Menú" onClick={toggleTheme}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7Zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9Zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15Z"></path></svg>
                    </button>
                </div>
            </header>
            <div className="search-container">
                <ContactSearchForm />
            </div>
            <div className="contacts-container">
                <ContactList />
            </div>
        </aside>
    )
}

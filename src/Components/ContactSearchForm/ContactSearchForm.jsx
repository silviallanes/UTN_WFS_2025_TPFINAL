import React from 'react'
import './ContactSearchForm.css'

export default function ContactSearchForm() {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <span className="search-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.184 5.184 0 0 0 3.386-1.256l.219.22v.635l5.4 5.396 1.6-1.6-5.396-5.397ZM9.409 13.805a3.6 3.6 0 1 1 3.6-3.6 3.605 3.605 0 0 1-3.6 3.6Z"></path></svg>
        </span>
        <input type="text" placeholder="Buscar chat o iniciar uno nuevo" className="search-input" />
      </div>
      <button className="filter-btn" title="Filtro de chats no leídos">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 18.1h4v-2h-4v2Zm-7-12v2h18v-2H3Zm3 7h12v-2H6v2Z"></path></svg>
      </button>
    </div>
  )
}

import React from 'react'
import './ContactSearchForm.css'

export default function ContactSearchForm() {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <span className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.085.122l3.02 3.02a1 1 0 0 0 1.415-1.414l-3.02-3.02q-.06-.044-.122-.085zM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9" />
        </svg>
        </span>
        <input type="text" placeholder="Buscar chat o iniciar uno nuevo" className="search-input" />
      </div>

     

    </div>
  )
}

import { useState, useEffect } from 'react'
import './App.css'
import ContactList from "../components/ContactList"
import ContactForm from "../components/ContactForm"

interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
}

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentContact, setCurrentContact] = useState<Contact | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/contacts")
      const data = await response.json()
      setContacts(data.contacts)
      console.log(data.contacts)
    } catch (error) {
      console.log("An error occurred while fetching contacts.", error);
    }
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact(null)
  }

  const openEditModal = (contact: Contact) => {
    if (isModalOpen) return;
    setCurrentContact(contact);
    setIsModalOpen(true);
  }

  const onUpdate = () => {
    closeModal()
    fetchContacts()
  }

  return (
    <main className=''>
      <ContactList updateCallback={fetchContacts} contacts={contacts} updateContact={openEditModal} />
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className="close" onClick={closeModal}>&times;</span>
            <ContactForm existingContact={currentContact} updateCallback={onUpdate} />
          </div>
        </div>
      )}
    </main>
  )
}

export default App
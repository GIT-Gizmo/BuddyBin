import React, { useState } from 'react'

interface Contact {
    id: number
    firstName: string
    lastName: string
    email: string
}

interface ContactFormProps {
    existingContact: Contact | null
    updateCallback: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ existingContact, updateCallback }) => {
    const [firstName, setFirstName] = useState(existingContact?.firstName || "")
    const [lastName, setLastName] = useState(existingContact?.lastName || "")
    const [email, setEmail] = useState(existingContact?.email || "")

    const updating = existingContact !== null

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email,
        }

        const url = `http://127.0.0.1:5000/${updating ? `update_contact/${existingContact.id}` : `create_contact`}`
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }
        const response = await fetch(url, options)

        if (!response.ok) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type='submit'>{updating ? "Update" : "Create"}</button>
        </form>
    )
}

export default ContactForm
import React from "react";

interface Contact {
    id: number
    firstName: string
    lastName: string
    email: string
}

interface ContactListProps {
    contacts: Contact[];
    updateContact: (contact: Contact) => void;
    updateCallback: () => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, updateContact, updateCallback }) => {
    const onDelete = async (id: number) => {
        try {
            const options = {
                method: "DELETE"
            }

            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)

            if (response.ok) {
                updateCallback()
            }
        } catch (error) {
            console.log("Failed to delete.", error);
        }
    }

    return (
        <main>
            <h2>Contacts</h2>

            <table>
                <thead>
                    <tr className="table-head">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button onClick={() => updateContact(contact)}>Update</button>
                                <button onClick={() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default ContactList;
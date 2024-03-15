import React from "react";
import { ContactListProps } from "../Interfaces/interface";
import ContactCard from "./ContactCard";


const ContactList = ({ contactData }: ContactListProps) => {
    const renderData = contactData.map((data) => {
        return(
            <ContactCard id={data.id} name={data.name} email={data.email} />
        )
    })
return (
    <>
        <div>{renderData}</div>
    </>
);

} 

export default ContactList
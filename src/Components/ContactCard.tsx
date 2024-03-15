import React from "react";
import { Contact } from "../Interfaces/interface";

const ContactCard=({name,email}:Contact)=>{
return(
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <p className="font-semibold">{name}</p>
      <p className="text-gray-600">{email}</p>

    </div>
);
}

export default ContactCard;
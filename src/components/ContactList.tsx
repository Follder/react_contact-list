import { useEffect } from "react";
import axios from 'axios';
import { ContactItem } from "./ContactItem";

const apiKey = 'X-Nimble-Token';

export const ContactList = () => {
  useEffect(() => {
    axios.get("/api/v1/contacts", {
      headers: {
        'Authorization': `Bearer ${apiKey}`
        // або, якщо API вимагає інший формат заголовка, наприклад:
        // 'x-api-key': apiKey
      }
    })
      .then(res => console.log(res.data))
      .catch(error => console.error('Error', error))
  }, []);

  return (
    <div className="justify-self-auto w-full md:w-3/4 px-5 self-end">
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
};

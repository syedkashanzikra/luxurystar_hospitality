import { Contact } from '../models/contactModel.js';

// Store Contact
export const storeContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact stored successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch all Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: 'Contact deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

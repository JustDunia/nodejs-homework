const Contact = require('./schemas/contact')

const getAllContacts = async () => {
	return Contact.find()
}

const getContactById = async id => {
	return Contact.findOne({ _id: id })
}

const createContact = async ({ name, email, phone }) => {
	return Contact.create({ name, email, phone })
}

const updateContact = async (id, fields) => {
	return Contact.findByIdAndUpdate({ _id: id }, fields, { new: true })
}

const updateStatusContact = async (id, favorite) => {
	return Contact.findByIdAndUpdate({ _id: id }, { favorite: favorite }, { new: true })
}

const removeContact = async id => {
	return Contact.findByIdAndRemove({ _id: id })
}

module.exports = {
	getAllContacts,
	getContactById,
	removeContact,
	createContact,
	updateContact,
	updateStatusContact,
}
const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find(note => note.title === title)
	if (!duplicateNote) {
		notes.push({
			title,
			body
		})
		console.log(chalk.green.inverse(`new note ${title} added`));
	} else {
		notes
		console.log(chalk.red.inverse(`the title: ${title} already exists`));
	}
	notes
	saveNotes(notes)

}
const removeNotes = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter(note => note.title !== title)
	if (notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse(`no note found`))
	} else console.log(chalk.green.inverse(`note removed!`));
	saveNotes(notesToKeep)
}

const listNotes = () => {
	console.log(chalk.white.inverse("Your notes "))
	loadNotes()
		.forEach(note => console.log(note.title));
}

const readNotes = (title) => {
	const noteToRead = loadNotes().find(note => note.title === title)
	if (!noteToRead) {
		console.log(`Note not found`)
	} else console.log(chalk.yellow.inverse('your note reads: ') + chalk.yellow.inverse(noteToRead.body));
}


const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

module.exports = {
	addNotes,
	removeNotes,
	listNotes,
	readNotes
};

const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green.inverse("Your notes:"));
  notes.map(note => console.log(chalk.yellow(`* ${note.title}`)));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesFiltered = notes.filter(note => note.title !== title);

  if (notes.length > notesFiltered.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesFiltered);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const readNote = title => {
 const notes = loadNotes();
 const noteToRead = notes.find(note =>  note.title === title);

 if(!noteToRead){
   console.log(chalk.red('No note found...'));
 }else{
   console.log(chalk.yellow(`Note title: ${noteToRead.title}`));
   console.log(noteToRead.body);
 }
}
module.exports = {
  listNotes: listNotes,
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote
};

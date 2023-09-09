const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");
const deleteNoteBtn = document.getElementsByClassName(".delete-note");
const category = document.querySelector("#category");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");

const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");

let selectedValue;
let cardID = 0;

const addNote = () => {
	if (
		category.options[category.selectedIndex].value !== "0" &&
		textarea.value !== ""
	) {
		error.style.visibility = "hidden";
		createNote();
	} else {
		error.style.visibility = "visible";
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardID);

	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
    <div class="note-body">
        ${textarea.value}
    </div>`;

	noteArea.appendChild(newNote);
	cardID++;
	textarea.value = "";
	category.selectedIndex = 0;
	notePanel.style.display = "none";
	setColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const setColor = (note) => {
	switch (selectedValue) {
		case "Szkoła":
			note.style.backgroundColor = "rgb(0,140,255)";
			break;
		case "Praca":
			note.style.backgroundColor = "rgb(0,255,68)";
			break;
		case "Zakupy":
			note.style.backgroundColor = "rgb(255,243,0)";
			break;
		case "Obowiązki":
			note.style.backgroundColor = "rgb(233, 35, 35)";
			break;
		case "Inne":
			note.style.backgroundColor = "rgb(226, 35, 233)";
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

addBtn.addEventListener("click", () => {
	notePanel.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
	notePanel.style.display = "none";
	error.style.visibility = "hidden";
	textarea.value = "";
	category.selectedIndex = 0;
});

saveBtn.addEventListener("click", addNote);

deleteAllBtn.addEventListener("click", () => {});

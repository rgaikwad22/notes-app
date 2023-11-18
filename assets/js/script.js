// variable declaration for selectors 
var addNotes = document.querySelector(".add-note-btn"),
    allNotes = document.querySelector(".notes-container");

// global variable declarations 
var notesData = [],
    textArea;

// event declarations
addNotes.addEventListener("click", createNotes)

// function declaration 
function createNotes() {
  var appendNotes = [];

  appendNotes = `<li>
      <div class="notes-top">
        <button class="icon edit-icon">edit</button>
        <button class="icon delete-icon">delete</button>
      </div>
      <form action="#FIXME">
        <div class="input-grp">
          <textarea cols="37" rows="17" name="textarea" class="text-area"></textarea>
        </div>
      </form>
    </li>`;

  allNotes.innerHTML += appendNotes;

  var textAreaContainer = allNotes.querySelectorAll("li");
  textAreaContainer.forEach((element) => {
    element.addEventListener("change", function () {
      textArea = element.querySelector('.text-area')
      if (textArea.value !== "") {
        notesData.push(textArea.value.trim());
        textArea.disabled = true;
      }
      textArea.innerHTML = textArea.value.trim();
    })
    editNote(element);
    deleteNotes(element);
  })
}

function editNote(element) {
  var edit = element.querySelectorAll(".edit-icon");
  edit.forEach(function (el) {
    el.addEventListener("click", function () { 
      var editText = element.querySelector(".text-area");
      if(editText.value.length > 0){
        editText.disabled = false;
        editText.focus();
      }
    })
  })
}

function deleteNotes(element) {
  var deleteBtn = element.querySelectorAll(".delete-icon");

  deleteBtn.forEach(function (el) {
    el.addEventListener("click", function () {
      element.remove();
    })
  })
}
const sem = document.getElementById("sem");

console.log(sem);

function onSemClick(context) {
  const semList = document.querySelectorAll(".semList");

  for (const ele of semList[0].children) {
    ele.classList.remove("active");
    //console.log(ele)
  }
  context.classList.add("active");

  // console.log(context);
  // context.addClassName('active');
}

const CSENotesPerSEM = {
  sem3: {
    sem: 3,
    syllabus: ["css", "js"],
    syllabusImg: ["/img/css.png", "/img/js.png"],
    syllabusLink: [
      "/notes/CSS_Complete_Notes (2) (1).pdf",
      "/notes/JavaScript Chapter 1 - Practice Set.pdf",
    ],
  },
  sem4: {
    sem: 4,
    syllabus: ["java", "python", "html"],
    syllabusImg: ["/img/java.svg","/img/python.svg","/img/html.png"],
    syllabusLink: ["/chapter_wise_notes/Java_ChapterWise_Notes.zip","/chapter_wise_notes/Python_ChapterWise_Notes.zip","/chapter_wise_notes/HTML_ChapterWise_Notes.zip"],
  },
  sem5: {
    sem: 5,
    syllabus: ["c", "ts", "php"],
    syllabusImg: ["/img/c.png","/img/ts.png","/img/php.svg"],
    syllabusLink: ["/chapter_wise_notes/C_ChapterWise_Notes.zip","/notes/JS_Chapterwise_Notes (1).pdf"],
  },
  sem6: {
    sem: 6,
    syllabus: ["linux", "dsa"],
    syllabusImg: ["/img/linux.png","/img/dsa.png"],
    syllabusLink: ["/notes/Linux Helpful Commands List.pdf","/notes/DSA_CompleteNotes (1).pdf"],
  },
};
var buttonIds = ["sem3", "sem4", "sem5", "sem6"];

// Loop through the array of button IDs
buttonIds.forEach(function (id) {
  // Get the button element by its ID
  var button = document.getElementById(id);

  // Add onclick event listener
  button.addEventListener("click", function () {
    getSyllabus(id);
  });
});

const getSyllabus = (sem) => {
  console.log(CSENotesPerSEM[sem].syllabus);

  const syllabusContainer = document.getElementById("syllabus-container");
  while (syllabusContainer.firstChild) {
    syllabusContainer.removeChild(syllabusContainer.firstChild);
  }
  //const semesterDiv = document.createElement("div");
  for (const subject of CSENotesPerSEM[sem].syllabus) {
    // Create a new div for each subject
    const subjectDiv = document.createElement("div");
    subjectDiv.className = "subject";
    subjectDiv.innerText = subject;

    // Create a new div for the image
    const imageDiv = document.createElement("div");
    imageDiv.className = "syllabusimage";

    // Get the image source from CSENotesPerSEM
    const imageSrc =
      CSENotesPerSEM[sem].syllabusImg[
        CSENotesPerSEM[sem].syllabus.indexOf(subject)
      ];

    // Create an image element and set its source
    const image = document.createElement("img");
    image.src = imageSrc;

    // Append the image to the image div
    imageDiv.appendChild(image);

    // Create an a tag with a button inside it
    const aTag = document.createElement("a");
    aTag.href =
      CSENotesPerSEM[sem].syllabusLink[
        CSENotesPerSEM[sem].syllabus.indexOf(subject)
      ];
    const button = document.createElement("button");
    button.className = "subjectbutton";
    button.innerText = "Go to syllabus";

    aTag.appendChild(button);

    // Append the image div to the subject div
    subjectDiv.appendChild(imageDiv);
    subjectDiv.appendChild(aTag);

    //semesterDiv.appendChild(subjectDiv);
    syllabusContainer.appendChild(subjectDiv);
  }
};

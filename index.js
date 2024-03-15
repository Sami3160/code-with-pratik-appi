// import {data} from "./JSON/subjects.js"
let data;
fetch("./JSON/subjects.json")
  .then(response => response.json())
  .then(res => data = res)
  .catch(err => console.log(err))

const subjectRef = {
  "Sem III": "semister3",
  "Sem IV": "semister4",
  "Sem V": "semister5",
  "Sem VI": "semister6",
  "Sem VII": "semister7",
  "Sem VIII": "semister8"
}
// console.log(data)
function onSemClick(context) {
  const semList = document.querySelectorAll(".semList");
  const syllabusContainer = document.getElementById("syllabus-container");
  while (syllabusContainer.firstChild) {
    syllabusContainer.removeChild(syllabusContainer.firstChild)
  }
  // for (const component in syllabusContainer.children) {
  //   console.log(component)
  //   syllabusContainer.removeChild(component)
  // }


  const semData = data[subjectRef[context.innerText]]

  const subjectData = semData["subject"]
  const subjectArray= subjectData[0]
  const syllabus=subjectData[1]



  //creating divs
  const semisterDiv= document.createElement('div');
  semisterDiv.className="semisterDiv w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-3 p-2 border-2 border-gray-300 rounded-md overflow-y-scroll space-x-1 ";
  semisterDiv.id="semisterDiv";
  syllabusContainer.appendChild(semisterDiv)

  //creating cards
  subjectArray.map((obj)=>{
    const cards=document.createElement("div")
    cards.className=" p-2  my-4 shadow-lg hover:bg-purple-200 flex flex-col  font-mono cursor-pointer"
    cards.setAttribute("onclick","handleCardClick(this)")
    const info=document.createElement('div')
    info.className="info text-thin text-xl"
    info.innerHTML=obj["name"]
    // info.innerHTML(obj["name"])
    const description=document.createElement('div')
    description.className="description mt-4 text-sm p-2 bg-gray-200 shadow-inner rounded-xl"
    description.innerHTML="schs"
    cards.appendChild(info)
    cards.appendChild(description)
    semisterDiv.appendChild(cards)
  })


  for (const ele of semList[0].children) {
    ele.classList.remove("active");
  }
  context.classList.add("active");

}

function handleCardClick(){

}

function temp() {
  alert("hello")
}


// const CSENotesPerSEM = {
//   sem3: {
//     sem: 3,
//     syllabus: ["css", "js"],
//     syllabusImg: ["/img/css.png", "/img/js.png"],
//     syllabusLink: [
//       "/notes/CSS_Complete_Notes (2) (1).pdf",
//       "/notes/JavaScript Chapter 1 - Practice Set.pdf",
//     ],
//   },
//   sem4: {
//     sem: 4,
//     syllabus: ["java", "python", "html"],
//     syllabusImg: ["/img/java.svg","/img/python.svg","/img/html.png"],
//     syllabusLink: ["/chapter_wise_notes/Java_ChapterWise_Notes.zip","/chapter_wise_notes/Python_ChapterWise_Notes.zip","/chapter_wise_notes/HTML_ChapterWise_Notes.zip"],
//   },
//   sem5: {
//     sem: 5,
//     syllabus: ["c", "ts", "php"],
//     syllabusImg: ["/img/c.png","/img/ts.png","/img/php.svg"],
//     syllabusLink: ["/chapter_wise_notes/C_ChapterWise_Notes.zip","/notes/JS_Chapterwise_Notes (1).pdf"],
//   },
//   sem6: {
//     sem: 6,
//     syllabus: ["linux", "dsa"],
//     syllabusImg: ["/img/linux.png","/img/dsa.png"],
//     syllabusLink: ["/notes/Linux Helpful Commands List.pdf","/notes/DSA_CompleteNotes (1).pdf"],
//   },
// };
// var buttonIds = ["sem3", "sem4", "sem5", "sem6"];onSemClick

// // // Loop through the array of button IDs
// // buttonIds.forEach(function (id) {
// //   // Get the button element by its ID
// //   var button = document.getElementById(id);

// //   // Add onclick event listener
// //   button.addEventListener("click", function () {
// //     getSyllabus(id);
// //   });
// // });

// const getSyllabus = (sem) => {
//   console.log(CSENotesPerSEM[sem].syllabus);

//   const syllabusContainer = document.getElementById("syllabus-container");
//   while (syllabusContainer.firstChild) {
//     syllabusContainer.removeChild(syllabusContainer.firstChild);
//   }
//   //const semesterDiv = document.createElement("div");
//   for (const subject of CSENotesPerSEM[sem].syllabus) {
//     // Create a new div for each subject
//     const subjectDiv = document.createElement("div");
//     subjectDiv.className = "subject";
//     subjectDiv.innerText = subject;

//     // Create a new div for the image
//     const imageDiv = document.createElement("div");
//     imageDiv.className = "syllabusimage";

//     // Get the image source from CSENotesPerSEM
//     const imageSrc =
//       CSENotesPerSEM[sem].syllabusImg[
//         CSENotesPerSEM[sem].syllabus.indexOf(subject)
//       ];

//     // Create an image element and set its source
//     const image = document.createElement("img");
//     image.src = imageSrc;

//     // Append the image to the image div
//     imageDiv.appendChild(image);

//     // Create an a tag with a button inside it
//     const aTag = document.createElement("a");
//     aTag.href =
//       CSENotesPerSEM[sem].syllabusLink[
//         CSENotesPerSEM[sem].syllabus.indexOf(subject)
//       ];
//     const button = document.createElement("button");
//     button.className = "subjectbutton";
//     button.innerText = "Go to syllabus";

//     aTag.appendChild(button);

//     // Append the image div to the subject div
//     subjectDiv.appendChild(imageDiv);
//     subjectDiv.appendChild(aTag);

//     //semesterDiv.appendChild(subjectDiv);
//     syllabusContainer.appendChild(subjectDiv);
//   }
// };


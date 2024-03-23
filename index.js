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
  semisterDiv.className="semisterDiv w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:m-3 p-2 border-2 border-gray-300 rounded-md overflow-y-scroll space-x-1 ";
  semisterDiv.id="semisterDiv";
  syllabusContainer.appendChild(semisterDiv)

  //creating cards
  subjectArray.map((obj,index)=>{
    const cards=document.createElement("div")
    cards.className="cseCard bg-purple-100 p-2  my-4 shadow-lg hover:bg-purple-200 flex flex-col min-w-48 font-mono cursor-pointer"
    cards.setAttribute("onclick","handleCardClick(this)")
    // cards.setAttribute("onclick","handleCardClick(this)")
    cards.setAttribute("subject-info", subjectRef[context.innerText]+":"+index)
    const info=document.createElement('div')
    info.className="info text-thin text-xl"
    info.innerHTML=obj["name"]
    
    // info.innerHTML(obj["name"])
    const description=document.createElement('div')
    const dataUl=document.createElement('ul')
    const theoryLi=document.createElement('li')
    const practicalLi=document.createElement('li')
    const externalLi=document.createElement('li')
    const projectLi=document.createElement('li')

    dataUl.className="flex flex-col p-1 list-none text-xs md:text-sm"
    theoryLi.className="text-sm"
    practicalLi.className="text-sm"
    externalLi.className="text-sm"
    projectLi.className="text-sm"

    theoryLi.innerText="Theory Exam :"+ obj["props"].isTheoryTest
    practicalLi.innerText="Practical Exam :"+ obj["props"].isPracticalTest
    externalLi.innerText="Project :"+ obj["props"].isProject
    projectLi.innerText="External :"+ obj["props"].isExternal

    dataUl.appendChild(theoryLi);
    dataUl.appendChild(practicalLi);
    dataUl.appendChild(externalLi);
    dataUl.appendChild(projectLi);



    description.className="description mt-4 text-sm p-2 bg-gray-200 shadow-inner rounded-xl"
    description.appendChild(dataUl)
    cards.appendChild(info)
    cards.appendChild(description)
    semisterDiv.appendChild(cards)
  })


  for (const ele of semList[0].children) {
    ele.classList.remove("active");
  }
  context.classList.add("active");

}

function handleCardClick(context){
  const syllabusContainer=document.getElementById("syllabus-container")
  while(syllabusContainer.firstChild){
    syllabusContainer.removeChild(syllabusContainer.firstChild)
  }

  const [semNo, subjectIndex]=context.getAttribute("subject-info").split(":")
  const semData = data[semNo]
  const subjectInfo = semData.subject[0][subjectIndex]
  console.log(semNo)
  console.log(subjectInfo)

  const semisterDiv= document.createElement('div');
  semisterDiv.className="semisterDiv w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:m-3 p-2 border-2 border-gray-300 rounded-md overflow-y-scroll space-x-1 ";
  semisterDiv.id="semisterDiv";
  syllabusContainer.appendChild(semisterDiv)

  const notesData= subjectInfo.props.notes;
  const syllabusData = subjectInfo.props.syllabus;
  const questionPaperData = subjectInfo.props.questionPapers;
  const referenceBookData = subjectInfo.props.referenceBooks;


  // syllabus cards code
  const syllabusComponent = document.createElement("div")
  syllabusComponent.className="col-span-1 min-w-24 flex flex-col space-y-4 justify-center bg-purple-100 shadow-xl p-2  text-xs sm:text-sm hover:bg-purple-200 flex flex-col font-thin my-4"
  const sbinfo=document.createElement('div')
  sbinfo.className="text-sm"
  sbinfo.innerHTML=`[${subjectInfo.name} syllabus]`
  
  const a=document.createElement("a");
  a.href=syllabusData
  a.target="_blank"
  a.title="Download or View"
  a.innerHTML="Download"
  a.className="inline-block text-white bg-purple-700 rounded-full p-2 text-sm cursor-pointer hover:bg-purple-900 text-center"
  syllabusComponent.appendChild(sbinfo)
  syllabusComponent.appendChild(a)
  semisterDiv.appendChild(syllabusComponent)




  // notes cards code
  notesData.map((obj, index)=>{
    const notesComponent= document.createElement("div")  
    const info=document.createElement('div')
    const info2=document.createElement('div')
    const a=document.createElement("a");
    const no=document.createElement("p")

    notesComponent.className="col-span-1 min-w-24 flex flex-col space-y-4 bg-purple-100 shadow-xl p-2  text-xs sm:text-sm hover:bg-purple-200 flex flex-col font-thin my-4"
    info.innerHTML=`[Notes for ${subjectInfo.name}]`
    info2.innerHTML="Type: PDF"
    no.className="text-3xl font-extrabold p-2"
    no.innerHTML=`#${index+1}`
    a.href=obj.note
    a.target="_blank"
    a.title="Download or View"
    a.innerHTML="Download"
    a.className="inline-block text-white bg-purple-700 rounded-full p-2 text-sm cursor-pointer hover:bg-purple-900 text-center"
    
    notesComponent.appendChild(no)
    notesComponent.appendChild(info)
    notesComponent.appendChild(info2)
    notesComponent.appendChild(a)
    semisterDiv.appendChild(notesComponent )
  })



  // question bank cards code
  questionPaperData.map((obj, index)=>{
    const questionPaperComponent= document.createElement("div")  
    const info=document.createElement('div')
    const info2=document.createElement("div")
    const a=document.createElement("a");
    const no=document.createElement("p")


    questionPaperComponent.className="col-span-1 min-w-24 flex flex-col space-y-3 bg-purple-100 shadow-xl p-2  text-xs sm:text-sm hover:bg-purple-200 flex flex-col font-thin my-4"
    info.innerHTML=`[Question papers: ${subjectInfo.name}]`
    info2.innerHTML=`Year: ${obj.year}`
    no.className="text-3xl font-extrabold p-2"
    no.innerHTML=`#${index+1}`
    a.href=obj.questionPaper
    a.target="_blank"
    a.title="Download or View"
    a.innerHTML="Download"
    a.className="inline-block text-white bg-purple-700 rounded-full p-2 text-sm cursor-pointer hover:bg-purple-900 text-center"
    

    questionPaperComponent.appendChild(no)
    questionPaperComponent.appendChild(info)
    questionPaperComponent.appendChild(info2)
    questionPaperComponent.appendChild(a)
    semisterDiv.appendChild(questionPaperComponent )
  })


  // reference book cards code
  referenceBookData.map((obj, index)=>{
    const referenceBookComponent= document.createElement("div")  
    const info=document.createElement('div')
    const info2=document.createElement('div')
    const info3=document.createElement('div')
    const a=document.createElement("a");
    const no=document.createElement("p")


    referenceBookComponent.className="col-span-1 min-w-24 flex flex-col space-y-2 bg-purple-100 shadow-xl p-2  text-xs sm:text-sm hover:bg-purple-200 flex flex-col font-thin my-4"
    info.innerHTML=`[Reference books for ${subjectInfo.name}]`
    info2.innerHTML=`Year: ${obj.year}`
    info3.innerHTML=`Author: ${obj.author}`
    no.className="text-3xl font-extrabold p-2"
    no.innerHTML=`#${index+1}`
    a.href=obj.book
    a.target="_blank"
    a.title="Download or View"
    a.innerHTML="Download"
    a.className="inline-block text-white bg-purple-700 rounded-full p-2 text-sm cursor-pointer hover:bg-purple-900 text-center"
    

    referenceBookComponent.appendChild(no)
    referenceBookComponent.appendChild(info)
    referenceBookComponent.appendChild(info2)
    referenceBookComponent.appendChild(info3)
    referenceBookComponent.appendChild(a)
    semisterDiv.appendChild(referenceBookComponent)
  })
  


  
  info.className="info text-thin text-xl"

}

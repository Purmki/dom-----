// var paragraph = document.getElementById("myFirstP")
// console.log(paragraph.innerText)


// var h1Elem= document.getElementById("myh1")
// h1Elem.innerText="my dom app"


// var firsth2Elem =document.getElementById("firsth2")
// console.log(firsth2Elem.innerText)
// var firsth3Elem =document.getElementById("firsth3")
// console.log(firsth3Elem.innerText)
// var firsth4Elem =document.getElementById("firsth4")
// console.log(firsth4Elem.innerText)
// var firsth5Elem =document.getElementById("firsth5")
// console.log(firsth5Elem.innerText)


// var elementsArray=document.getElementsByClassName("hClass")
// for(i=0; i<elementsArray.length; i++){
//     console.log(elementsArray[i].innerText)
// }

// console.log(elementsArray[1].innerText)

// console.log(elementsArray[2].innerText)


// var divCollection= document.getElementsByTagName("div")
// for(i=0; i<divCollection.length; i++){
// console.log(divCollection[i].innerText)
// }



// function getName(){
//   var myh2Elem=  document.getElementById("myh2")
//   myh2Elem.innerText= prompt("insert a name")
// }
// getName()


//9
// function getColorAndNumber(){
//     var number= +prompt("insert a number")
//     var color= prompt("insert a color")

//     for(i=0; i<number; i++){
//  document.body.innerHTML+=`<span> ${color}</span>`
// }
// }
// getColorAndNumber()


//10
// function textInTag(){
// var text=prompt("insert a text")
// var tagFromUser =prompt("insert a tag")
// document.body.innerHTML+=`<${tagFromUser}>${text}</${tagFromUser}>`
// }
// textInTag()



//11  מבקש מהמשתמש טייפ ויוצר בחלון
// function inputFromUser(){
// var tagFromUser =prompt("insert a tag")
// document.body.innerHTML+=`<${tagFromUser}>${{}}</${tagFromUser}>`
// }
// inputFromUser()



//12  פונקציה שמבקשת כארגומנט קלאס וטקסט ושמשנה את מה שיש בקלאס לארגומנט
// function classAndText (myClass,myText){
//     var elements=document.getElementsByClassName(myClass)
//     for(i=0; i<elements.length; i++){
//         elements[i].innerHTML=myText;
// }
// }
// classAndText("hClass","did it!")



//13 פונקציה שמוסיפה לאלמנט p ספאן עם טקסט
// function enterSpan(){
//     var elements= document.getElementsByClassName("empy")
//     for(i=0; i<elements.length; i++){
//         elements[i].innerHTML+=`<span>"njkbj"</span>`
//     }
// }
// enterSpan()


//14   input פונקציה שמבקשת שם וגיל ואם הגיל גדול מ18 מוסיפה 
// function getFullNameAndAge(){
//     var fullName=prompt("insert a fullName")
// var ageFromUser =+prompt("insert an age")
// document.body.innerHTML+=`<h1>${fullName}</h1><h2>${ageFromUser}</h2>`
// if(ageFromUser>18){
//     document.body.innerHTML+=`<div><input type="button"></div>`
// }
// }
// getFullNameAndAge()


//15 פונקציה שמקבלת אובייקט מהמשתמש ומדפיסה לחלון כולל מקום ללינק תמונה
// function movieInfo(){
// var object={
//     name:prompt("insert a name"),
//     views:+prompt("insert a number of views"),
//     year:+prompt("insert a year"),
//     movieImage: prompt("picture link")
// }
// document.body.innerHTML+=`
// <h1>${object.name}</h1>
// <h2>${object.views}</h2>
// <h3>${object.year}</h3>
// <h4><img src="${object.movieImage}"</h4>`


// }
// movieInfo()


//16
//--------------------------------------------------
// function workerObject(){
// var workerInfo={
//     workerFirstName: document.getElementById("workerDiv").innerHTML+=`<h1><input type="text"></h1>`
// }
// }
// workerObject()



//17 פונקציה שמקבלת אובייקט של מידע על בניינים עי המשתמש ומדפיסה לחלון לפי כמות פעמים שהמשתמש בוחר
// function buildingObjectLoop(){
//    var buildings=[]
// var numberFromUser= +prompt("insert a number of objects")
// for(i=0; i<numberFromUser; i++){
//     var buildingObject={
//         constructorName:prompt("insert a name"),
//         NumberOfFloors:+prompt("insert a number of floors"),
//         numberOfAppartments:+prompt("insert a number of appartments"),
//         companyName:prompt("insert a company name"),
//     }
//     buildings.push(buildingObject);
// }
// for (var i = 0; i < buildings.length; i++) {
//         document.body.innerHTML+=`
//         <h1>${buildings[i].constructorName}</h1>
//         <p>${buildings[i].NumberOfFloors}</p>
//         <article>${buildings[i].numberOfAppartments}</article>
//         <span>${buildings[i].companyName}</span>`;
// }
// }
// buildingObjectLoop()


//18   פונקציה שסופרת את כמות האלמנטים שהוזנו לחלון בשאלה 17
// function numberOfElements(){
// console.log(numberFromUser*4)
// }
// numberOfElements()


//19 פונקציה דומה לקודמת שעובדת כרגיל אבל נותנת כמות קומות רק אם היא גבוהה מ10
// function buildingObjectLoop(){
//    var buildings=[]
// var numberFromUser= +prompt("insert a number of objects")
// for(i=0; i<numberFromUser; i++){
//     var buildingObject={
//         constructorName:prompt("insert a name"),
//         NumberOfFloors:+prompt("insert a number of floors"),
//         numberOfAppartments:+prompt("insert a number of appartments"),
//         companyName:prompt("insert a company name"),
//     }
//     buildings.push(buildingObject);
// }
// for (var i = 0; i < buildings.length; i++) {   
//         document.body.innerHTML+=`
//         <h1>${buildings[i].constructorName}</h1>
//         <article>${buildings[i].numberOfAppartments}</article>
//         <span>${buildings[i].companyName}</span>`;
//  if(buildings[i].NumberOfFloors>10){
//     document.body.innerHTML +=`<p>${buildings[i].NumberOfFloors}</p>`
//  }   
    
// }
// }
// buildingObjectLoop()


//20
//---------------------
// function peopleObject(){
// var numberOfPeople=+prompt("insert a number of people")
// for(i=0; i<numberOfPeople; i++){
//     theActualObject={
//         firstName:prompt("insert a name"),
//         adress:prompt("insert an adress")
//     }
//     document.getElementById("myList").innerHTML+=`
//     <li>${theActualObject[i].firstName}</li>`
// }

// }
// peopleObject()



//22
// function getAndReturnCountries(){
//  document.getElementById("div container").innerHTML+="<ol id='country list'></ol>"
//    var getCountries =  document.getElementById('country list')
//    for(i=0; i<5; i++){
//     var country=prompt("insert a country")
//     getCountries.innerHTML+="<li>"+country+"</li>"
//    }
// }
// getAndReturnCountries()



//23
// var teacher={
//     firstName: prompt("insert a name"),
//     lastName: prompt("insert a last name"),
//     email: prompt("insert an email"),
//     profession: prompt("insert a profession")
// }

// document.getElementById("div container").innerHTML+=`"<table>"
// "<thead>" "<th>first name</th>""<th>last name</th>""<th>email</th>""<th>profession</th>"
// "</thead>"
// "<tbody>"
// <tr><td>${teacher.firstName}</td><td>${teacher.lastName}</td>
// <td>${teacher.email}</td><td>${teacher.profession}</td><td></td></tr>
// "<tbody>"
// "</table>"`



//24

// var companiesArray = [
//     {company: "Apple", city:"Herzliya", NumberOfEmployees: 2874, AmLookingForEmployees: "no"},
//     {company: "Sentra", city:"Tel Aviv", NumberOfEmployees: 37, AmLookingForEmployees: "yes"},
//     {company: "Microsoft", city:"Petah Tikva", NumberOfEmployees: 9765, AmLookingForEmployees: "no"},
// ];
// for(i=0; i<companiesArray.length; i++){
// document.getElementById("myTbody").innerHTML+=
// ` <tr><td>${companiesArray[i].company}</td>
// <td>${companiesArray[i].city}</td>
// <td>${companiesArray[i].NumberOfEmployees}</td>
// <td>${companiesArray[i].AmLookingForEmployees}</td></tr>`
// }


// //25
// tdArray= document.getElementsByTagName('td');
// for(i=0; i<tdArray.length; i++){
//     tdArray[i].style="border: 1px solid;background:gray"
// }

//26 פונקציה שמקבלת אובייקט ומחזירה אותו למסך
// function managerInfo (){
// var manager={
//     firstName:"bob",
//     lastName: "habanai",
//     age: 34,
//     salary: 15000,
// }
// document.body.innerHTML+=`
// <h1>${manager.firstName}</h1>
// <h2>${manager.lastName}</h2>
// <h3>${manager.age}</h3>
// <h4>${manager.salary}</h4>`
// }
// managerInfo()




//27  פונקציה שמקבלת אובייקט ומחזירה אותו למסך בצבע
// function fruitInfo (){
//     var fruit={
//         firstName:"bob",
//         lastName: "hatapuz",
//         color: "orange",
//         type: "orange",
//     }
//     document.body.style.color = "orange";
//     document.body.innerHTML+=`
//     <h1>${fruit.firstName}</h1>
//     <h2>${fruit.lastName}</h2>
//     <h3> ${fruit.color}</h3>
//     <h4>${fruit.type}</h4>`
//     }
//     fruitInfo()


//28 אובייקט של כיתה שמספר התלמידים רשום כמערך ומודפס למסך

//  var students={
//     numberOfStudents:5,
//     kitaNumber: 4,
//     studentsNames:["omer","sagi","matan","hila","ohad"]  
//  }
//  document.body.innerHTML+=`
//  <h1>${students.numberOfStudents}</h1>
//  <h2>${students.kitaNumber}</h2>
//  ` 
//  for(i=0; i<students.studentsNames.length; i++){
//     document.body.innerHTML+=`
//    <ul>
//    <li>${students.studentsNames[i]}</li>
//    </ul>`
//  }


//29 אובייקט שמקבל ערך חדש ומדפיס אותו למסך
    // var kinderGarden={
    //     ganenet: "yael",
    //     numberOfChildrens: 10,
    //     childrenNames: ["vfe","cerec","cerfre","ec","werf","wer"],
       
    // }
    //     var newKey = prompt("Add a key:");
    //     var newValue = prompt("Add a value:");
    //     kinderGarden[newKey] = newValue;
    // document.body.innerHTML+=`
    // <h1>${kinderGarden.ganenet}</h1>
    // <h2>${kinderGarden.numberOfChildrens}</h2>
    // <h2>${kinderGarden[newKey]}</h2>
    // `


    // 30 פונקציה שמדפיסה לדיבים נפרדים נתונים מהמשתמש של אובייקט ונותנת תמונה
    // function userProfile(){
    //     var profile={
    //         firstName:prompt("insert a name"),
    //         lastName: prompt("insert a last name"),
    //         picture: prompt("url"),
    //         password: prompt("insert a password"),
    //         email:prompt("insert an email")
    //     }

    //     var inside =document.getElementById("container")
    //     inside.innerHTML+=`
    //     <div>
    //     <input type="text"><p>${profile.firstName}</p>
    //     </div>
    //     <div>
    //     <input type="text"><p>${profile.lastName}</p>
    //     </div>
    //     <div>
    //     <input type="password"><p>${profile.password}</p>
    //     </div>
    //     <div>
    //     <input type="email"><p>${profile.email}</p>
    //     </div>
    //     <div>
    //     <img src="${profile.picture}" alt="Profile Picture">
    //     </div>`
    // }
    // userProfile()





    //----------------------------------------------
//     //31 קוד שלוקח כמה אובייקטים ושם אותם בטבלה
//     var carArray=[]
//     for(i=0; i<2; i++){
//         carArray.push(
//             {
//             color: prompt("insert a color"),
//             year:  prompt("insert a year"),
//             company:  prompt("insert a company"),
//         })
//     }


//     var tableInside= document.getElementById("container")
//     tableInside.innerHTML+=` <table>
//     <thead><th>color</th><th>year</th><th>company</th></thead>
//     </table>
//     <tbody>`
//     for(i=0; i<carArray.length; i++){
//      tableInside.innerHTML+=`
//      <tr>
//      <td>${carArray[i].color}</td>
//      <td>${carArray[i].year}</td>
//      <td>${carArray[i].company}</td>
//      </tr>`
//     }
//     tableInside.innerHTML += `
//         </tbody>
//     </table>
// `;



//32 קוד שמקבל 3 אובייקטים של חתולים כמערך ומדפיס אותם למסך
// var catArray=[]
//     for(i=0; i<3; i++){
//         catArray.push(
//             {
//             color: prompt("insert a color"),
//             age:  prompt("insert an age"),
//             firstName:  prompt("insert a name"),
//         })
//     }
//     var pInside= document.getElementById("container")
//     for(i=0; i<catArray.length; i++){
//         pInside.innerHTML+=`
//         <p>${catArray[i].color}</p>
//         <p>${catArray[i].age}</p>
//         <p>${catArray[i].firstName}</p>`
//     }



//33
// var catArray=[]
// var numberFromUser= +prompt("insert a number")
//     for(i=0; i<numberFromUser; i++){
//         catArray.push(
//             {
//             color: prompt("insert a color"),
//             age:  prompt("insert an age"),
//             firstName:  prompt("insert a name"),
//         })
//     }
//     var pInside= document.getElementById("container")
//     for(i=0; i<catArray.length; i++){
//         pInside.innerHTML+=`
//         <p>${catArray[i].color}</p>
//         <p>${catArray[i].age}</p>
//         <p>${catArray[i].firstName}</p>`
//     }





//35 מדפיס רק חתולים מעל גיל שנתיים (אבל חתולים במקום ילדים)


// var catArray=[]
// var numberFromUser= +prompt("insert a number")
//     for(i=0; i<numberFromUser; i++){
//         catArray.push(
//             {
//             color: prompt("insert a color"),
//             age:  prompt("insert an age"),
//             firstName:  prompt("insert a name"),
//         })
//     }
//     var pInside= document.getElementById("container")
//     for(i=0; i<catArray.length; i++){
//         if(catArray[i].age>2){
//         pInside.innerHTML+=`
//         <h1>${catArray[i].age}</h1>
//         <h1>${catArray[i].color}</h1>
//         <h1>${catArray[i].firstName}</h1>
//         `
//     }
//     }








//37
// function computerObjects (numberOfObjects){
//     arrayObjects=[]
//     for(i=0; i<numberOfObjects; i++){
//         arrayObjects.push(
//             {
//                 company: prompt("insert a company"),
//                 model:prompt("insert a model"),
//                 weight:+prompt("insert a number of kilos"),
//                 areThereAny: prompt("are there any?")
//         }
//         ) 
//     }
// }
// computerObjects(2)

// var computerPrint= document.getElementById("divContainer")
// function printComputerInfo(){
// for(i=0; i<arrayObjects.length; i++){
//     computerPrint.innerHTML+=`
//     <h1>${arrayObjects[i].areThereAny}</h1>`
//     if(arrayObjects[i].weight>2){
//         computerPrint.innerHTML+=`
//         <h1>${arrayObjects[i].weight}</h1>`
//     }
// }
// }
// printComputerInfo()



//38 פונקציות שיוצרות מערך של אובייקטים ומדפיסות את האובייקט תחת תנאים מסויימים

// var teachersArray=[]
// function teachersArrayFunction(arrayNumber){
// for(i=0; i<arrayNumber; i++){
//     teachersArray.push({
//         fullName: prompt("insert a name"),
//         salary: +prompt("insert a salary"),
//         email: prompt("insert an email"),
//         yearOfBirth: +prompt("insert a date of birth")
//     })
// }
// }
// teachersArrayFunction(3)
// var inDiv= document.getElementById("container")
// function teacherCheck(){
//     for(i=0; i<teachersArray.length; i++){
//         if(teachersArray[i].salary>100||teachersArray[i].yearOfBirth>1990){
//             inDiv.innerHTML+=`
//             <span>${teachersArray[i].salary}</span>
//             <span>${teachersArray[i].yearOfBirth}</span>
//             <span>${teachersArray[i].email}</span>
//             <span>${teachersArray[i].fullName}</span>`

//         }
//     }
// }
// teacherCheck()




//39
//----------------------------------
// var storeArray=[]
// var tablesArray=[]
// function tableArrayFunction(arrayNumber){
// for(i=0; i<arrayNumber; i++){
//     for(i=0; i<3; i++){
//         storeArray.push(prompt("insert an store name"))}
//     tablesArray.push({
//         fullName: prompt("insert a name"),
//         price: +prompt("insert a price"),
//         arrayOfStores: storeArray
// })
// }
// }
// tableArrayFunction(2)


// function printTables(){
//     for (i = 0; i < tablesArray.length; i++) {
//     mycontainer.innerHTML+=`
//    <span>${tablesArray[i].fullName}</span> 
//    <span>${tablesArray[i].arrayOfStores}</span>`
// }
// }
// printTables()

























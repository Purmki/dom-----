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









































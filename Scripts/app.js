//FILE NAME:APP.JS-JAVASCRIPT AUTHOR:JASDEEP PARHAR 
//WEBSITE NAME : ASSIGN2JAS
//FILE DESCRIPTION: a JAVASCRIPT FILE IS CREATED TO OUTPUT THE FILED INPUT OF THE USER TO THE CONSOLE USING LISTENER 

(function(){
"use strict";

console.log("app started.");
// VARIABLE DECALRATION FOR PARAGRAPH 
var homeParagraph = document.getElementById("home_para");
var projectParagraph = document.getElementById("project_para");
var projectParagraph1 = document.getElementById("project_para1");
var projectParagraph2 = document.getElementById("project_para2");
var projectParagraph3 = document.getElementById("project_para3");
var aboutParagraph = document.getElementById("about_para");
var aboutParagraph1= document.getElementById("about_para1");
var aboutParagraph2= document.getElementById("about_para2");
var contactParagraph = document.getElementById("contact_para");
var para = [];
var homeParagraph = document.getElementById("home_para");
var projectParagraph = document.getElementById("project_para");
var projectParagraph1 = document.getElementById("project_para1");
var projectParagraph2 = document.getElementById("project_para2");
var projectParagraph3 = document.getElementById("project_para3");
var aboutParagraph = document.getElementById("about_para");
var aboutParagraph1= document.getElementById("about_para1");
var aboutParagraph2= document.getElementById("about_para2");
var contactParagraph = document.getElementById("contact_para");
var para = [];



// create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
     var firstName = document.getElementById("firstName");
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        
 });
 }
    
//DECLARING ARRAYS
    
para[0]="IN SEARCH OF SLEEP, SANITY AND THE SHIRE !";
para[1]="★Here are a few projects that I have created in my previous semester★";
para[2]="Hi I am Jasdeep Parhar studying Software Engineering at Centennial College.";
para[3]="Address:1415-5 Rowntree Rd, Etobicoke M9V5G9 Phone No: (416)-671-7368";
para[4]="You can find me on facebook as well:";
para[5]="Project# 1: JP REAL ESTATE";
para[6]="Project# 2: Energy Conservation";
para[7]="Project# 3: Real Estate";
para[8]="Contact ";
if(homeParagraph){
    
homeParagraph.textContent = para[0]; //INITIALIZING THE VARIABLES TO THE ARRAY 

}
if(projectParagraph){
projectParagraph.textContent = para[1];

	
}
if(projectParagraph1){
projectParagraph1.textContent = para[5];

	
}
if(projectParagraph2){
projectParagraph2.textContent = para[6];

	
}
if(projectParagraph3){
projectParagraph3.textContent = para[7];

	
}
if(aboutParagraph){
aboutParagraph.textContent = para[2];

	
}
if(aboutParagraph1){
aboutParagraph1.textContent = para[3];

	
}
if(aboutParagraph2){
aboutParagraph2.textContent = para[4];

	
}
if(contactParagraph){
contactParagraph.textContent = para[8];

	
}
              
})();

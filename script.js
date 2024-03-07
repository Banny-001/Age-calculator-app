//output elements
const output_year=document.querySelector(".output-year");
const output_month=document.querySelector(".output-month");
const output_day=document.querySelector(".output-day");
const submit_btn=document.querySelector(".submit-btn");

//input elements
let isValid=false;
const input_year=document.querySelector("#year");
const input_month=document.querySelector("#month");
const input_day=document.querySelector("#day");
 
//error elements
const error_year=document.querySelector(".error-year");
const error_month=document.querySelector(".error-month");
const error_day=document.querySelector(".error-day");

//add event listener to submit button
submit_btn.addEventListener("click" , calculateDate);

//input day
input_day.addEventListener("input",(e)=>{
    if(+input_day.value>31){
        error_day.textContent="Must be a valid date";
        isValid=false;
        return;
    }
    else{
        isValid=true;
    }
    if(+input_day.value===0){
        isValid=false;
        error_day.textContent="This field is required ";
        isValid=false;
    }
    else{
        error_day.textContent="";
    }
});
//input month
input_month.addEventListener("input",(e)=>{
    if(+input_month.value>12){
        error_month.textContent="Must be a valid month";
        isValid=false;
        return;
    }
    else{
        isValid=true;
    }
    if(+input_month.value===0){
        isValid=false;
        error_month.textContent="This field is required ";
        isValid=false;
    }
    else{
        error_month.textContent="";
    }
});
//input year
input_year.addEventListener("input",(e)=>{
    if(+input_year.value>2024){
        error_year.textContent="Must be a valid year";
        isValid=false;
        return;
    }
    else{
        isValid=true;
    }
    if(+input_year.value===0){
        isValid=false;
        error_year.textContent="This field is required ";
        isValid=false;
    }
    else{
        error_year.textContent="";
    }
});
//call function calculateDate
function calculateDate(){
    if (isValid){
     let birthday=`${input_month.value}/${input_day.value}/${input_year.value}`;
     console.log(birthday);
     let birthdayObj=new Date(birthday);
     let ageDiffMill=Date.now()- birthdayObj;
     //call new date,new year,new month
     let ageDate=new Date(ageDiffMill);
     let ageYears=ageDate.getFullYear()-1970;
     let ageMonth=ageDate.getFullMonth();
     let ageDay=ageDate.getFullDay()- 1;
     //display everything
     output_day.textContent=ageDay;
     output_month.textContent=ageMonth;
     output_year.textContent=ageYears;

    }else{
       alert ("error");
    }
 }

import React ,{useState}from 'react'
import GeneratePDF from './GeneratePDF';
import style from './style.css'

function InfoForm() {

  const [formItems,SetFormItems]= useState({
  companyName:'',
  date:'',
  contactInfo:'',
  EmployeeFname:'',
  designation:'',
  department:'',
  joiningDate:'',
  salaryAmount:0,
  offerExpiryDate:'',
  senderName:'',
  senderDesignation:'',
isSubmitted:false

   })
  const[FormErrors, SetFormErrors] =useState(false);
  const [isSubmit, setIsSubmit]=useState(false);

const handleInput =(e)=>{
 const name=e.target.name;
 const value=e.target.value;
 SetFormItems({...formItems,[name]:value})

}

const validate =(formItems)=>{
  console.log('Validating...');
  const errors={};
   if(!formItems.companyName)
   {
     errors.companyName="company Name is required!"
   }
   if(!formItems.date)
   {
     errors.date="date is required"
   }
   if(!formItems.contactInfo)
   {
     errors.contactInfo="contact Info is required!"
   }
   if(!formItems.EmployeeFname)
   {
     errors.EmployeeFname="Employee's Fname is required!"
   }
   if(!formItems.joiningDate)
   {
     errors.joiningDate="Joining date is required!"
   }
   if(!formItems.senderName)
   {
     errors.senderName="Sender Name is required!"
     console.log(errors.senderName)
   }
 console.log(errors);
   return errors;
 }
const handleSubmit=(e)=>{
  e.preventDefault();
  SetFormErrors(validate(formItems));
  setIsSubmit(true);
}
if(Object.keys(FormErrors).length===0 && isSubmit)
{
  return<GeneratePDF {...formItems}></GeneratePDF>; 
}
else
{
  return (
    <React.Fragment>
      <div id='container'>
        <h1>offer Letter Generator</h1>
     
      <label forhtml='companyName'>Company Name</label>
      <input type='text' 
       name='companyName'
       value={formItems.companyName}
       onChange={handleInput} required></input>
       <p>{FormErrors.companyName}</p>
      <br></br>

      <label forhtml='date'>Date</label>
      <input type='date' 
       name='date'
       value={formItems.date}
       onChange={handleInput}></input>
       <p>{FormErrors.date}</p>
        <br></br>

    <label forhtml='contactInfo'>Contact Info</label>
      <input type='tel' 
       name='contactInfo'
       value={formItems.contactInfo}
       onChange={handleInput}></input>
       <p>{FormErrors.contactInfo}</p>
        <br></br>

   <label forhtml='EmployeeFname'>Employee's First Name</label>
      <input type='text' 
       name='EmployeeFname'
       value={formItems.EmployeeFname}
       onChange={handleInput}></input>
       <p>{FormErrors.EmployeeFname}</p>
        <br></br>

    <label forhtml="department">Department</label>
         <select name="department" onChange={handleInput}>
        <option value='IT Services'>IT Services</option>
        <option value='Product and Developement'>Product and Development</option>
       </select>
       <br></br>

    <label forhtml="designation">Designation</label>
       <select name="designation" onChange={handleInput}>
        <option value='Director'>Director</option>
        <option value='Manager'>Manager</option>
        <option value='Team Lead'>Team Lead</option>
        <option value='Business Analyst'>Business Analyst</option>
        <option value='Designer'>Designer</option>
        <option value='Senior Developer'>Senior Developer</option>
        <option value='Junior Developer'>Junior Developer</option>
       </select>
      <br></br>
      
      <label forhtml='joiningDate'>Joining Date</label>
      <input type='date' 
       name='joiningDate'
       value={formItems.joiningDate}
       onChange={handleInput}></input>
       <p>{FormErrors.joiningDate}</p>
        <br></br>

        <label forhtml='salaryAmount'>salary Amount</label>
      <input type='text' 
       name='salaryAmount'
       value={formItems.salaryAmount}
       onChange={handleInput}></input>
       <p>{FormErrors.salaryAmount}</p>
      <br></br>

      <label forhtml='offerExpiryDate'>offer-Expiry-date</label>
      <input type='date' 
       name='offerExpiryDate'
       value={formItems.offerExpiryDate}
       onChange={handleInput}></input>
       <p>{FormErrors.offerExpiryDate}</p>
        <br></br>

        <label forhtml='senderName'>Sender Name</label>
      <input type='text' 
       name='senderName'
       value={formItems.senderName}
       onChange={handleInput}></input>
       <p>{FormErrors.senderName}</p>
      <br></br>

      <label forhtml="senderDesignation">Sender Designation</label>
         <select name="senderDesignation" onChange={handleInput}>
         <option value='HR Manager'>HR Manager</option>
        <option value='Staff Co-ordinator'>Staff Co-ordinator</option>
        <option value='HR Recruiter'>HR Recruiter</option>
       </select>
      <br></br>
      <button id='btnGenerate' onClick={handleSubmit} >Generate PDF</button>
      </div>
       </React.Fragment>
  )
 
}
}

export default InfoForm 
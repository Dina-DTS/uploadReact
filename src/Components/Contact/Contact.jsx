import Header from "../Header/Header"

 export default function Contact(){
  
    
    return (
        <>
        <div className="d-flex justify-content-center align-items-center  ">

           <div>

          <Header title="Contact"/>

     <div className="container w-75 mt-5 ">
       <form action="forms/contact.php" method="post" role="form" className="php-email-form">
         <div className="row">
           <div className="col-md-12 mb-5 ">
            <div className="form-group">
             <input type="text" name="name" className="form-control" id="name" placeholder="userName" required />
          </div>
         </div>

         <div className="col-md-12 mb-5">
          <div className="form-group">
             <input type="text" className="form-control" name="age" id="age" placeholder="userAge" required />
          </div>
        </div>

       <div className="col-md-12 mb-5">
         <div className="form-group">
          <input type="email" className="form-control" name="email" id="email" placeholder="userEmail" required />
        </div>
      </div>

      <div className="col-md-12 mb-5">
        <div className="form-group">
          <input type="text" className="form-control" name="password" id="password" placeholder="userPassword" required />
         </div>
     </div>

     <div className="col-md-12 mb-5">
      <button type="submit" className="button  button-big rounded-2 mb-3 ms-auto">  Send Message</button>
    </div>
  </div>

     </form>


     </div>

      </div>

     </div>


        </>
  
    )
}
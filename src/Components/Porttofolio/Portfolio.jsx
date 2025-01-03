import item1 from '../../assets/poert1.png'
import item2 from '../../assets/port2.png'
import item3 from '../../assets/port3.png'
import Header from "../Header/Header"


 export default function Portfolio(){
  
    return (
        <>
        <div className="d-flex justify-content-center align-items-center ">

           <div>

           <Header title="Portfolio"/>

            <div className="container mb-4">
              <div className="row g-4">
                {[item1, item2, item3, item1, item2, item3].map((item, index) => (
                   <div className="col-md-4" key={index}>
                     <div className="item1 rounded-3 overflow-hidden position-relative">
                     <img src={item} alt="portfolio" className="w-100" />
                     <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
                    </div>
                </div>

           </div>

        </div>

        </>
  
    )
}
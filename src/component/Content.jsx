import React, { useState } from 'react'
import { MDBBtn, MDBCol } from 'mdb-react-ui-kit';

function Content() {
    const [qu,setQu]=useState('')
    const [quoteInfo, setQuoteInfo] = useState(null);
    function generate(){
       const number=Math.floor(Math.random()*31)
        const url = `https://dummyjson.com/quotes/${number}`;
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            const quotez = {

                quote:`${data.quote}`,
                author:`${data.author}`,
            };
       
            setQuoteInfo(quotez)
            console.log(data);
            // console.log(number);
      })

      .catch((error) => {
        console.error(error);
      });
    }
  return (
   <>
   <div className="content">
    <div className="box ">
  <center>
  <h1>Random Quote Generator</h1>
  
  <p style={{color:'grey',fontSize:'13px'}}>Click on the Button given below</p>


<br />
<div className="button">
  <MDBBtn  rounded className='mx-2' color='dark' onClick={generate}>
     new quote
   </MDBBtn>
  </div>

   
   {quoteInfo && (
        <div className="bb">
          <br />
          <br />
          <div className="quote-info" style={{width:'450px',height:'100px'}}>
                <br />
           <h6 style={{ textAlign: 'center',color:'black',fontStyle:'bold' }}>" {quoteInfo.quote} "</h6>
                    <p style={{ textAlign: 'right',color:'grey',fontSize:'13px' }}> - {quoteInfo.author}</p>
              </div>
        </div>

            )}

  </center>


    </div>

      </div>
   </>
  )
}

export default Content
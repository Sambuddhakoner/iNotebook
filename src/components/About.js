import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container my-0">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Make your personal note easily! </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    iNotebook is a small and fast notetaking app for making notes or just any plain text content.
                    Be more productive with this beautifully simple note-taking app!
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    <ul>
                    <li>Simple interface that most of the users find easy to use</li>
                    <li>No limits on note's length or number of notes (As it is saving on cloud)</li>
                    <li>Creating and editing text notes</li>
                    <li>Importing notes from txt files, saving notes as txt files</li>
                    <li>You can add a tag to your note</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <strong>About the developer</strong>
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Hii, I am Sambuddha Koner. I am a 3rd year B.Tech student of Techno Main Salt Lake. I developed this web application using HTML, CSS, React.js and Node.js. And for backend I did not use any extarnal API. I have made my own API to create a new user, login,to create-update-delete a note etc. 
                    </div>
                    </div>
                </div>
            </div>
            <img style={{height:"350px",width:"270px",borderRadius:"300px",marginLeft:"500px",marginTop:"20px",}} src="	https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/300611460_786569125979819_9197438176494067330_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=i5rBh51qLPoAX-uyLCx&_nc_ht=scontent.fccu3-1.fna&oh=00_AT8Yk8boSZ3k4X_HXMzervLEQOoFqC0elEjftvTBQXjyPQ&oe=63252714" alt="" />
        </div>
    )
}
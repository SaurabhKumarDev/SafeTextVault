import React from 'react'

function About() {
    return (
        <div className='container my-4'>
            <h1 className='my-3'>About Our Website</h1>

            <p>Welcome to our web application for securely storing text notes! Our website is built using a modern stack of technologies, including React.js, Express.js, MongoDB Atlas, Mongoose, and Bootstrap.</p>
            <p className='my-4'>It's a web application built using React.js, Express.js, MongoDB Atlas, Mongoose, and Bootstrap for styling.</p>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header ">
                        <button className="accordion-button  collapsed bg-dark text-light bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Functionality
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse  collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body ">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light">Our website allows users to create and store text notes securely.</li>
                                <li className="list-group-item bg-dark text-light">Each user has their own set of notes, accessible only to them after logging in.</li>
                                <li className="list-group-item bg-dark text-light">We use hashed passwords to ensure the security of user accounts and notes.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Security Features
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light">User passwords are stored as hashed values, making them unreadable by anyone.</li>
                                <li className="list-group-item bg-dark text-light">Only authenticated users can access their own notes, ensuring privacy.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Technologies Used
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light">React.js for the frontend user interface.</li>
                                <li className="list-group-item bg-dark text-light">Express.js for the backend server and routing.</li>
                                <li className="list-group-item bg-dark text-light">MongoDB Atlas as our cloud-hosted database.</li>
                                <li className="list-group-item bg-dark text-light">Mongoose as the ODM library for MongoDB.</li>
                                <li className="list-group-item bg-dark text-light">Bootstrap for styling and layout.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Project Structure
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light">Our frontend is built with React.js, providing an interactive and responsive user interface.</li>
                                <li className="list-group-item bg-dark text-light">Express.js powers our backend server, handling authentication and note storage.</li>
                                <li className="list-group-item bg-dark text-light">MongoDB Atlas stores our data securely in the cloud, with Mongoose facilitating interactions with the database.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p className='my-4'>
                <span className='text-danger'>Thank you for visiting our website!</span> We invite you to explore the features and functionalities we've built to help you securely store and manage your text notes. If you have any questions or feedback, please don't hesitate to reach out to us.
            </p>
            <p className='text-center fixed-bottom'>Copyright © <a href='https://www.github.com/saurabhkumardev' target='_blank' className='text-success link-underline-opacity-0 link-underline' rel="noopener">Saurabh Kumar</a>. All rights reserved.</p>
        </div>
    )
}

export default About
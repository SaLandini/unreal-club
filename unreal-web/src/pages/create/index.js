import React from 'react';

import './styles.css'

const Create = () => { 
    return(
    <main>
        <header></header>
        <body>  
            <div class="page-main" align="center">
                <div class="form">
                    <p>Upload Section</p>
                    <form method="post" enctype="multipart/form-data">
                        <label for="author">Who is the author?</label>
                        <input type="text" name="author"/>
                        <label for="image">Select a file</label>
                        <input type="file" name="image"/>
                        <br />
                        <button type="submit"></button> 
                    </form>   
                </div>
            </div>
        </body>
    </main>
    )
}

export default Create
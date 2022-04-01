import React from "react";
import ReactDom from "react-dom";
import './main.scss';

function Main(){
    return(
        <>
        
    <div class="container one-row second-section">
        <div class="dropdown-category one-column">
            <span class="select-cat-text">SELECT CATEGORY</span>
           
            <div class="dropdown">
                <select name="cars" id="cars"  >
                    <option value="All">All</option>
                    <option value="saab">Entertaintment</option>
                    <option value="mercedes">Politics</option>
                    <option value="audi">Sports</option>
                </select>

            </div>

           


        </div>
        <div class="center-heading">
            
            <span class="small-title all-news">ALL NEWS</span>


        </div>
        <div class="subscribe-box one-column">
            <span class="small-subscribe subscribe-react" >SUBSCRIBE</span>
            <div class="wrap">
                <div class="search">
                   <input type="text" class="searchTerm" placeholder="Email Address"/>
                   <button type="submit" class="searchButton">
                       <span>Subscribe</span>
                  </button>
                </div>
             </div>

        </div>
        
    </div>
    <div class="container">
        <hr class="width-80"/>
    </div>

    <div class="container blog-list">
      
        <div class="blog-image">
            <img src="https://i.pickadummy.com/150x150?greyscale=yes" alt=""/>


        </div>
        <div class="blog-content">
            <div class="title blog-title"><span>Title One</span></div>
            <div class="blog-describe"><span>posted on : <strong>28.03.2022</strong></span> Category: <b>Category one</b></div>
            <div class="blog-intro">
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero odio neque cumque doloribus nemo veniam, quisquam nesciunt hic non eum, nostrum explicabo optio dolores est rerum maiores accusantium architecto tempore.
                   </p>  </div>
            <div class="button">
                <button class="read-more-button">Continue Reading</button>
            </div>
        </div>
    </div>
  
    <div class="container blog-list">
        
        <div class="blog-image">
            <img src="https://i.pickadummy.com/150x150?greyscale=yes" alt=""/>


        </div>
        <div class="blog-content">
            <div class="title blog-title"><span>Title Two</span></div>
            <div class="blog-describe"><span>posted on : <strong>28.03.2022</strong></span> Category: <b>Category one</b></div>
            <div class="blog-intro">
                <p >
                              Maxime fugit voluptates ipsa ullam quas libero quaerat, iure placeat doloremque nam dolore doloribus quasi fuga quos dolorum in. Aspernatur saepe natus odit consequatur              </p>
            </div>
            <div class="button">
                <button class="read-more-button">Continue Reading</button>
            </div>
        </div>
    </div>
    
    <div class="container blog-list">
      
        <div class="blog-image">
            <img src="https://i.pickadummy.com/150x150?greyscale=yes" alt=""/>


        </div>
        <div class="blog-content">
            <div class="title blog-title" ><span >Title Three</span></div>
            <div class="blog-describe"><span>posted on :28.03.2022</span> Category: Category one</div>
            <div class="blog-intro">
                <p >
                             Maxime fugit voluptates ipsa ullam quas libero quaerat, iure placeat doloremque nam dolore doloribus quasi fuga quos dolorum in. Aspernatur saepe natus odit consequatur              </p>
            </div>
            <div class="button ">
                <button class="read-more-button">Continue Reading</button>
            </div>
        </div>
    </div>
        </>

    )
}

export default Main;
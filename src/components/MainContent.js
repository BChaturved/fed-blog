import React from 'react';

function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>ReactJS Components</h2>
         <p lang='eng'>A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI. 
You can see in the below image we have broken down the UI of GeeksforGeeks's homepage into individual components. 
</p><br />
<div className='rectangle' id="rectangle">
<p>
Functional Components:<br/> Functional components are simply javascript functions. We can create a functional component in React by writing a javascript function. These functions may or may not receive data as parameters, we will discuss this later in the tutorial. Below example shows a valid functional component in React: 

<br/><br/>Example:
<br/></p><p className='example'>const Democomponent=(&nbsp;)=&gt;
&#123;<br/>
    return &lt;h1&gt;Welcome Message!&lt;/h1&gt;;<br/>
&#125;</p><br/><p className='example'>
import React from 'react';<br/>
import ReactDOM from 'react-dom';<br/>

// This is a functional component<br/>
const Welcome=()=&gt;<br/>
&#123;<br/>
		return &lt;h1&gt;Hello World!&lt;/h1&gt;<br/>
&#125;<br/>

ReactDOM.render(<br/>
	&lt;Welcome /&gt;,<br/>
	document.getElementById("root")<br/>
);


</p><div style={{textAlign:"center",paddingTop:"10px"}}>
  
<h1>Output:</h1>
<img src="https://media.geeksforgeeks.org/wp-content/uploads/Screenshot-from-2018-03-09-18-30-53.png" width="480px" height="380px"  />
<br/><br/>
</div>


</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div>Types of Components </div>
             <div className='options'>
             <div><a href='#rectangle'>1.Class Components</a></div>
             <div><a href='#circle'>2.Functional Components</a></div>
            
             </div>
             
            
          </div>
          <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>

    </div>
  )
}

export default MainContent;
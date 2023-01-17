import {createGlobalStyle} from 'styled-components';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  div {
    text-align: center;
    }
  header{
   background-color: #282c34;
   min-height: 10vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
  }
  div a{
  text-decoration: none;
  margin-left: 10px;
  padding: 3rem;
  color: #63b7af;
  }
`
;
const apiUrl= 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [showPosts, setshowPosts] = useState()

  let displayData
  function getPost (){
    fetch(apiUrl)
    .then(response => response.json())
    .then(responseData =>{
      displayData =responseData.map(function(post) {
        return(
          <p key={post.id}>{post.title}</p>
        )
      })
      console.log(responseData)
      setshowPosts(displayData)
    })
    return
  }

  useEffect(()=>{ getPost()});
  
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <h2>Posts</h2>
      </header>
      <div >
        <h3><a href='/'>{showPosts}</a></h3>
        
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import instagram from './img/insta.png';
import blog from './img/blog.jpg';

function App() {
  return (
    <main className='App'>
      <div className="parallax1">
        <div className="heading">
         <h1>Hello Love</h1>
        </div>
      </div>
      <header>
        
        </header>
      <section className="split-paragraph">
        <h1>About Me</h1>
        <div className="two-col">
          <p>
          Integer suscipit leo id mi eleifend imperdiet. 
          Vestibulum rutrum semper ornare. Ut eu massa augue. 
          Vestibulum mauris est, fermentum sit amet molestie eget, 
          elementum ac sem. Etiam lobortis euismod nibh, non egestas 
          mauris feugiat ac. Suspendisse sodales nec erat vel suscipit. 
          Aenean sed felis tortor. Quisque suscipit, purus a semper viverra, elit est placerat orci, 
          non aliquam sem sapien vitae ipsum. Quisque nec enim nisi. Donec in purus lorem. Aenean sed ipsum in nisi ullamcorper
          fermentum at id leo. Suspendisse interdum fringilla justo. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="two-col">
          <p>
          Integer suscipit leo id mi eleifend imperdiet. 
          Vestibulum rutrum semper ornare. Ut eu massa augue. 
          Vestibulum mauris est, fermentum sit amet molestie eget, 
          elementum ac sem. Etiam lobortis euismod nibh, non egestas 
          mauris feugiat ac. Suspendisse sodales nec erat vel suscipit. 
          Aenean sed felis tortor. Quisque suscipit, purus a semper viverra, elit est placerat orci, 
          non aliquam sem sapien vitae ipsum. Quisque nec enim nisi. Donec in purus lorem. Aenean sed ipsum in nisi ullamcorper
          fermentum at id leo. Suspendisse interdum fringilla justo. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </section>

    <div className="parallax2">
      <div className="heading-sm">
      </div>
    </div>

    <section className="work-together-container">
      <h2>What Are You Waiting For?</h2>
      <div className="work-together">
        <div className="work-together-image">
        </div>
        <div className="work-together-button">Let's Work Together</div>
      </div>
      <div className="two-col">
          <p>
          Integer suscipit leo id mi eleifend imperdiet. 
          Vestibulum rutrum semper ornare. Ut eu massa augue. 
          Vestibulum mauris est, fermentum sit amet molestie eget, 
          elementum ac sem. Etiam lobortis euismod nibh, non egestas 
          mauris feugiat ac. Suspendisse sodales nec erat vel suscipit. 
          Aenean sed felis tortor. Quisque suscipit, purus a semper viverra, elit est placerat orci, 
          non aliquam sem sapien vitae ipsum. Quisque nec enim nisi. Donec in purus lorem. Aenean sed ipsum in nisi ullamcorper
          fermentum at id leo. Suspendisse interdum fringilla justo. 
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
      </div>
    </section>

    <div className="parallax3">
    </div>

    <div className="blog">
      <h2>Read the Blog</h2>
      <div className="blog-details">
        <div className="blog-image">
        <img src={blog} className="read-blog"/>
        </div>
          <button>Blog</button>
        </div>
    </div>
    <div className="parallax4">
    </div>
    <footer>
      <div className="footer-links">
        <a href=""><p>Contact</p></a>
        <a href=""><p>Work With Me</p></a>
        <a href=""><p>Blog</p></a>
      </div>
      <div className="instagram">
        <img className="instagram-feed" src={instagram}/>
      </div>
    </footer>
    </main>
  );
}

export default App;
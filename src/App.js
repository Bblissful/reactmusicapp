
import './App.css';

function App() {
        var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }
        var audio = document.getElementById('audio');
        var playPauseBTN = document.getElementById('playPauseBTN');
        var count = 0;

        function playPauseBTN(){
if(count == 0){
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "&#9208;";
}
else{
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "&#9658;";
}
        }





  return (
    <div className='box'>
        <section className='section'>
            <img src='images/Bee (1).png' alt='' className='beelogo'/>
            <p className='navbar'><i className='fa-solid fa-house '></i> Home</p>
            <p className='navbar'>
                    <i className='fa-solid fa-chart-line '></i> Trends
            </p>
            <p className="navbar">
                    <i className="fa-regular fa-compass"></i> Feed
            </p>
            <p style={{fontSize:"1.5vh"}}> Discover</p>
            <p className='navbar'>
                    <i className='fa-solid fa-globe'></i> New and Notable
            </p>
            <p className='navbar'>
                    <i className='fa-regular fa-calendar-days'></i> Release Calender
            </p>
            <p className='navbar'>
                    <i className='fa-solid fa-id-card'></i> Events
            </p>
            <p style={{fontSize: "1.5vh"}}> Your Collection</p>
            <p className='navbar'>
                    <i className='fa-regular fa-heart'></i> Favorite Songs
            </p>
            <p className='navbar'>
                    <i className='fa-solid fa-people-group'></i> Artist
            </p>
            <p className='navbar'>
                    <i className='fa-solid fa-star'></i> Albums
            </p>

            <footer>
                <p className='href round'>
                    <img src='images/images (54).jpeg' alt='icon' style= {{height: "6vh", width: "6vh", borderRadius: "50px"}} className='fterimg'/>
                    <p className='post'>Riles</p>
                </p>
            </footer>
        </section>

        <main className='main'>
        <header style={{paddingTop: "40px", paddingBottom: "10px"}}>
                <i className='fa-solid fa-arrow-left'> &nbsp; &nbsp; &nbsp;</i> <i className='fa-solid fa-arrow-right'
                    style={{paddingRight: "35px"}}></i>
                <form action='https://open.spotify.com/search' method='get' className='search'><button type='submit'><i
                            className='fa-solid fa-search'></i></button> <input type='text' name='search' id="search"
                        placeholder='Search for artist,songs and ...'/> </form>

            </header>
            <p className='what' style={{border: "0px", fontSize: "2vh", color: "gray", border: "0px", paddingTop: "0px", paddingBottom: "0px"}}>what's hot? &#128293</p>
            <section className='trending'><h1 style={{paddingTop: "0px", paddingBottom: "15px", margin: "0"}}>Trending</h1>
            <a href="#" className='more'> more&gt;</a> </section>

            <div class="slideshow-container">

                <div className='mySlides fade'>
                  <img src='images/slide2.png' style={{width:"100%", height:"30vh", className='slides'}}/>
                </div>
                
                <div className='mySlides fade'>
                  <img src='images/slide.png' style={{width:"100%", height:"30vh", className='slides'}}/>
                </div>
                
                <div className='mySlides fade'>
                  <img src='images/slide3.png' style={{width:"100%", height:"30vh", className='slides'}}/>
                </div>
                
                
                <a className='prev' onClick="plusSlides(-1)">&#10094;</a>
                <a className='next' onClick="plusSlides(1)">&#10095;</a>

                <section className='trending'><h1 style={{paddingTop: "15px", paddingBottom: "15px", margin: "0px",}}>My Playlist</h1>
                    <a href='#' className='more' style={{paddingTop: "20px", }}> show all&gt;</a> </section>

                    <table >
                        <tr style={{fontSize: "1.5vh", padding: "20px"}}>
                            <th>#</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Time</th>
                            <th>Album</th>
                        </tr>
                        
                        <tr className='ttable'>
                            <td className='table' style={{fontSize: "1.8vh", padding: "20px 5px"}}> <i class="fa-solid fa-volume-low"></i> </td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> IF YOU NO LOVE</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>CHIKE ft MAYORKUN</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}} >11:29pm</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> OF LAGOS</td>
                        </tr> 
                        <tr className="ttable">
                            <td className='table'  style={{fontSize: "1.8vh", padding: "20px 5px"}}> <i class="fa-solid fa-volume-low"></i> </td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>IF YOU NO LOVE</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}} >CHIKE ft MAYORKUN</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>11:29pm</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> OF LAGOS</td>
                        </tr> 
                        <tr className="ttable">
                            <td className='table'  style={{fontSize: "1.8vh", padding: "20px 5px"}}> <i class="fa-solid fa-volume-low"></i> </td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>IF YOU NO LOVE</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}} >CHIKE ft MAYORKUN</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>11:29pm</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> OF LAGOS</td>
                        </tr> 
                        <tr className="ttable">
                            <td className='table'  style={{fontSize: "1.8vh", padding: "20px 5px"}}> <i class="fa-solid fa-volume-low"></i> </td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>IF YOU NO LOVE</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}} >CHIKE ft MAYORKUN</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>11:29pm</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> OF LAGOS</td>
                        </tr> 
                        <tr className="ttable">
                            <td className='table'  style={{fontSize: "1.8vh", padding: "20px 5px"}}> <i class="fa-solid fa-volume-low"></i> </td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>IF YOU NO LOVE</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}} >CHIKE ft MAYORKUN</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}>11:29pm</td>
                            <td className='table' style={{fontSize: "1.8vh", padding: "0px 5px"}}> OF LAGOS</td>
                        </tr> 
                    </table>
                <div className='audio'>
                    <audio id='audio' src=''>
                        <source src='media/Jessie Murph - Pray (Official).mp3' type='audio/mpeg'/> 
                    </audio>
                    <button id='playPauseBTN' onClick='playPause()'>Play &#9658</button>
                    &nbsp;
                    &nbsp;
                    <button><i class='fa-solid fa-pause'></i></button>
                </div>
                
            </div>
</div>
        </main>
     </div>
  );
};

export default App;

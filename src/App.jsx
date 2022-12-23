import group_pic from '../public/images/group.svg';
const name = "Planet Observers"

var clickedButton = () => alert('Howdy!'); 

function App() {
  return (
    <div className="main page">
      <article>
        <hgroup>
          <img src={group_pic} alt="the bois" />
          <h1>Meet the <b style={{color:"Pink"}}>{name}</b></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={clickedButton}> 
            {name} click here! 
          </button>
        </hgroup>
      </article>
    </div>
  )
}
export default App

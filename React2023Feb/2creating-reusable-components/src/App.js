import './App.css';
import 'bulma/css/bulma.css';
//import ProfileCard from '../src/components/ProfileCard';
import ProfileCardStyled from '../src/components/ProfileCardStyled';
import AlexaImage from '../src/images/alexa.png';
import CortanaImage from '../src/images/cortana.png';
import SiriImage from '../src/images/siri.png';

// function App() {
//   return (
//     <div className="App">
//       <ProfileCard
//         name="Android"
//         imageSource="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
//       />

//       {/*
//       <ProfileCard name="Apple" imageSource="https://cdn.pixabay.com/photo/2017/12/03/20/34/iphone-2995827_960_720.png"/>
//       <ProfileCard name="Blackberry" imageSource="https://cdn.pixabay.com/photo/2013/07/13/01/19/smartphone-155531_960_720.png"/>
//      */}

//       <ProfileCard
//         name="Apple"
//         imageSource={CortanaImage}
//       />
//       <ProfileCard
//         name="Blackberry"
//         imageSource={SiriImage}
//       />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">My Title</p>
          <p className="subtitle">My Subtitle</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCardStyled name="Android" imageSource={AlexaImage} />
            </div>

            <div className="column is-3">
              <ProfileCardStyled name="Apple" imageSource={CortanaImage} />
            </div>

            <div className="column is-3">
              <ProfileCardStyled name="Blackberry" imageSource={SiriImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

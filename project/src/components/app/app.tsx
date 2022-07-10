import MainScreen from '../../pages/main-screen/main-screen';

function App(): JSX.Element {
  return(
    <MainScreen
      filmCardCount='12'
      releaseDate='2014'
      genre='Drama'
      title='The Grand Budapest Hotel poster'
      poster='img/the-grand-budapest-hotel-poster.jpg'
    />);
}

export default App;

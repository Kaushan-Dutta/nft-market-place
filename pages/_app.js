
import '@/styles/globals.css';
//import NavBar from '../components/NavBar/NavBar';
import {NavBar} from '../components/componentIndex';
import {Button,Footer } from '../components/componentIndex';
const App=({ Component, pageProps })=>{

  return <>
      <NavBar/>
      <Footer/>
      <Component {...pageProps} />
  </>

}
export default App;

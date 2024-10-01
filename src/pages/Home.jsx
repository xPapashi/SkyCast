import 'react-toastify/dist/ReactToastify.min.css';

import WeatherContainer from "../components/WeatherContainer";
import { ToastContainer } from 'react-toastify';

export default function Home() {

  return (
    <>
      <WeatherContainer></WeatherContainer>
      <ToastContainer position='bottom-right' className={'custom-toast-container'}/>
    </>
  );
}

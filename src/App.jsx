import HospitalRecords from './HospitalRecords'
import './App.css'
import Stats from './Stats'
import Sidebar from './Sidebar'
import CurrentMedication from './CurrentMedication'
import Pages from './Pages'
import Footer from './Footer'

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gridGap: 20 }}>
      <Sidebar />
      <div>
        <Stats />
        <CurrentMedication />
        <HospitalRecords />
        <Pages />
        <Footer />
        

      </div>
      
    </div>
   
  )
}

export default App

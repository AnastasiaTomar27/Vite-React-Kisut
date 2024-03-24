// Kovakoodattu

// import Kisut from '../components/Kisut'
// import './App.css'
// import Kissa from '../components/Kissa'

// function App() {
//   return (
//     <>
//       <div className='contacts'>
//         <Kissa />
//       </div>
//     </>
//   )
// }

// export default App

import './App.css'
import Kissa from '../components/Kissa'

function App() {
  return (
    <div className='contacts'>
      <Kissa 
        img="../images/felix.png"
        name="Mr. Felix"
        phone="(111) 123-45"
        email="fel@hotmail.com"
      />
      <Kissa 
        img="../images/fluffy.png"
        name="Mr. Fluffy"
        phone="(222) 123-45"
        email="flaf@hotmail.com"
      />
      <Kissa 
        img="../images/pumpkin.png"
        name="Mr. Pumpkin"
        phone="(333) 123-45"
        email="pump@hotmail.com"
      />
      {/* <Kissa 
        img="../images/whiskerson.png"
        name="Mr. Whiskerson"
        phone="(444) 123-45"
        email="whisk@hotmail.com"
      /> */}
      <Kissa 
        img="../images/cat.avif"
        name="Mr.Tortilla"
        phone="(555) 123-45"
        email="tort@hotmail.com"
      />
    </div>
  )
}

export default App

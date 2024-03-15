
import ContactList from './Components/ContactList'
import Header from './Components/Header'

function App() {
  const contactData=[
    {
      id:1,
      name:"sarath",
      email:"sdkv@gmail.com"
    },
    {
      id:2,
      name:"rahul",
      email:"rhvl@gmail.com"
    },
    {
      id:3,
      name:"abhisekh",
      email:"abi@gmail.com"
    },
  ]
  return (
    <>
     <Header/>
     <ContactList contactData={contactData}/>
    </>
  )
}

export default App

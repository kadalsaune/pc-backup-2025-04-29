import matbilde from './assets/DSC00003.jpg'
import Header from './header.jsx'
import Nav from './nav.jsx'

function Index() {
    return (
        <>
            <Header />
            <Nav />
            <img src={matbilde} alt="Matbilde" />
        </>
    )
}

export default Index
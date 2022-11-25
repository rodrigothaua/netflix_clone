import Header from "../../components/Header/Header"
import Body from "../../components/Body"
import Banner from "../../components/Banner"

function Home() {
    return (
        <div className="app">
            <Header />

            <div>
                <Banner />
                <Body />
            </div>
        </div>
    )
}

export default Home
import ContentList from "../ContentList";
import Header from "../Header";
import Footer from "../Footer";
import './index.css'

function LandingPage() {
  return (
    <div className="App">
      <Header/>
      <main>
          <article>
            <ContentList></ContentList>
          </article>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage

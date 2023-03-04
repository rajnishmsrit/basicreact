import TagInput from "../TagInput";
import ContentList from "../ContentList";
import './index.css'

function LandingPage() {
  return (
    <div className="App">
      <header>
        <nav>Navbar Section</nav>
      </header>
      <main>
        <aside>
          Left Aside
        </aside>
        <main>
          <article>
            <ContentList></ContentList>
          </article>
        </main>
        <aside>
          Right Aside
        </aside>
      </main>
      <footer>Footer Section</footer>
      {/* <TagInput tags={['Nodejs', 'MongoDB']}  /> */}
    </div>
  )
}

export default LandingPage

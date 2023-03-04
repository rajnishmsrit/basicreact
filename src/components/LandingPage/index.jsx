import TagInput from "../TagInput";
import ContentList from "../ContentList";
import './index.css'

function LandingPage() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className="navList">
            <li><a href="/">Home</a></li>
            <li><a href="/">Users</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Carts</a></li>
            <li><a href="/">Posts</a></li>
            <li><a href="/">Todo</a></li>
            <li><a href="/">Quotes</a></li>
          </ul>
        </nav>
      </header>
      <main>
          <article>
            <ContentList></ContentList>
          </article>
      </main>
      <footer>Footer Section</footer>
      {/* <TagInput tags={['Nodejs', 'MongoDB']}  /> */}
    </div>
  )
}

export default LandingPage

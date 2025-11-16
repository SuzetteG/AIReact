import { useState } from 'react'
import UserCard from './UserCard'
import ProfileCard from './ProfileCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid px-3 py-4" role="main" aria-label="UserCard Component Demo Application">
      <header>
        <h1 className="text-center mb-4" id="main-heading">UserCard Component Demo</h1>
      </header>
      
      <section className="row mb-4" aria-labelledby="counter-section">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h2 className="card-title h4 mb-3" id="counter-section">Interactive Counter</h2>
              <button 
                className="btn btn-success btn-lg"
                onClick={() => setCount((count) => count + 1)}
                aria-label={`Increment counter. Current count: ${count}`}
                aria-describedby="counter-description"
                type="button"
              >
                Count is {count}
              </button>
              <p className="mt-3 text-muted small" id="counter-description">
                Click the button to test React state management!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-heading">
        <h2 className="text-center mb-4" id="gallery-heading">User Cards Gallery</h2>
        
        <div 
          className="row g-3 justify-content-center" 
          role="region" 
          aria-label="User profile cards"
          aria-describedby="gallery-description"
        >
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <UserCard 
              name="Zara Okafor" 
              email="zara.okafor@email.com"
              avatarUrl="https://picsum.photos/300/300?random=1"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <UserCard 
              name="Kai Nakamura" 
              email="kai.nakamura@email.com"
              avatarUrl="https://picsum.photos/300/300?random=2"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <UserCard 
              name="Aria Petrov" 
              email="aria.petrov@email.com"
              avatarUrl="https://picsum.photos/300/300?random=3"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="profile-heading" className="mt-5">
        <h2 className="text-center mb-4" id="profile-heading">Profile Cards Gallery</h2>
        
        <div 
          className="row g-3 justify-content-center" 
          role="region" 
          aria-label="Professional profile cards"
        >
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <ProfileCard 
              name="Elena Rodriguez" 
              bio="Full-stack developer passionate about creating innovative web solutions and mentoring junior developers."
              avatar="https://picsum.photos/200/200?random=4"
              location="San Francisco, CA"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <ProfileCard 
              name="Marcus Chen" 
              bio="UX Designer with 8+ years experience in creating user-centered digital experiences."
              avatar="https://picsum.photos/200/200?random=5"
              location="Austin, TX"
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex">
            <ProfileCard 
              name="Sophia Kim" 
              bio="Data scientist specializing in machine learning and AI solutions for healthcare applications."
              avatar="https://picsum.photos/200/200?random=6"
              location="Seattle, WA"
            />
          </div>
        </div>
      </section>
      
      <aside className="row mt-5" aria-labelledby="info-heading">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <div className="alert alert-info" role="complementary" aria-labelledby="info-heading">
            <h3 className="alert-heading h5" id="info-heading">About This Demo</h3>
            <p className="mb-3">This page demonstrates both <strong>UserCard</strong> and <strong>ProfileCard</strong> components with:</p>
            <ul role="list" className="mb-3">
              <li><strong>UserCard:</strong> Email-focused design with rectangular images</li>
              <li><strong>ProfileCard:</strong> Bio-focused design with circular avatars</li>
              <li><strong>Bootstrap styling:</strong> Responsive card layouts</li>
              <li><strong>Mobile-first design:</strong> Optimized for all screen sizes</li>
              <li><strong>Dynamic images:</strong> Higher resolution photos from Picsum</li>
              <li><strong>Reusable components:</strong> Same components, different data</li>
              <li><strong>Accessibility features:</strong> ARIA labels and semantic HTML</li>
            </ul>
            <hr />
            <p className="mb-0 small">Edit <code>src/UserCard.jsx</code> to modify the component!</p>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App

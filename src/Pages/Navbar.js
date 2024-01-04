import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">RIOTINTO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/products" class="nav-link">Products</Link>
        </li>
        <li class="nav-item">
          <Link to="/personal" class="nav-link">Personal</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

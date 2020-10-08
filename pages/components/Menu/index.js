import Link from 'next/link'
function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <div>
      <header>
       <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">  
            <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>   
            <div class="uk-navbar-rigth">
            <ul class="uk-navbar-nav">
                <li class="uk-active">
                    <Link href=''>
                        <a>Nosotros</a>
                    </Link>
                </li>
                <li class="uk-active">
                   <a>¿Que hacemos?</a>  
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a>Diseño</a></li>
                            <li><a>Desarrollo</a></li>
                            <li><a>Marketing</a></li>
                        </ul>
                    </div>
                    
                </li>
                <li class="uk-active">
                    <Link href=''>
                        <a>Proyectos</a>
                    </Link>
                </li>
                <li class="uk-active">
                    <Link href='/contact'>
                        <a>Contacto</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        <a><button class="uk-button uk-button-primary uk-button-small">Blog</button></a>
                    </Link>
                </li>
            </ul>
          </div>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default NavLink

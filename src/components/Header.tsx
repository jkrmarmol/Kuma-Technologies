import { useRef } from 'react'
import KTLogo from '../assets/images/kt_logo.svg'
import ArrowIcon from '../assets/images/icons/arrow-sm-right-svgrepo-com.svg'
import CloseMenuIcon from '../assets/images/icons/close-square-svgrepo-com.svg'
import OpenMenuIcon from '../assets/images/icons/menu-dots-square-svgrepo-com.svg'

function Header() {

  const onClickReserve = () => {
    const link = 'https://calendly.com/kumatechnologies/introductory-call';
    window.open(link);
  }

  const navMenuRef = useRef<HTMLDivElement>(null);
  const closeMenuRef = useRef<HTMLImageElement>(null);
  const openMenuRef = useRef<HTMLImageElement>(null);

  const onClickCloseMenuFunc = () => {
    navMenuRef.current && navMenuRef.current.classList.remove('showNav');
    closeMenuRef && closeMenuRef.current?.classList.remove('closeIcon');
    openMenuRef && openMenuRef.current?.classList.remove('openIcon');
  }

  const onClickShowMenuFunc = () => {
    navMenuRef.current && navMenuRef.current.classList.add('showNav');
    closeMenuRef && closeMenuRef.current?.classList.add('closeIcon');
    openMenuRef && openMenuRef.current?.classList.add('openIcon');
  }

  return (
    <div className="headers">
      <header>
        <div className="logo">
          <img src={KTLogo} alt="Kuma Technologies" />
          <p>KumaTech</p>
        </div>
        <div className="navbar" id="navbar" ref={navMenuRef}>
          <nav>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Team</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="reservation">
          <button onClick={onClickReserve}>
            <p>Reserve a discussion</p>
            <img
              src={ArrowIcon}
              alt=""
            />
          </button>
        </div>
        <img
          src={CloseMenuIcon}
          className="menu-bottom-close"
          id="menu-bottom-close"
          onClick={onClickCloseMenuFunc}
          alt=""
          ref={openMenuRef}
        />
        <img
          src={OpenMenuIcon}
          className="menu-bottom-open"
          id="menu-bottom-open"
          onClick={onClickShowMenuFunc}
          alt=""
          ref={closeMenuRef}
        />
      </header>
    </div>
  )
}

export default Header
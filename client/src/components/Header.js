import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (


    <div className="container-fluid ">
      <div className="row">

        {/* Logo */}
        <div className="col-md-4">
          <div className="img-logo mt-1">
            <img src="./images/HODLINFO.8f78fc06.png" className="img-fluid" alt="logo" />

          </div>
        </div>

        {/* Middle */}
        <div className="col-md-4">
          <div className="row">

            <div className="col-md-12 d-flex justify-content-center">
              <div className="dropdown m-1 me-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  IND
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li ><NavLink className="dropdown-item text-dark bg-white" to={'/'}
                  >INR</NavLink>
                  </li>
                </ul>
              </div>

              <div className="dropdown m-1 me-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  BTC
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='bg-white'>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">BTC
                    </NavLink>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">ETH
                    </NavLink>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">USDT
                    </NavLink>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">XRP
                    </NavLink>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">TRX
                    </NavLink>
                    <NavLink className="dropdown-item text-dark bg-white"
                      to="/">DASH
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="dropdown m-1 me-2">
                <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  BUY BTC
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className='bg-white'><NavLink className="dropdown-item "
                    to="https://hodlinfo.com/BTC-INR">BUY BTC</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-content">
              <h2 className='d-block text-white text-center text-muted'> Best Price to trade</h2>
            </div>

          </div>


        </div>

        {/* Telegram button */}

        <div className="col-md-4 d-flex justify-content-center align-items-start">
          <button type="button" className="btn connect fw-bold text-white me-3">Connect to telegram</button>
          <div className="form-check form-switch  ">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
          </div>


        </div>

      </div>

      <div className="row">
        <div className="col-md-2 d-flex justify-content-center">
          <div className="content1 ">
            <h1 className='text-info'>0.34 %</h1>
            <h5 className='text-muted'>5 Mins</h5>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="content2 ">
            <h1 className='text-info'>1.76 %</h1>
            <h5 className='text-muted'>2 Hours</h5>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="content3 ">
            <h1 className='text-white text-center'>₹25,01,705</h1>
            <h5 className='text-muted text-center'>Average BTC/INR net price including commission</h5>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="content4 ">
            <h1 className='text-info'>2.06 %</h1>
            <h5 className='text-muted'>1 Hour</h5>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center">
          <div className="content5 ">
            <h1 className='text-info'>2.53 %</h1>
            <h5 className='text-muted'>1 Day</h5>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Header
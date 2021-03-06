import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DashboardRouter from '../../dashboardRouter'
import '../styles/dashboard.css'
import { getUserLogout } from '../../../store/Actions/ActionCreatorsForUsers'
import { bindActionCreators } from 'redux'

class Dashboard extends Component {
  openNav() {
    document.getElementById('mySidenav').style.width = '100%'
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }
  render() {
    return (
      <div className='body'>
        <div id='mySidenav' className='sidenav'>
          <a href='#' className='closebtn' onClick={() => this.closeNav()}>
            &times;
          </a>
          <Link
            to='/dashboard/allPaitents'
            className='navLinks'
            onClick={() => this.closeNav()}
          >
            {' '}
            <i className='fa fa-users mx-1' /> All patients
          </Link>
          <Link
            to='/dashboard/addPatient'
            className='navLinks'
            onClick={() => this.closeNav()}
          >
            {' '}
            <i className='fa fa-plus mx-1' /> Add patients
          </Link>
          <Link
            to='/dashboard/searchPatient'
            className='navLinks'
            onClick={() => this.closeNav()}
          >
            {' '}
            <i className='fa fa-search mx-1' /> Search patients
          </Link>
          <Link
            to='/dashboard/doctorProfile'
            className='navLinks'
            onClick={() => this.closeNav()}
          >
            {' '}
            <i className='fa fa-user mx-1' /> Profile{' '}
          </Link>

          <button
            className='btn btn-outline-info btn-lg'
            onClick={() => this.props.logotDoctor()}
          >
            {' '}
            <i className='fas fa-sign-out-alt' /> Logout
          </button>
        </div>

        <header className='bg-dark text-white py-3'>
          <div
            style={{ fontSize: 20, paddingLeft: '1em', cursor: 'pointer' }}
            onClick={() => this.openNav()}
          >
            &#9776; Menu
          </div>
        </header>

        <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-md-12 col-lg-12 col-sm-12'>
              <DashboardRouter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToPtops = dispatch =>
  bindActionCreators(
    {
      logotDoctor: () => getUserLogout()
    },
    dispatch
  )

export default connect(
  undefined,
  mapDispatchToPtops
)(Dashboard)

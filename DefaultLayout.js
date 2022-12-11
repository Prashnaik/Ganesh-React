import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      <div className="custom-topHeader-tab">
        <AppHeader />
      </div>
     
        <div className="body d-flex flex-grow-1">
        <AppSidebar />
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>-
    </div>
  )
}

export default DefaultLayout
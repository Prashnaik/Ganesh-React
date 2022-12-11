import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CTabContent,
  CTabPane,
  CNav,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
//import { logo } from 'src/assets/brand/logo'
// import { logo } from 'src/assets/images/mil'
import newScript from 'src/assets/images/avatars/new-script.svg'
import newLiveScript from 'src/assets/images/avatars/new-script.svg'
import addNew from 'src/assets/images/avatars/new.svg'

import run from 'src/assets/images/avatars/run.png'
import stop from 'src/assets/images/avatars/stop.png'
import generate from 'src/assets/images/avatars/generate.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [activeKey, setActiveKey] = useState(1)

  return (
    <>
      <CNav className="custom-headerTab" variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Settings
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            View
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="headerActionTabs"
            href="javascript:void(0);"
            active={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            Tools
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="headerActionTabs"
            href="javascript:void(0);"
            active={activeKey === 5}
            onClick={() => setActiveKey(5)}
          >
            Help
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <div className="d-flex">
            {/* Add Buttons Here Below */}
            <CButton className="custom-inTab-btn d-flex flex-column align-items-center" variant="ghost">
              <img src={newScript} className="mb-1" />
              Load Test Plan
            </CButton>
            {/* Add Buttons Here Above */}
          </div>
        </CTabPane>
        
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
        <div className="d-flex">
            {/* Add Buttons Here Below */}
            <CDropdown>
              <CDropdownToggle className="custom-inTab-btn d-flex flex-column align-items-center" variant="ghost">
              <img src={addNew} className="mb-1" />
              MIL Execution
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another</CDropdownItem>
                <CDropdownItem href="#">Something</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            <CDropdown>
              <CDropdownToggle className="custom-inTab-btn d-flex flex-column align-items-center" variant="ghost">
              <img src={addNew} className="mb-1" />
                HIL Execution
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another</CDropdownItem>
                <CDropdownItem href="#">Something</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            {/* Add Buttons Here Above*/}
          </div>
        </CTabPane>
        
        <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
          <div className="d-flex">
            {/* Add Buttons Here Below */}
              <CButton className="custom-inTab-btn d-flex flex-column align-items-center" variant="ghost">
                <img src={newScript} className="mb-1" />
                View Script
              </CButton>
            {/* Add Buttons Here Above */}
          </div>
        </CTabPane>
      </CTabContent>
    </>
  )
}

export default AppHeader
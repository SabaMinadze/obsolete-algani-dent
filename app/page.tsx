import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Video from './components/Video/Video'
import styles from './page.module.css'
import Burgernav from './components/Burgernav/Burgernav'


function page() {
  return (
    <>
    <div className={styles.box}>
    <Subnav/>
    <Burgernav/>
    <Video/>
    </div>



    </>
  )
}

export default page

import { Close } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    position: fixed;
    background-color: white;
    opacity: 1;
    z-index: 10000;
    overflow: auto;
    transition: all 0.4s ease;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
 
`

const CloseIcon = styled.div`
padding: 1rem 0rem 0rem 13rem;
`

const Items = styled.p`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`
const Hr = styled.hr`
  width: 150px;
    
`

const Sidebar = ({ NavStyle, ChangeNav }) => {

  const [Scroll, setScroll] = useState(false)

  const ChangeTop =() => {
    if (window.scrollY >= 20) {
      setScroll(true) 
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', ChangeTop)

  return (
    <Container style={{width: NavStyle.width, marginLeft: NavStyle.marginleft}} top={Scroll ? '80px' : '100px'} >
        <Wrapper>
         <CloseIcon>
           <Close style={{fontSize: '30px', fontWeight: '300', cursor: 'pointer' }} onClick={ChangeNav} />
         </CloseIcon>
         <Items>Men's</Items>
         <Hr></Hr>
         <Items> Women's</Items>
         <Hr></Hr>
         <Items>T-Shirts</Items>
         <Hr></Hr>
         <Items>About</Items>
         <Hr></Hr>
         <Items>Community</Items>
         <Hr></Hr>
        </Wrapper>
    </Container>
  )
}

export default Sidebar
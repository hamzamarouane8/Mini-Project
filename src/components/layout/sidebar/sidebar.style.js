import styled from "styled-components";

export const WrapperSidebar = styled.div`
position: fixed ;
height:100%;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  background-color: #fff;
  box-shadow: 0 0 72px 0 rgba(0, 0, 0, 0.04);
  
  .navbar-header{
    padding :24px;
  }

  .navigation-main{
    margin-top:20px;
    li > a {
      align-items: center;
    }
    li > a svg {
      margin-right: 6px ;
      path {
        stroke:#625f6e;
        
      }
    }
    li{
      cursor: pointer;
      transition: all 0.3s ease;
      a{
        margin : 0 16px;
        color:#625f6e;
        display:block;
        padding: 10px 15px ;
        transition: all 0.3s linear;
      }
      span {
      }

      &:hover {
        transform: translateX(5px);
        a{
          background-color:#f0efff;
          padding:8px 12px;
          border-radius:8px;
          color:#7266f0;
          svg > path {
            stroke:#7266f0;
          }
        }
      }
    }
  }

  &:not(.expanded){
    .navigation-main > li > a > span {
      display: none; 
    }
    ul li .menu-icon{
      display:none;
    } 
  }

  
  .navbar-header{

    .brand-logo{
    transform: translateY(-10%);
    animation: floater 1.5s infinite;
    transition: ease 0.5s;
    } 
    .brand-logo > h2{
      font-weight: 600 ;
      color:rgb(114,102,240);
    }
    ul{
      display:flex ;
      flex-direction:row ;
      align-items: center ;
      justify-content:space-between  ;
      li > a{
        display:flex ;
        align-items:center ;
        color:rgb(114, 102, 240);
        span{
        }

      }
    }

  }

@keyframes floater {
  0%{transform: translateY(-10%);transition: ease 0.5s;}
  50%{transform: translateY(10%);transition: ease 0.5s;}
}

 
`
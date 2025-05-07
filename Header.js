import React from 'react';
import {Link} from 'react-router-dom';
import KURLY from './images/KURLY.png';
import 'icofont/dist/icofont.css';
function Header(props) {



  return (
    <>
 
     <header>
      <div id="header_box">
        
          <h1><Link to='/main'><img src={KURLY} id="main_logo" alt="메인로고" /></Link></h1>
          <ul id="market_type">
            <li><Link to='/market' title="마켓컬리" class="menu">마켓컬리|</Link></li>
            <li><Link to='/beauty' title="뷰티컬리"  class="menu">뷰티컬리</Link></li>
          </ul>
          <input type="search" id="search"/>
          <nav id="header_user_nav">
            <ul >
              <li><Link to='/main' title="회원가입">회원가입</Link></li>
              <li><Link to='/map' title="로그인">로그인</Link></li>
              <li><Link to='/login' title="고객센터">고객센터</Link>
                <ul class="user-menu-2depth">
                  <li><Link to='/'>공지사항</Link></li>
                  <li><Link to='/'>자주하는 질문</Link></li>
                  <li><Link to='/'>1:1문의</Link></li>
                  <li><Link to='/'>대량주문 문의</Link></li>
                </ul>
              </li>
            </ul>
          </nav>

          <nav id="header_icon_nav">
            <ul>
              <li><Link to='/main' title=""><i class="icofont-location-pin"></i></Link></li>
              <li><Link to='/map' title=""><i class="icofont-heart-alt"></i></Link></li>
              <li><Link to='/login' title=""><i class="icofont-shopping-cart"></i></Link></li>
            </ul>
          </nav>
            <nav id="header_gnb">
              <ul>
              <li><Link to='/login' className='gnb_menu' title="">신상품</Link></li>
              <li><Link to='/login' className='gnb_menu' title="">베스트</Link></li>
              <li><Link to='/login' className='gnb_menu' title="">알뜰쇼핑</Link></li>
              <li><Link to='/login'  className='gnb_menu' title="">특가/혜택</Link></li>
              </ul>
            </nav>
            <span id="toggle">
              <i class="icofont-navigation-menu"></i> 카테고리
            
            <ul id="category">
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-gift"></i>&nbsp;2025감사대전</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-leaf"></i>&nbsp;채소</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-fruits"></i>&nbsp;과일&middot;견과&middot;쌀</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-shrimp-alt"></i>&nbsp;수산&middot;해산&middot;건어물</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-steak"></i>&nbsp;정육&middot;가공육&middot;달걀</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-soup-bowl"></i>&nbsp;국&middot;반찬&middot;메인요리</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-restaurant-menu"></i>&nbsp;간편식&middot;밀키트&middot;샐러드</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-salt-and-pepper"></i>&nbsp;면&middot;양념&middot;오일</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-juice"></i>&nbsp;생수&middot;음료</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-coffee-mug"></i>&nbsp;커피&middot;차</Link></li>
            <li><Link to='/login' className='cate_menu' title=""><i class="icofont-food-cart"></i>&nbsp;간식&middot;과자&middot;떡</Link></li>
            </ul>
            </span>
      </div>
      </header> 
    </>
  );
}

export default Header;
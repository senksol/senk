
import { Col, Container, Row } from 'react-bootstrap'
import CopyToClipboard from './CopyToClipboard'
import herorimg from "../assets/img/heroRimg.png"
export default function Banner() {
  return (
    <section className='banner'>
      <Container>
        <Row className='align-items-center'>
          <Col lg="6" className=''>
            <div className="banner-content text-center text-lg-start">
              <h1 data-aos="fade-up" data-aos-offset="0">$SENK</h1>
              <div className="btns d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
                <a  data-aos="fade-up" data-aos-offset="0" data-aos-delay="100" href="https://jup.ag/swap/SOL-FeBg9Utf5wFa2PsT6KnJ6uitvWtfc87R38wmRnxrNMiW" target='_blank' className='boxed-btn'>Buy $SENK</a>
                <a  data-aos="fade-up" data-aos-offset="0" data-aos-delay="150" href="https://www.dextools.io/app/en/solana/pair-explorer/BsP6rWcTfc6oNXsCBkChNiHgCM8CdExpkJs7wvdxquzp?t=1718027699988" target='_blank' className='boxed-btn blue'> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
                  <g clipPath="url(#clip0_1544_19)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.53 2.78275C11.1498 4.02267 9.2024 5.07188 9.20281 5.11456C9.20387 5.2247 14.9155 8.11727 15.1182 8.11022C15.2104 8.10713 15.8794 7.79919 16.6047 7.426L17.9237 6.74758L19.3642 7.48803L20.8047 8.22861L23.1637 7.16861C26.7182 5.57135 27.0874 5.39632 27.0295 5.33752C26.9527 5.25949 25.6778 4.57458 22.2188 2.75353C20.5471 1.8734 18.9246 1.01046 18.6131 0.835841C18.3017 0.661224 18.0043 0.520757 17.9524 0.523476C17.9004 0.526195 15.9103 1.54288 13.53 2.78275ZM3.09028 8.1888L0.612472 9.46867V15.0858C0.612472 18.1752 0.645008 20.7029 0.684918 20.7029C0.724689 20.7029 1.94378 20.1744 3.39393 19.5285L6.0306 18.3542V12.4334L7.31904 13.1353C8.3119 13.6758 9.30535 14.2151 10.2994 14.7533L11.9913 15.6694L12.7441 15.3289C13.2163 15.1151 13.6875 14.8992 14.1577 14.6812C14.5211 14.5119 15.4131 14.1102 16.1399 13.7882C16.8667 13.466 17.5395 13.1421 17.6349 13.0683C17.7617 12.9702 16.2164 12.1163 11.9192 9.90961C8.68016 8.24627 5.92607 6.89063 5.79906 6.89713C5.67205 6.90362 4.4531 7.4848 3.09028 8.1888ZM27.4761 8.54821C25.7885 9.31005 24.4066 9.96381 24.4051 10.0011C24.4036 10.0383 25.3233 10.5852 26.4491 11.2162C27.5748 11.8473 28.4958 12.3975 28.4958 12.4389C28.4958 12.4802 27.4997 12.9629 26.2824 13.5117C25.0649 14.0603 21.9875 15.45 19.4437 16.6L10.9201 20.4528C8.77597 21.4221 6.8433 22.2957 6.62528 22.3945C2.24582 24.377 1.04208 24.9271 0.87677 25.0215C0.710541 25.1166 0.672889 25.6689 0.643303 28.4411L0.608002 31.7474L2.82377 32.8764L5.03949 34.0053L8.11193 32.6187C9.80182 31.8562 11.1844 31.1923 11.1844 31.1434C11.1844 31.0946 10.8721 30.8911 10.4906 30.691C10.1089 30.4909 9.32106 30.048 8.73961 29.7065C8.1582 29.365 7.57845 29.0516 7.45117 29.0101C7.32393 28.9686 7.22166 28.8961 7.22374 28.8488C7.22586 28.8017 8.57882 28.159 10.2301 27.4206C13.4375 25.9866 15.8921 24.8813 21.1616 22.4983C23.518 21.433 25.8746 20.3682 28.2315 19.3042C30.303 18.3692 32.7114 17.2772 33.5836 16.8776L35.1694 16.151L35.2046 12.807L35.2401 9.46314L32.9927 8.30963C31.7566 7.67527 30.7001 7.15778 30.6447 7.15967C30.5893 7.16142 29.1635 7.7862 27.4761 8.54821ZM34.5673 20.612C34.2361 20.7737 33.582 21.0766 33.1137 21.285C32.6453 21.4933 31.7566 21.8943 31.1388 22.1762L30.0155 22.6885L29.9899 25.6242C29.9758 27.2388 29.9163 28.5527 29.8578 28.5442C29.7248 28.5244 27.6196 27.4447 25.5034 26.3108C23.976 25.4924 23.88 25.4599 23.5211 25.6376C23.3136 25.7405 22.0734 26.2967 20.7652 26.8739C19.4569 27.451 18.3438 27.9609 18.2915 28.0071C18.2393 28.0531 20.8723 29.4803 24.1429 31.1786L30.0892 34.2664L32.6293 32.9524C34.0263 32.2298 35.2142 31.5706 35.2689 31.4877C35.392 31.3013 35.3814 20.2923 35.2582 20.3072C35.2094 20.313 34.8984 20.4502 34.5673 20.612ZM20.5009 33.5338C20.0603 33.7232 19.6198 33.9129 19.1794 34.1029C17.8496 34.6782 18.1102 34.6973 16.5281 33.9097C15.4743 33.3852 15.0201 33.2233 14.823 33.3019C14.6751 33.3608 13.4024 33.9334 11.9945 34.5743C10.5867 35.2152 9.38595 35.7396 9.32623 35.7396C8.73556 35.7396 9.71753 36.3263 13.5068 38.2377L17.9507 40.4791L19.8204 39.5561C20.8488 39.0483 22.923 38.0317 24.4299 37.2968C25.9366 36.5617 27.1509 35.9413 27.1281 35.9179C27.1052 35.8946 25.8427 35.2462 24.3223 34.4772L21.5581 33.079L20.5009 33.5338Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1544_19">
                      <rect width="34.784" height="40" fill="white" transform="translate(0.608002 0.5)"/>
                    </clipPath>
                  </defs>
                </svg> DEX Tools</a>
              </div>
              <div className="token" data-aos="fade-up" data-aos-offset="0">
                <h4>CONTRACT ADDRESS</h4>
                <CopyToClipboard />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <figure className='herorimg' data-aos="fade-left" data-aos-offset="0" >
              <img src={herorimg} alt="" />
            </figure>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

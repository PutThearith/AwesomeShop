
import './App.css';
import data from './data.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import signinScreen from './screen/signinScreen';
import registerScreen from './screen/registerScreen';
import {useSelector} from 'react-redux'


function App() {

    const userSignin = useSelector(state=>state.userSignin)
    const {userInfo} = userSignin;
  return (
  <BrowserRouter>
    <main>
        <section className="navigator">
            <Link to='/' className="title">Awesome<span>Shop</span></Link>
            <div className="nav"><a id="help" href="help.html">Need Help?</a></div>
            <div className="nav">
                {
                    userInfo? <Link to="/profile">{userInfo.username}</Link>:
                    <Link id="log-in" to='/signin'>Log In</Link>
                }
            </div>
        </section>
        <section className="feature">
            <h2>Shop your designer dresses</h2>
            <p>Ready to wear dresses tailored for you from online.<br />Hurry up while stock lasts.</p>
            <div className="searchbox">
                <h3>  Search your products from here</h3>
            </div>
        </section>
        <div className="promotion">
            <div id="coupon">
                <div className="container">
                    <h3>Coupon Savings</h3>
                    <h4>Up to 60% off everyday essentials</h4>
                    <button>Shop Coupons</button>
                </div>
                <img src="/img/icons8-coupon-100.png" alt="" />
            </div>
            <div id="delivery">
                <div className="container">
                    <h3>Free Delivery</h3>
                    <h4>With Selected item</h4>
                    <button>Deliver Now</button>
                </div>
                <img src="/img/checked-truck.png" alt="" />
            </div>
            <div id="voucher">
                <div className="container">
                    <h3>Gift Voucher</h3>
                    <h4>With personal care items</h4>
                    <button>Gift Now</button>
                </div>
                <img src="/img/gift--v1.png" alt="" />
            </div>
        </div>
        <div className="menu">
            <div>
                <img src="/img/icon_clothes.png" alt="" />
                <h4>Clothes</h4>
            </div>
            <div>
                <img src="/img/icon_bag-front-view.png" alt="" />
                <h4>Bags</h4>
            </div>
            <div>
                <img src="/img/icon_wallet.png" alt="" />
                <h4>Wallets</h4>
            </div>
            <div>
                <img src="/img/icon_laptop.png" alt="" />
                <h4>Electronic</h4>
            </div>
        </div>
        <div className="content">
         <Route path="/register" component={registerScreen} />
          <Route path="/signin" component={signinScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
        </div>
    </main>
  </BrowserRouter>
  );
}

export default App;

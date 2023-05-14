// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";
// import firebase_app from "../01_firebase/config_firebase";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { fetch_users, login_user } from "../redux/Authantication/auth.action";

// import logo from "../Images/logo2.png"
// import contact from "../Images/contact-img.svg"

// const auth = getAuth(firebase_app);
// const state = {
//   number: "",
//   otp: "",
//   verify: false,
// };

// export const Login = () => {
//   const [check, setCheck] = useState(state);
//   // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isAuth, activeUser, user } = useSelector((store) => {
//     return {
//       isAuth: store.LoginReducer.isAuth,
//       activeUser: store.LoginReducer.activeUser,
//       user: store.LoginReducer.user,
//     };
//   });

//   const { number, otp, verify } = check;

//   let exist = false;
//   let data = {};

//   for (let i = 0; i <= user.length - 1; i++) {
//     if (user[i].number == number) {
//       exist = true;
//       data = user[i];
//       break;
//     }
//   }
//   // console.log(user)
//   //

//   function onCapture() {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: (response) => {
//           handleVerifyNumber();
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // ...
//         },
//       },
//       auth
//     );
//   }

//   function handleVerifyNumber() {
//     document.querySelector("#nextText").innerText = "Please wait...";
//     onCapture();
//     const phoneNumber = `+91${number}`;
//     const appVerifier = window.recaptchaVerifier;
//     if (number.length === 10) {
//       if (exist) {
//         signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//           .then((confirmationResult) => {
//             // SMS sent. Prompt user to type the code from the message, then sign the
//             // user in with confirmationResult.confirm(code).
//             window.confirmationResult = confirmationResult;
//             setCheck({ ...check, verify: true });
//             document.querySelector(
//               "#loginMesageSuccess"
//             ).innerHTML = `Otp Send To ${number} !`;
//             document.querySelector("#loginMesageError").innerHTML = "";
//             document.querySelector("#nextText").style.display = "none";
//             // ...
//           })
//           .catch((error) => {
//             // Error; SMS not sent
//             // document.querySelector("#nextText").innerText = "Server Error"
//             // ...
//           });
//       } else {
//         document.querySelector("#loginMesageSuccess").innerHTML = ``;
//         document.querySelector("#loginMesageError").innerHTML =
//           "User does not exist Please Create Your Account !";
//           setInterval(() => {
//             window.location="/register"
//           }, 1000);
//       }
//       //
//     } else {
//       document.querySelector("#loginMesageSuccess").innerHTML = ``;
//       document.querySelector("#loginMesageError").innerHTML =
//         "Mobile Number is Invalid !";
//     }
//   }

//   //
//   function verifyCode() {
//     window.confirmationResult
//       .confirm(otp)
//       .then((result) => {
//         // User signed in successfully.
//         const user = result.user;

//         document.querySelector(
//           "#loginMesageSuccess"
//         ).innerHTML = `Verifyed Successful`;
//         document.querySelector("#loginMesageError").innerHTML = "";

//         dispatch(login_user(data));
//         // ...
//       })
//       .catch((error) => {
//         // User couldn't sign in (bad verification code?)
//         document.querySelector("#loginMesageSuccess").innerHTML = ``;
//         document.querySelector("#loginMesageError").innerHTML = "Invalid OTP";
//         // ...
//       });
//   }

//   //
//   const handleChangeMobile = (e) => {
//     let val = e.target.value;
//     setCheck({ ...check, [e.target.name]: val });
//   };
//   // console.log(isAuth)

//   useEffect(() => {
//     dispatch(fetch_users);
//     if (isAuth) {
//       window.location = "/";
//     }
//   }, [isAuth]);

//   return (
//     <>
//       <div className="mainLogin">
//         <img src={contact} alt="" />
//         <div id="recaptcha-container"></div>
//         <div className="loginBx">
//         <div className="logoImgdiv"><img className="imglogo" src={logo} alt="" /></div>
           
//           <div className="loginHead">
//           <hr /><hr /><hr />
//             <h1>SignIn</h1>
//           </div>
//           <div className="loginInputB">
//             <label htmlFor="">Enter Your Number</label>
//             <span>
//               <input
//                 type="number"
//                 readOnly={verify}
//                 name="number"
//                 value={number}
//                 onChange={(e) => handleChangeMobile(e)}
//                 placeholder="Number"
//               />
//               <button
//                 disabled={verify}
//                 color="#FFFF"
//                 onClick={handleVerifyNumber}
//                 id="nextText"
//               >
//                 SignIn
//               </button>
//             </span>
//           </div>
//           {verify ? (
//             <div className="loginInputB">
//               <label htmlFor="">Enter Your OTP</label>
//               <span>
//                 <input
//                   type="number"
//                   name="otp"
//                   value={otp}
//                   onChange={(e) => handleChangeMobile(e)}
//                 />
//                 <button onClick={verifyCode}>Continue</button>
//               </span>
//             </div>
//           ) : (
//             ""
//           )}

//           <div className="loginTerms">
//             {/* <h2>Or USE ARE BUSSINESS ACCOUNT WITH</h2>
//                     <p>By proceeding, you agree to MakeMyTrip'sT&Csand Privacy</p> */}
//             <Link to="/register">Don't have an Account</Link>
//             <Link to="/admin">Admin Login</Link>
//             <div className="inpChecbx"><input className="inp" type="checkbox" /> <h2>Keep me signed in</h2></div>
//             <p>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>
//             <h6>By signing in, I agree to the Expedia <span> Terms and Conditions</span>, <span>Privacy Statement</span> and <span>Travel At Ease Rewards Terms and Conditions</span>.</h6>
//           </div>
//           <h3 id="loginMesageError"></h3>
//           <h3 id="loginMesageSuccess"></h3>
//         </div>
//       </div>
//     </>
//   );
// };
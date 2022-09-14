import {React ,useState } from 'react'
import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [alertId,setAlertId]=useState('');
  const [alertPwd,setAlertPwd]=useState('');

  const userInfo={
    "userID":id,
    "password":password
  }

  const loginAlertFunc=()=>{
    setAlertId('');
    setAlertPwd('');
    
      if (!id) {
        setAlertId("아이디를 입력해 주세요.");
      };
      if (!password) {
        setAlertPwd("비밀번호를 입력해 주세요.");
      };
     
    }

  const loginFunc=(event)=>{
    event.preventDefault();
    loginAlertFunc();
    // loginPost();
   
  }
  return (
    <Container>
        <Form onSubmit={(event)=>loginFunc(event)}>
          <span className='title-style'><Link className='link-style' to='/'>Sswitch</Link></span>
          <input id="id" name="id" type='text' placeholder="아이디" onChange={(e) => setId(e.target.value)}/>
          <AlertMsg>{alertId}</AlertMsg>
          <input id="password" name="password" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
          <AlertMsg>{alertPwd}</AlertMsg>

          <LoginButton type="submit">로그인</LoginButton>
          <div>아직 회원이 아니십니까? <Link to='/signup'>회원가입</Link></div>
          
        </Form>
          <OauthLoginButton>카카오로그인</OauthLoginButton>
          <OauthLoginButton>구글로그인</OauthLoginButton>
    </Container>
  )
}

export default LoginPage


const Container=styled.div`
display: flex;
height: 90vh;
justify-content: center;
align-items: center;
flex-direction: column;
.title-style{
  margin-bottom: 30px;
 
  a{
    text-decoration: none;
    color: black;
    font-size: xx-large;
    font-weight: bold;
  } 
};

input{
  overflow: hidden;
  width: 300px;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
}
`
const Form=styled.form`
 display: flex;
  justify-content: center;
  align-items: center;
 background-color: white;
  flex-direction: column;
  padding: 5px;
  text-align: left; 
  border-radius: 10px;
`
const LoginButton=styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 300px;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: green;
`
const AlertMsg=styled.div`
width: 300px;
text-align: left;
font-size: small;
color: red;
`
const OauthLoginButton =styled(LoginButton)`
background-color: white;
color: black;
box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
`

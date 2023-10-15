import {
  SecondTitle,
  SecondTitleP,
  SignUpButton,
  OrDiv,
  OrSpan,
  Kakao,
  KakaoImg,
  KakaoDiv,
  KakaoP,
  Label,
  InputAndImgDiv,
  ErrorImg,
  Input,
  ErrorMsg,
} from "../styles/SignUpStyle";

import axios from "axios";
import Modal from "../components/Modal";
import {
  Outer,
  TitleDiv,
  EmailDiv,
  EmailP,
  PasswordDiv,
  Line2,
  FindAndSignDiv,
  FindAndSignP,
  FindAndSignP2,
  ModalDiv,
  Input2,
} from "../styles/LoginStyle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [isModal, setIsModal] = useState(false);

  const emailLoginHandler = async () => {
    try {
      // @TODO : dummy 실제 백엔드 서버 주소로 연결하기
      const response = await axios.get("/dummy/dummy.json");
      if (
        email === response.data.email &&
        password === response.data.password
      ) {
        alert("성공");
      } else {
        setIsModal(true);
      }
      setPassword("");
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const emailOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (regex.test(e.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    emailLoginHandler();
  };

  return (
    <Outer>
      <TitleDiv>
        <SecondTitleP>
          <img src="/images/logo.svg" alt="logo" />
          <SecondTitle>SurveyGather</SecondTitle>
        </SecondTitleP>
      </TitleDiv>
      <EmailDiv>
        <Label>이메일</Label>
        <InputAndImgDiv>
          <Input
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            value={email}
            $valid={emailIsValid}
            onChange={emailOnChangeHandler}
            placeholder="ex.gdhoing@gmail.com"
          />
          {emailIsValid ? (
            <></>
          ) : (
            emailFocus && (
              <>
                <ErrorImg src="/images/no.svg" />
                <ErrorMsg>
                  {email.length > 0
                    ? "이메일 주소가 올바른지 확인해주세요."
                    : "이메일을 입력해주세요"}
                </ErrorMsg>
              </>
            )
          )}
        </InputAndImgDiv>
      </EmailDiv>
      <PasswordDiv>
        <EmailP>비밀번호</EmailP>
        <form onSubmit={formHandler}>
          <Input2
            value={password}
            onChange={passwordOnChangeHandler}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해  주세요."
          />
        </form>
      </PasswordDiv>
      <SignUpButton onClick={emailLoginHandler}>이메일 로그인</SignUpButton>
      <OrDiv>
        <Line2 src="./images/line.svg" />
        <OrSpan>또는</OrSpan>
        <Line2 src="./images/line.svg" />
      </OrDiv>
      <KakaoDiv>
        <KakaoImg src="./images/kakao.png" />
        <Kakao>
          <KakaoP>카카오로 시작</KakaoP>
        </Kakao>
      </KakaoDiv>
      <FindAndSignDiv>
        <FindAndSignP onClick={() => navigate("/password")}>
          비밀번호 찾기
        </FindAndSignP>
        <FindAndSignP2>|</FindAndSignP2>
        <FindAndSignP onClick={() => navigate("/signup")}>
          회원가입
        </FindAndSignP>
      </FindAndSignDiv>
      {isModal && (
        <>
          <Modal
            title={"로그인 오류"}
            modal={isModal}
            setModal={setIsModal}
            width={640}
            height={212}
            content={"없는 아이디이거나 비밀번호가 올바르지 않습니다."}
            content2={"다시 시도해주세요."}
          />
          <ModalDiv onClick={() => setIsModal(false)}>확인</ModalDiv>
        </>
      )}
    </Outer>
  );
}

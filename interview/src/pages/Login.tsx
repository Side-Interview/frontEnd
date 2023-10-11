import {
  TitleP,
  SecondTitle,
  SecondTitleP,
  SignUpButton,
  OrDiv,
  OrSpan,
  Kakao,
  KakaoImg,
  KakaoDiv,
  KakaoP,
} from "../styles/SignUpStyle";

import axios from "axios";
import Modal from "../components/Modal";
import {
  Outer,
  TitleDiv,
  EmailDiv,
  EmailP,
  Input,
  PasswordDiv,
  Line2,
  FindAndSignDiv,
  FindAndSignP,
  FindAndSignP2,
  ModalDiv,
} from "../styles/LoginStyle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const emailOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const formHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <Outer>
      <TitleDiv>
        <TitleP>세상의 모든 인터뷰 모집 & 참여는 이 곳에서!</TitleP>
        <SecondTitleP>
          모두의 <SecondTitle>인:</SecondTitle>터뷰
        </SecondTitleP>
      </TitleDiv>
      <EmailDiv>
        <EmailP>이메일</EmailP>
        <Input
          value={email}
          onChange={emailOnChangeHandler}
          placeholder="이메일을 입력해  주세요."
        />
      </EmailDiv>
      <PasswordDiv>
        <EmailP>비밀번호</EmailP>
        <form onSubmit={formHandler}>
          <Input
            value={password}
            onChange={passwordOnChangeHandler}
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해  주세요."
          />
        </form>
      </PasswordDiv>
      <SignUpButton onClick={emailLoginHandler}>이메일로 로그인</SignUpButton>
      <OrDiv>
        <Line2 src="./images/line.svg" />
        <OrSpan>또는</OrSpan>
        <Line2 src="./images/line.svg" />
      </OrDiv>
      <KakaoDiv>
        <KakaoImg src="./images/kakao.png" />
        <Kakao>
          <KakaoP>카카오 계정으로 로그인</KakaoP>
        </Kakao>
      </KakaoDiv>
      <FindAndSignDiv>
        <FindAndSignP>비밀번호 찾기 </FindAndSignP>
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

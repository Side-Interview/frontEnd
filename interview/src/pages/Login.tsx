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
} from "../styles/LoginStyle";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
        <Input placeholder="이메일을 입력해  주세요." />
      </EmailDiv>
      <PasswordDiv>
        <EmailP>비밀번호</EmailP>
        <form>
          <Input
            type="password"
            autoComplete="on"
            placeholder="비밀번호를 입력해  주세요."
          />
        </form>
      </PasswordDiv>
      <SignUpButton>이메일로 로그인</SignUpButton>
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
    </Outer>
  );
}

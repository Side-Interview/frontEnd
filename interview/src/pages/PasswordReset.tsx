import {
  SignUpButton,
  Outer,
  TitleP,
  SecondTitleP,
  SecondTitle,
  Label,
  InputAndImgDiv,
  ErrorImg,
  ErrorMsg,
  Input,
} from "../styles/SignUpStyle";
import { EmailDiv, TitleDiv } from "../styles/LoginStyle";
import { useState } from "react";
import styled from "styled-components";

export const SecondTitleP2 = styled(SecondTitleP)`
  margin-bottom: 80px;
`;

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmIsValid, setPasswordConfirmIsValid] = useState(false);

  const passwordOnChangeHandler = (e: any) => {
    const regex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (regex.test(e.target.value)) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPassword(e.target.value);
  };

  const passwordConfirmOnChangeHandler = (e: any) => {
    if (password === e.target.value) {
      setPasswordConfirmIsValid(true);
    } else {
      setPasswordConfirmIsValid(false);
    }
    setPasswordConfirm(e.target.value);
  };

  return (
    <Outer>
      <TitleDiv>
        <TitleP>세상의 모든 인터뷰 모집 & 참여는 이 곳에서!</TitleP>
        <SecondTitleP2>
          모두의 <SecondTitle>인:</SecondTitle>터뷰
        </SecondTitleP2>
      </TitleDiv>
      <EmailDiv>
        <Label>비밀번호</Label>
        <InputAndImgDiv>
          <Input
            value={password}
            $valid={passwordIsValid}
            onChange={passwordOnChangeHandler}
            placeholder="영문 대소문자+숫자+특수문자 조합 8자리를 입력하세요."
          />
          {passwordIsValid ? (
            <></>
          ) : (
            <>
              <ErrorImg src="/images/no.svg" />
              <ErrorMsg>
                {password.length > 0
                  ? "영문 대소문자+숫자+특수문자 조합 8자리를 입력하세요."
                  : "비밀번호를 입력해주세요"}
              </ErrorMsg>
            </>
          )}
        </InputAndImgDiv>
      </EmailDiv>
      <EmailDiv>
        <Label>비밀번호</Label>
        <InputAndImgDiv>
          <Input
            value={passwordConfirm}
            $valid={passwordConfirmIsValid}
            onChange={passwordConfirmOnChangeHandler}
            placeholder="영문 대소문자+숫자+특수문자 조합 8자리를 입력하세요."
          />
          {passwordConfirmIsValid ? (
            <></>
          ) : (
            <>
              <ErrorImg src="/images/no.svg" />
              <ErrorMsg>
                {passwordConfirm.length > 0
                  ? "영문 대소문자+숫자+특수문자 조합 8자리를 입력하세요."
                  : "비밀번호를 입력해주세요"}
              </ErrorMsg>
            </>
          )}
        </InputAndImgDiv>
      </EmailDiv>
      <SignUpButton>비밀번호 변경하기</SignUpButton>
    </Outer>
  );
}
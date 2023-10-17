import {
  SignUpButton,
  Outer,
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
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmIsValid, setPasswordConfirmIsValid] = useState(false);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);

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
        <SecondTitleP2>
          <img src="/images/logo.svg" alt="logo" />
          <SecondTitle>SurveyGather</SecondTitle>
        </SecondTitleP2>
      </TitleDiv>
      <EmailDiv>
        <Label>비밀번호</Label>
        <InputAndImgDiv>
          <Input
            $focus={passwordFocus}
            onFocus={() => setPasswordFocus(true)}
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
            $focus={passwordConfirmFocus}
            onFocus={() => setPasswordConfirmFocus(true)}
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

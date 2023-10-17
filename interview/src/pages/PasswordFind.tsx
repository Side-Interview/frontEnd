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
import styled from "styled-components";
import { useState } from "react";

export const SecondTitleP2 = styled(SecondTitleP)`
  margin-bottom: 80px;
`;

export default function PasswordFind() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const emailOnChangeHandler = (e: any) => {
    const regex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (regex.test(e.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmail(e.target.value);
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
        <Label>이메일</Label>
        <InputAndImgDiv>
          <Input
            $focus={emailFocus}
            onFocus={() => setEmailFocus(true)}
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
      <SignUpButton>이메일 전송하기</SignUpButton>
    </Outer>
  );
}

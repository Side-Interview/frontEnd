import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Outer,
  TitleP,
  SecondTitleP,
  SecondTitle,
  InputsDiv,
  Label,
  Input,
  LastInput,
  CheckBoxDiv,
  CheckBoxDiv2,
  CheckBoxImg,
  All,
  Paper,
  Look,
  Look2,
  SignUpButton,
  SignIn,
  OrDiv,
  OrSpan,
  Line,
  KakaoDiv,
  Kakao,
  KakaoImg,
  KakaoP,
  LoginSpan,
  InputAndImgDiv,
  ErrorImg,
  ErrorMsg,
} from "../styles/SignUpStyle";

export default function SignUp() {
  const navigate = useNavigate();

  const [nickName, setNickName] = useState("");
  const nickNameRef = useRef<HTMLInputElement>(null);

  const [nickNameIsValid, setNickNameIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmIsValid, setPasswordConfirmIsValid] = useState(false);

  const [allChecked, setAllChecked] = useState(false);
  const allRef = useRef<HTMLImageElement>(null);

  const [useChecked, setUseChecked] = useState(false);
  const useCheckRef = useRef<HTMLImageElement>(null);

  const [personChecked, setPersonChecked] = useState(false);
  const personRef = useRef<HTMLImageElement>(null);

  const [ageChecked, setAgeChecked] = useState(false);
  const ageRef = useRef<HTMLImageElement>(null);

  const nickNameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[^\p{P}\p{S}]{2,8}$/u;
    if (regex.test(e.target.value)) {
      setNickNameIsValid(true);
    } else {
      setNickNameIsValid(false);
    }
    setNickName(e.target.value);
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
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    if (regex.test(e.target.value)) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPassword(e.target.value);
  };

  const passwordConfirmOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (password !== e.target.value) {
      setPasswordConfirmIsValid(false);
    } else {
      setPasswordConfirmIsValid(true);
    }
    setPasswordConfirm(e.target.value);
  };

  const allOnClickHandler = () => {
    if (
      !allRef.current ||
      !useCheckRef.current ||
      !ageRef.current ||
      !personRef.current
    )
      return;
    if (!allChecked) {
      allRef.current.src = "/images/checked.svg";
      useCheckRef.current.src = "/images/checked.svg";
      personRef.current.src = "/images/checked.svg";
      ageRef.current.src = "/images/checked.svg";
    } else {
      allRef.current.src = "images/check.svg";
      useCheckRef.current.src = "images/check.svg";
      personRef.current.src = "images/check.svg";
      ageRef.current.src = "images/check.svg";
    }
    setUseChecked(!useChecked);
    setAgeChecked(!ageChecked);
    setPersonChecked(!personChecked);
    setAllChecked(!allChecked);
  };

  useEffect(() => {
    if (!allRef.current) return;
    if (useChecked && ageChecked && personChecked) {
      allRef.current.src = "images/checked.svg";
      setAllChecked(true);
    } else if (!useChecked || !ageChecked || !personChecked) {
      allRef.current.src = "images/check.svg";
      setAllChecked(false);
    }
  }, [useChecked, ageChecked, personChecked]);

  const useOnClickHandler = () => {
    if (!useCheckRef.current) return;
    if (!useChecked) {
      useCheckRef.current.src = "/images/checked.svg";
    } else {
      useCheckRef.current.src = "images/check.svg";
    }
    setUseChecked(!useChecked);
  };

  const personOnClickHandler = () => {
    if (!personRef.current) return;
    if (!personChecked) {
      personRef.current.src = "/images/checked.svg";
    } else {
      personRef.current.src = "images/check.svg";
    }
    setPersonChecked(!personChecked);
  };

  const ageOnClickHandler = () => {
    if (!ageRef.current) return;
    if (!ageChecked) {
      ageRef.current.src = "/images/checked.svg";
    } else {
      ageRef.current.src = "images/check.svg";
    }
    setAgeChecked(!ageChecked);
  };

  return (
    <Outer>
      <TitleP>세상의 모든 인터뷰 모집 & 참여는 이 곳에서!</TitleP>
      <SecondTitleP>
        모두의 <SecondTitle>인:</SecondTitle>터뷰
      </SecondTitleP>
      <InputsDiv>
        <Label>닉네임</Label>
        <InputAndImgDiv>
          <Input
            ref={nickNameRef}
            $valid={nickNameIsValid}
            value={nickName}
            onChange={nickNameOnChangeHandler}
            placeholder="2-8자 이내, 특수문자 제외 조합"
          />
          {nickNameIsValid ? (
            <></>
          ) : (
            <>
              <ErrorImg src="/images/no.svg" />
              <ErrorMsg>
                {nickName.length > 0
                  ? "2-8자 이내, 특수문자 제외하고 입력해주세요."
                  : "닉네임을 입력해주세요"}
              </ErrorMsg>
            </>
          )}
        </InputAndImgDiv>
        <Label>이메일</Label>
        <InputAndImgDiv>
          <Input
            $valid={emailIsValid}
            onChange={emailOnChangeHandler}
            placeholder="ex.gdhoing@gmail.com"
          />
          {emailIsValid ? (
            <></>
          ) : (
            <>
              <ErrorImg src="/images/no.svg" />
              <ErrorMsg>
                {email.length > 0
                  ? "이메일 주소가 올바른지 확인해주세요."
                  : "이메일을 입력해주세요"}
              </ErrorMsg>
            </>
          )}
        </InputAndImgDiv>
        <Label>비밀번호</Label>
        <InputAndImgDiv>
          <form>
            <Input
              $valid={passwordIsValid}
              onChange={passwordOnChangeHandler}
              type="password"
              autoComplete="on"
              placeholder="영문 대소문자+숫자+특수문자 조합 8자리"
            />
          </form>
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
        <Label>비밀번호 확인</Label>
        <InputAndImgDiv>
          <form>
            <LastInput
              type="password"
              autoComplete="on"
              $valid={passwordConfirmIsValid}
              onChange={passwordConfirmOnChangeHandler}
              placeholder="영문 대소문자+숫자+특수문자 조합 8자리"
            />
          </form>

          {passwordConfirmIsValid ? (
            <></>
          ) : (
            <>
              <ErrorImg src="/images/no.svg" />
              <ErrorMsg>
                {passwordConfirm.length > 0
                  ? "비밀번호가 일치하지 않습니다."
                  : "비밀번호를 입력해주세요"}
              </ErrorMsg>
            </>
          )}
        </InputAndImgDiv>
      </InputsDiv>
      <CheckBoxDiv>
        <CheckBoxImg
          onClick={allOnClickHandler}
          ref={allRef}
          src="./images/check.svg"
        />
        <All onClick={allOnClickHandler}>전체 동의</All>
      </CheckBoxDiv>
      <CheckBoxDiv2>
        <CheckBoxImg
          ref={useCheckRef}
          onClick={useOnClickHandler}
          src="./images/check.svg"
        />
        <Paper onClick={useOnClickHandler}>(필수) 이용약관 동의</Paper>
        <Look>보기</Look>
      </CheckBoxDiv2>
      <CheckBoxDiv2>
        <CheckBoxImg
          ref={personRef}
          src="./images/check.svg"
          onClick={personOnClickHandler}
        />
        <Paper onClick={personOnClickHandler}>
          (필수) 개인정보 수집 및 이용 동의
        </Paper>
        <Look2>보기</Look2>
      </CheckBoxDiv2>
      <CheckBoxDiv2>
        <CheckBoxImg
          ref={ageRef}
          src="./images/check.svg"
          onClick={ageOnClickHandler}
        />
        <Paper onClick={ageOnClickHandler}>(필수) 14세 이상입니다</Paper>
      </CheckBoxDiv2>
      <SignUpButton>
        <p>회원가입</p>
      </SignUpButton>
      <OrDiv>
        <Line src="./images/line.svg" />
        <OrSpan>또는</OrSpan>
        <Line src="./images/line.svg" />
      </OrDiv>
      <KakaoDiv>
        <KakaoImg src="./images/kakao.png" />
        <Kakao>
          <KakaoP>카카오 계정으로 로그인</KakaoP>
        </Kakao>
      </KakaoDiv>
      <div>
        <SignIn>
          이미 회원이신가요?
          <LoginSpan onClick={() => navigate("/login")}> 로그인</LoginSpan>
        </SignIn>
      </div>
    </Outer>
  );
}

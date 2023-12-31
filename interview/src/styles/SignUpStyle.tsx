import styled from "styled-components";
import "../static/fonts/font.css";

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 50px 80px 50px;
`;

export const TitleP = styled.p`
  color: #979797;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SecondTitle = styled.span`
  /** @TODO : pretendard semibold로 들어가야함 */
  color: var(--brand, #0255ff);
  margin-left: 8px;
  font-family: "Pretendard";
  font-size: 45.774px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 64.084px */
  letter-spacing: -0.458px;
`;

export const SecondTitleP = styled.p`
  color: #1e1e1e;
  font-family: "Black Han Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputsDiv = styled.div`
  padding: 0px 36px 41px 36px;
`;

export const Label = styled.p`
  color: #575757;
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.32px;
  margin-bottom: 8px;
`;

export const Input = styled.input<{ $valid: boolean; $focus: boolean }>`
  /* border: ${(props) => (props.$valid ? "none" : "2px solid #f82525")}; */
  border: none;
  background-color: #f7f7f7;
  width: 338px;
  height: 48px;
  padding: 15px;
  margin-bottom: 4px;
  color: #b4b4b4;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    color: #b4b4b4;
    font-family: "IBM Plex Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  border: ${(props) =>
    props.$focus && !props.$valid ? "2px solid #f82525" : "none"};

  border-radius: ${(props) => (props.$focus && !props.$valid ? "12px" : "0px")};

  &:focus {
    outline: none;
    border-radius: 12px;
    border: ${(props) => (props.$valid ? "none" : "2px solid #f82525")};
  }
`;

export const LastInput = styled(Input)``;

export const All = styled.p`
  color: #323232;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-left: 8px;
  cursor: pointer;
`;

export const CheckBoxDiv = styled.div`
  display: flex;
  width: 338px;
  justify-content: start;
  align-items: center;
`;

export const CheckBoxDiv2 = styled(CheckBoxDiv)`
  margin-bottom: 16px;
`;

export const CheckBoxDiv3 = styled(CheckBoxDiv)`
  margin-bottom: 0px;
`;

export const CheckBoxImg = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const Paper = styled.p`
  cursor: pointer;
  margin-left: 8px;
  color: #737373;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
`;

export const Look = styled.p`
  color: #b5b5b5;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  margin-left: 160px;
  cursor: pointer;
`;

export const Look2 = styled(Look)`
  margin-left: 87px;
  cursor: pointer;
`;

export const SignUpButton = styled.div`
  margin-top: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #0255ff;
  width: 338px;
  height: 48px;
  color: #fff;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  cursor: pointer;
`;

export const Kakao = styled.div`
  border-radius: 12px;
  border: 1px solid #ffe632;
  background: #ffe632;
  width: 338px;
  height: 48px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  font-family: "Noto Sans KR";
`;

export const KakaoDiv = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const KakaoImg = styled.img`
  width: 20px;
  height: 20px;
  top: 14px;
  left: 72px;
  position: absolute;
`;

export const KakaoP = styled.p`
  margin-left: 8px;
`;

export const Line = styled.img`
  width: 123.96px;
`;

export const OrDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const OrSpan = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  color: var(--gray3, #b4b4b4);
  text-align: center;
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 200% */
`;

export const SignIn = styled.p`
  color: #b4b4b4;
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-top: 8px;
`;

export const LoginSpan = styled.span`
  text-decoration-line: underline;
  color: var(--gray3, #b4b4b4);
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const ErrorInput = styled(Input)`
  border-radius: 12px;
  border: 2px solid #f82525;
  background: #f7f7f7;
  &:focus {
    outline: none;
    border: 2px solid #f82525;
  }
`;

export const InputAndImgDiv = styled.div`
  position: relative;
`;

export const ErrorImg = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const ErrorMsg = styled.p`
  color: var(--error, #f82525);
  /* Utility styles/label-01 */
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.32px;
  margin-bottom: 24px;
`;

export const LongLine = styled.div`
  background-color: #dcdcdc;
  margin-top: 16px;
  width: 335px;
  margin-bottom: 16px;
  height: 1px;
`;

export const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

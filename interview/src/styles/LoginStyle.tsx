import styled from "styled-components";
import { Line } from "./SignUpStyle";

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
`;

export const TitleDiv = styled.div`
  margin-bottom: 70px;
`;

export const FindAndSignP = styled.p`
  cursor: pointer;
  color: #737373;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  margin-right: 20px;
`;

export const FindAndSignP2 = styled.p`
  color: #737373;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 21px; /* 150% */
  margin-right: 20px;
`;

export const FindAndSignDiv = styled.div`
  margin-top: 18px;
  display: flex;
  width: 342px;
  justify-content: center;
`;

export const EmailP = styled.p`
  color: var(--gray5, #575757);
  font-family: "IBM Plex Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.32px;
  margin-bottom: 16px;
`;

export const EmailDiv = styled.div``;

export const Input2 = styled.input`
  border: none;
  width: 342px;
  height: 48px;
  padding: 15px;
  color: var(--gray3, #b4b4b4);
  /* Body styles/body-compact-01 */
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.16px;
`;

export const PasswordDiv = styled.div`
  margin-bottom: 60px;
`;

export const Line2 = styled(Line)`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const ModalDiv = styled.div`
  color: white;
  background-color: #0f62fe;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  width: 640px;
  height: 64px;
  top: 50%;
  left: 50%;
  z-index: 5;
  transform: translate(-50%, 65%);
`;

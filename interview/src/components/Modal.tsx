import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export const ModalStyle = styled.div<{ $width: number; $height: number }>`
  background-color: white;
  z-index: 5;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #161616;
  font-family: "IBM Plex Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 16px;
`;
export const ContentModal = styled.p`
  color: #161616;
  font-family: "IBM Plex Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.16px;
`;

interface Content {
  content: string;
  content2: string;
  title: string;
  width: number;
  height: number;
  modal: boolean;

  setModal: (value: boolean) => void;
}

export default function Modal({
  content,
  content2,
  width,
  height,
  modal,
  title,
  setModal,
}: Content) {
  const modalClickHandler = (e: any) => {
    if (e.target !== e.currentTarget) return;
    setModal(false);
  };

  return (
    <>
      {modal && (
        <ModalWrapper onClick={modalClickHandler}>
          <ModalStyle $width={width} $height={height}>
            <ModalContent>
              <Title>{title}</Title>
              <ContentModal>{content}</ContentModal>
              <ContentModal>{content2}</ContentModal>
            </ModalContent>
          </ModalStyle>
        </ModalWrapper>
      )}
    </>
  );
}

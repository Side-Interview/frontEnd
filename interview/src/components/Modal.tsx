import styled from "styled-components";

export const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  background-color: #363030;
`;

export const ModalStyle = styled.div<{ $width: number; $height: number }>`
  position: absolute;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Content {
  content: string;
  width: number;
  height: number;
}

export default function Modal({ content, width, height }: Content) {
  return (
    <Outer>
      <ModalWrapper>
        <ModalStyle $width={width} $height={height}>
          <ModalContent>{content}</ModalContent>
        </ModalStyle>
      </ModalWrapper>
    </Outer>
  );
}

import React from "react";
import styled from "styled-components";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdAddPhotoAlternate } from "react-icons/md";

const Comment = ({ onClose }) => {
  return (
    <WriteView>
      <WriteBox>
        <Head>
          <WriteIcon />
          <WriteTitle>방문후기</WriteTitle>
          <CloseBtn onClick={onClose} />
        </Head>
        <CommentBox>
          <InputBox>내용을 입력해주세요</InputBox>
          <PhotoBox>
            사진 추가하기
            <PhotoIcon />
          </PhotoBox>
          <PostBtn onClick={onClose}>후기 등록</PostBtn>
        </CommentBox>
      </WriteBox>
    </WriteView>
  );
};

export default Comment;

const WriteView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const WriteBox = styled.div`
  background-color: white;
  border: 0.2rem solid black;
  width: 20rem;
  height: 30rem;
  padding: 2rem;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
`;

const WriteIcon = styled(FaPenToSquare)`
  color: rgb(0, 70, 42);
  width: 2rem;
  height: 2rem;
  padding-right: 1rem;
`;

const WriteTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(0, 70, 42);
`;

const CloseBtn = styled(IoMdClose)`
  color: rgb(0, 70, 42);
  width: 3rem;
  height: 3rem;
  position: relative;
  top: -0.4rem;
  right: -8.5rem;
  cursor: pointer;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  margin-top: 1rem;
  width: 17rem;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 0.2rem solid rgb(190, 190, 190);
  height: 10rem;
  color: gray;
`;

const PhotoBox = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1.3rem;
  border: 0.2rem solid rgb(190, 190, 190);
  height: 5rem;
  width: 10rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoIcon = styled(MdAddPhotoAlternate)`
  color: rgb(0, 70, 42);
  width: 3rem;
  height: 3rem;
`;

const PostBtn = styled.div`
  color: white;
  background-color: rgb(0, 102, 79);
  border-radius: 0.4rem;
  width: 6.7rem;
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 2rem;
`;

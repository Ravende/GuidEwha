import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EccComment from "../../assets/ecc-comment.png";
import Comment from "./Comment";

const VisitorsBook = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const handleCommentBox = () => {
    setIsCommentOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isCommentOpen) {
      setIsCommentOpen(true);
    }
  }, [isCommentOpen]);

  return (
    <Visitors>
      <VisitTitles>
        <TitleText>이용자 방명록</TitleText>
        <PostBtn onClick={handleCommentBox}>글쓰기</PostBtn>
        {isCommentOpen && <Comment onClose={handleCommentBox} />}
      </VisitTitles>
      <Posts>
        <Comments>
          <EccImg src={EccComment} />
          건물이 너무 예뻐요! 밥 먹을 곳이 많아서 좋았어요 이화기념품샵 들러서
          이화 곰인형도 구매했네요
        </Comments>
        <Comments>
          딸에게 이화여대 견학시켜주러 왔어요~ 건물 안이 멋지네요 푸드코트에서
          식사를 했는데 맛이 괜찮았습니다 추천해요
        </Comments>
      </Posts>
    </Visitors>
  );
};

export default VisitorsBook;

const Visitors = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const VisitTitles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: Pretendard;
  position: relative;
  padding-bottom: 1rem;
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  color: rgb(0, 70, 42);
`;

const PostBtn = styled.div`
  color: white;
  background-color: rgb(0, 102, 79);
  border-radius: 0.6rem;
  width: 5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  top: -0.1rem;
  cursor: pointer;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comments = styled.div`
  border: 1px solid #e0d5d5;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const EccImg = styled.img`
  width: 20rem;
  height: 7rem;
`;

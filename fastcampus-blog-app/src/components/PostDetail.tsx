import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2023.07.08 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque laoreet metus quis ornare aliquet. Suspendisse sed
            libero velit. Cras eu iaculis nibh. Maecenas facilisis dignissim
            facilisis. Cras ultricies odio bibendum justo laoreet, sit amet
            euismod orci porttitor. Pellentesque et nunc quis tortor fringilla
            dignissim. Nullam placerat imperdiet ante in cursus. Nunc malesuada,
            velit eu tempor posuere, lectus enim posuere nulla, scelerisque
            rhoncus tortor nulla sit amet metus. Morbi molestie sagittis ligula
            eu gravida.
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import { FooterBottom, FooterBottomLeft, FooterBottomRight, FooterContainer, FooterTop, FooterTopContent, FooterTopItem, FooterTopLeft, FooterTopList, FooterTopRight, FooterTopH, FooterBottomImg } from './FooterElements'

const FooterSection = () => {
    return (
        <>
            <FooterContainer>
                <FooterTop>
                    <FooterTopLeft>
                        <FooterTopContent className="top__left">
                            <FooterTopH>what happened</FooterTopH>
                            <FooterTopList>
                                <FooterTopItem>[공지] 개인 정보 처리 방침 변경 사전 안내</FooterTopItem>
                                <FooterTopItem>[공지] 29CM 강남 스토어 영업 종료</FooterTopItem>
                                <FooterTopItem>[공지] 개인 정보 처리 방침 변경 사전 안내</FooterTopItem>
                                <FooterTopItem>[공지] iOS 10 이하 버전 지원 중단 안내</FooterTopItem>
                                <FooterTopItem>[공지] 개인 정보 처리 방침 변경 사전 안내</FooterTopItem>
                            </FooterTopList>
                        </FooterTopContent>
                    </FooterTopLeft>
                    <FooterTopRight>
                        <FooterTopContent>
                            <FooterTopH>about us</FooterTopH>
                            <FooterTopList>
                                <FooterTopItem>회사 소개</FooterTopItem>
                                <FooterTopItem>인재 채용</FooterTopItem>
                                <FooterTopItem>상시 할인 혜택</FooterTopItem>
                            </FooterTopList>
                        </FooterTopContent>
                        <FooterTopContent>
                            <FooterTopH>my order</FooterTopH>
                            <FooterTopList>
                                <FooterTopItem>내 주문</FooterTopItem>
                                <FooterTopItem>주문 배송</FooterTopItem>
                                <FooterTopItem>취소 / 교환 / 반품 내역</FooterTopItem>
                                <FooterTopItem>상품 리뷰 내역</FooterTopItem>
                                <FooterTopItem>증빙 서류 발급</FooterTopItem>
                            </FooterTopList>
                        </FooterTopContent>
                        <FooterTopContent>
                            <FooterTopH>my account</FooterTopH>
                            <FooterTopList>
                                <FooterTopItem>회원 정보 수정</FooterTopItem>
                                <FooterTopItem>회원 등급</FooterTopItem>
                                <FooterTopItem>마일리지 현황</FooterTopItem>
                                <FooterTopItem>쿠폰</FooterTopItem>
                            </FooterTopList>
                        </FooterTopContent>
                        <FooterTopContent>
                            <FooterTopH>help</FooterTopH>
                            <FooterTopList>
                                <FooterTopItem>1 : 1 상담 내역</FooterTopItem>
                                <FooterTopItem>상품 Q & A 내역</FooterTopItem>
                                <FooterTopItem>공지 사항</FooterTopItem>
                                <FooterTopItem>자주하는 질문</FooterTopItem>
                                <FooterTopItem>고객의 소리</FooterTopItem>
                            </FooterTopList>
                        </FooterTopContent>
                    </FooterTopRight>
                </FooterTop>
                <FooterBottom>
                    <FooterBottomLeft>
                        © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                        서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                    </FooterBottomLeft>
                    <FooterBottomRight>
                        <FooterBottomImg src={require('../../img/snsicon-01.png').default} />
                        <FooterBottomImg src={require('../../img/snsicon-02.png').default} />
                        <FooterBottomImg src={require('../../img/snsicon-03.png').default} />
                    </FooterBottomRight>
                </FooterBottom>
            </FooterContainer>
        </>
    )
}

export default FooterSection

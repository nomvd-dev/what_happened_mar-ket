import React from 'react';
import { Story, StoryContainer, StoryContent, StoryContentImg, StoryDecor, StoryDecorImg1, StoryDecorImg2, StoryDecorImg3, StoryDecorImg4, StoryDecorImg5, StoryDecorImg6, StoryDecorImg7, StoryDetail, StoryH, StoryP, StoryTitle, BookDecor } from './StoryElements';
import { Button } from '../Button/Button';

const StorySection = () => {
    return (
        <>
            <StoryContainer>
                <StoryH>Brand Story</StoryH>
                <StoryP>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</StoryP>
                <StoryDecor>
                    <StoryDecorImg1 src={require('../../img/object-01.png').default} alt="o1"/>
                    <StoryDecorImg2 src={require('../../img/object-02.png').default} alt="o2"/>
                    <StoryDecorImg3 src={require('../../img/object-03.png').default} alt="o3"/>
                    <StoryDecorImg4 src={require('../../img/object-04.png').default} alt="o4"/>
                    <StoryDecorImg5 src={require('../../img/object-05.png').default} alt="o5"/>
                    <BookDecor>
                        <StoryDecorImg6 src={require('../../img/object-06.png').default} alt="o6"/>
                        <StoryDecorImg7 src={require('../../img/object-07.png').default} alt="o7"/>
                    </BookDecor>
                </StoryDecor>
                <StoryContent>
                    <StoryContentImg src={require('../../img/window.png').default} alt="window"/>
                    <Story>
                        <StoryTitle>What Happened’s Brand story</StoryTitle>
                        <StoryDetail>청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                            봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                            긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                            인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                            아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </StoryDetail>
                        <Button>See More</Button>
                    </Story>
                </StoryContent>
            </StoryContainer>
        </>
    )
}

export default StorySection

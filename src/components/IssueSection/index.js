import React from 'react'
import { Button } from '../Button/Button'
import { IssueContainer, IssueContent, IssueDecor, IssueDecorImg1, IssueDecorImg2, IssueDecorImg3, IssueDecorImg4, IssueDecorImg5, IssueH, IssueP, IssueWhpn, IssueCard, IssueWhpnH, IssueWhpnImg, IssueBrandClass, IssueBrandImg } from './IssueElements'

const IssueSection = () => {
    return (
        <>
            <IssueContainer>
                <IssueH>Happened’s issue</IssueH>
                <IssueP>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</IssueP>
                <Button>See More</Button>
                <IssueDecor>
                    <IssueDecorImg1 src={require('../../img/news-object-01.png').default} />
                    <IssueDecorImg2 src={require('../../img/news-object-02.png').default}/>
                    <IssueDecorImg3 src={require('../../img/news-object-03.png').default}/>
                    <IssueDecorImg4 src={require('../../img/news-object-04.png').default}/>
                    <IssueDecorImg5 src={require('../../img/news-object-05.png').default}/>
                </IssueDecor>
                <IssueContent>
                    <IssueWhpn>
                        <IssueWhpnH>Whpn<br/>Issue</IssueWhpnH>
                        <IssueWhpnImg src={require('../../img/news-img-01.png').default} />
                    </IssueWhpn>
                    <IssueCard>
                        <IssueBrandClass>B brand</IssueBrandClass>
                        <IssueBrandImg src={require('../../img/i1.png').default} />
                    </IssueCard>
                    <IssueCard>
                        <IssueBrandClass>C brand</IssueBrandClass>
                        <IssueBrandImg src={require('../../img/i2.png').default} />
                    </IssueCard>
                    <IssueCard style={{background: "#ff5500"}}>
                        <IssueBrandClass>D brand</IssueBrandClass>
                        <IssueBrandImg src={require('../../img/i3.png').default} />
                    </IssueCard>
                    <IssueCard>
                        <IssueBrandClass>E brand</IssueBrandClass>
                        <IssueBrandImg src={require('../../img/i4.png').default} />
                    </IssueCard>
                </IssueContent>
            </IssueContainer>
        </>
    )
}

export default IssueSection

import React from 'react'
import {
    VideoContainer, VideoDecor, VideoContent, VideoH, VideoP,
    VideoDecorImg1,
    VideoDecorImg2,
    VideoDecorImg3,
    VideoDecorImg4,
    VideoDecorImg5,
    VideoDecorImg6,
    VideoDecorImg7,
    VideoDecorImg8,
    VideoDecorImg9,
    VideoContentImg
} from './VideoElements';

import { Button } from '../Button/Button';

const VideoSection = () => {
    return (
        <>
            <VideoContainer>
                <VideoContent>
                    <VideoH>what happened</VideoH>
                    <VideoP>How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first </VideoP>
                    <Button>See more</Button>
                    <VideoContentImg src={require('../../img/video.png').default} />
                </VideoContent>
                <VideoDecor>
                    <VideoDecorImg1 src={require('../../img/video-object-01.png').default} />
                    <VideoDecorImg2 src={require('../../img/video-object-02.png').default} />
                    <VideoDecorImg3 src={require('../../img/video-object-03.png').default} />
                    <VideoDecorImg4 src={require('../../img/video-object-04.png').default} />
                    <VideoDecorImg5 src={require('../../img/video-object-05.png').default} />
                    <VideoDecorImg6 src={require('../../img/video-object-06.png').default} />
                    <VideoDecorImg7 src={require('../../img/video-object-07.png').default} />
                    <VideoDecorImg8 src={require('../../img/video-object-08.png').default} />
                    <VideoDecorImg9 src={require('../../img/video-object-09.png').default} />
                </VideoDecor>
            </VideoContainer>
        </>
    )
}

export default VideoSection

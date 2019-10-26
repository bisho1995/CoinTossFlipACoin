import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  View,
  Body,
  Text,
  Row,
} from 'native-base';
import styled from 'styled-components';
import LionImageSrc from '../assets/images/lion.jpg';
import PeacockImageSrc from '../assets/images/peacock.jpg';

const StyledImage = styled.Image`
  flex: 1;
  width: 100%;
`;

const ImageWrapper = styled.View`
  width: 300;
  height: 300;
  position: absolute;
  border-radius: 150;
  top: 0;
`;

const Home = () => (
  <Container>
    <Content>
      <Card>
        <CardItem>
          <Body>
            <Row
              style={{
                justifyContent: 'center',
                width: '100%',
                height: 300,
              }}>
              <TouchableOpacity
                style={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                onPress={() => console.log('pressed')}>
                <ImageWrapper>
                  <StyledImage source={LionImageSrc} />
                </ImageWrapper>
                <ImageWrapper>
                  <StyledImage source={PeacockImageSrc} />
                </ImageWrapper>
              </TouchableOpacity>
            </Row>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>
);
export default Home;

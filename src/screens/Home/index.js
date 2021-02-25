import React from 'react'
import { View } from 'react-native'

// Components
import { Container, Content, Title, Course } from '../../components'

// Styles
import * as S from './styles'

// Images
import logo from '../../assets/images/logo.png'
import react from '../../assets/images/react.png'

const Home = () => {
  return (
    <Container>
      <S.Logo source={logo} resizeMode="contain" />
      <View>
        <Content>
          <Title size={18} weight="bold" color="gray2">Desenvolvimento</Title>
        </Content>
        <S.Swipper>
          <Course image={react} title="React" time={12} nivel="Iniciante" />
        </S.Swipper>
      </View>
      <View>
        <Content>
          <Title size={18} weight="bold" color="gray2">UI/UX</Title>
        </Content>
        <S.Swipper>
          <Course image={react} title="React" time={12} nivel="Iniciante" />
        </S.Swipper>
      </View>
    </Container>
  )
}

export default Home 
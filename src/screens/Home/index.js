import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import courses from './courses.json'

// Context 
import { useCourses } from '../../context/courses/index.context'

// Components
import { Container, Content, Title, Course } from '../../components'

// Styles
import * as S from './styles'

// Images
import logo from '../../assets/images/logo.png'

const Home = () => {
  const { courseList, setCourseList } = useCourses()

  useEffect(() => {
    setTimeout(() => {
      setCourseList(courses.categories)
    }, 1000);
  }, [])

  console.log("COURSES: ", courseList)

  return (
    <Container>
      <S.Logo source={logo} resizeMode="contain" />
      {courseList.map((item, index) => (
        <View key={index}>
          <Content>
            <Title size={18} weight="bold" color="gray2">{item.category}</Title>
          </Content>
          <S.Swipper>
            {item.courses.map((course) => (
              <Course
                key={course.id}
                image={course.logo}
                title={course.name}
                time={course.duration}
                nivel={course.level}
              />
            ))}
          </S.Swipper>
        </View>
      ))}
    </Container>
  )
}

export default Home 
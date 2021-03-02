import React, { useContext, useState, createContext } from 'react'

const CoursesContext = createContext({
  courseList: [],
  setCourseList: () => {}
})

const CoursesProvider = ({ children }) => {
  const [courseList, setCourseList] = useState([])

  const value = {
    courseList,
    setCourseList
  }

  return <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
}

const useCourses = () => {
  return useContext(CoursesContext)
}

export { CoursesProvider, useCourses }
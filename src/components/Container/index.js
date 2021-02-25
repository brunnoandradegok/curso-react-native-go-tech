import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(),
    paddingBottom: getBottomSpace() + 10
  }
})`
  flex: 1;
`

export default Container
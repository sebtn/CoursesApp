import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import ManageCourse from '../../components/ManageCourse'

describe('ManageCourse Testing ' + '\n', ()=> {

  it('T1: Manage course should exist' + '\n', () => {
    expect(ManageCourse).toExist()
  })

})

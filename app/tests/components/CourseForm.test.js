import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import CourseForm from '../../components/CourseForm'

/*----------------------------------------------------------*/
let setup = (saving) => {
  let props = {
    course: {},
    saving: saving,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  }

  let renderer = TestUtils.createRenderer()
  renderer.render(<CourseForm {...props} />)
  let output = renderer.getRenderOutput()
  return {
    props,
    output,
    renderer
  }
}

/* CourseForm */
/*----------------------------------------------------------*/
describe('Course Form Testing' + '\n', () => {

  it('T1: CourseFrom should exist ' + '\n', () => {
    expect(CourseForm).toExist()
  })  

  it('T2: Should render form ' + '\n', () => {
    const {output} = setup()
    let div = output.props.children 
    expect(div.type).toBe('form')
    expect(div.props.children[0].type).toBe('h1')
  })   

  it('T3: Button should display save when not saving ' + '\n', () => {
    const {output} = setup(false)
    let div = output.props.children
    expect(div.props.children[5].props.value).toBe('Save')
  })   

  it('T4: Button should display "Saving..." when saving ' + '\n', () => {
    const {output} = setup(true)
    let div = output.props.children
    expect(div.props.children[5].props.value).toBe('Saving...')
  }) 

})
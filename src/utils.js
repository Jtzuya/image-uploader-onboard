import forEach from 'lodash/forEach'
import toLower from 'lodash/toLower';

/**
 * Display INNERHTML inside a div with class that contains 'second-element'. 
 * 1. Must start with document.getElementsByClassName("element") to get all elements
 * @returns 
 */
 export const rowOneText = () => {
  // must use code logic, no hard code
  const elementDivs = document.getElementsByClassName('element')

  // console.log('first row collection', elementDivs)

  let selectRow = null

  forEach(elementDivs, element => {
    if(element.className.includes('second')){
      selectRow = element
    }
    // console.log(element.className)
  })

  const answer1 = document.getElementsByClassName('row-1-answer');
  // // console.log('a',answer)
  let answerDiv = answer1[0]
  // // console.log('a-div', answerDiv)
  answerDiv.innerHTML = selectRow.innerHTML

  // console.log('row',selectRow)

  return ""
}


/**
 * Display value of the input element. 
 * 1. Must use document.getElementsByClassName("ele-field") to get all elements, 
 * 2. filter through tagName of each element AND filter through className to make sure it has dog in it 
 * @returns 
 */

 export const rowTwoText = () => {
  // must use code logic, no hard coding
  const inputElements = document.getElementsByClassName('ele-field')
  // console.log('HTML COLLECTION FOR INSIDE THIS ELEMENT', inputElements)

  let selectInput = null

  forEach(inputElements, input => {
    if(input.className.includes('dog')){
      selectInput = input
    }
    // console.log('input', input.className)
  })

  const answer2 = document.getElementsByClassName('row-2-answer')
  // console.log('the class of row 2 answer', answer2)
  let answer2Div = answer2[0]
  // console.log('a 2 div',answer2Div)

  // console.log('select input log',selectInput)

  answer2Div.innerHTML = selectInput.value
  return ""
}

/**
 * Display tag classNames in an array divs with class = 'element'. 
 * 1. Must use document.getElementsByClassName("element") to get all elements
 * @returns 
 */
export const displayTagNames = () => {
  // must use code logic, no hard coding
  const tagDivs = document.getElementsByClassName('element')
  // console.log('html collection of tagDivs', tagDivs)

  let selectTags = []

  forEach(tagDivs, tag => {
    // let previousSibling = tag.previousElementSibling
    // console.log("this!!!!",previousSibling)
    
    if(tag.className.includes('element')){
      selectTags.push(tag.className)
    }
    // console.log("taggerrrrr", tag)
  })

  let innerHTMLString = ""
  forEach(selectTags, i => {
    const answer3 = document.getElementsByClassName('row-3-answer')[0]
    // console.log(answer3)

    let list = document.createElement('div')
    answer3.appendChild(list)
    list.innerHTML = i

    // console.log("all classes", i)
  })

  // console.log('select tag !!!!!', selectTags)

  return ""
}

/**
 * 1. Get all elements with className ele-field in it... 
 * 2. loop through to and if previousSibling contains 'field' regardless of capital letters, add the 'ele-field' element to the array (array.push()) 
 * 3. console.log it
 * 
 */
export const displayConsolelog = () => {
  const elementDivs = document.getElementsByClassName('ele-field')
  // console.log('HTML Collection', elementDivs)
  let matchedPreviousSiblings = []
  
  forEach(elementDivs, element => {
    if(element.className.includes('ele')){
      matchedPreviousSiblings.push(element.className)
    }
    // console.log('class names', element.className)
  })

  // console.log(matchedPreviousSiblings)
  forEach(matchedPreviousSiblings, matched => {
    const answer4 = document.getElementsByClassName('row-4-answer')[0]
    // console.log(answer4)
    let newDiv = document.createElement('div')
    answer4.appendChild(newDiv)
    newDiv.textContent = matched
    // console.log(newDiv)
  })
  
  // console.log(matchedPreviousSiblings.length)
  // you can use matchedPreviousSiblings.push() -> google array.push
  // console.log("matched previous siblings with 'field' regardless of capital letters or not")
}

/**
 * 1. add a change listener to the select dropdown
 * 2. when select dropdown is selected, find elements with that className Value
 *        - example: selected: row-1
 *            -> find elements that has 'row-1' className, and set style.backgroundColor to lightgray
 *            -> google HTML dom style if you need to
 */
export const makeRowsLightGray = () => {
  let parentEl = document.getElementById('rows')
  // console.log(parentEl)


  let list1 = document.getElementsByClassName('row-1')[0]
  // list1.style.backgroundColor = 'lightgray'
  // console.log('test', list1)
  let list2 = document.getElementsByClassName('row-2')[0]
  // console.log(list2)
  let list3 = document.getElementsByClassName('row-3')[0]
  let list4 = document.getElementsByClassName('row-4')[0]
  let list5 = document.getElementsByClassName('row-5')[0]

  // let answerDiv = []
  // const allDivs = document.getElementsByTagName('div')
  // console.log(allDivs)

  // forEach(allDivs, div => {
  //   // if(div.className.includes('row') && ){
  //   //   answerDiv = div
  //   // }
  //   console.log('attributes', div.attributes )
  //   // console.log(toLower(div.className).includes('row'))
  // })
  // console.log('yeey', answerDiv)

  
  parentEl.addEventListener('change', e => {
    let selected = e.target.value
    if(selected === 'row-1') {
      list1.style.backgroundColor = 'lightgray'
    } else if (selected !== 'row-1') {
      list1.style.backgroundColor = null
    } // here
    console.log(selected)
  })
  
  parentEl.addEventListener('change', e => {
    let selected = e.target.value
    if(selected === 'row-2') {
      list2.style.backgroundColor = 'lightgray'
    } else if (selected !== 'row-2') {
      list2.style.backgroundColor = null
    } // here
    console.log(selected)
  })

  parentEl.addEventListener('change', e => {
    let selected = e.target.value
    if(selected === 'row-3') {
      list3.style.backgroundColor = 'lightgray'
    } else if (selected !== 'row-3') {
      list3.style.backgroundColor = null
    } // here
    console.log(selected)
  })

  parentEl.addEventListener('change', e => {
    let selected = e.target.value
    if(selected === 'row-4') {
      list4.style.backgroundColor = 'lightgray'
    } else if (selected !== 'row-4') {
      list4.style.backgroundColor = null
    } // here
    console.log(selected)
  })

  parentEl.addEventListener('change', e => {
    let selected = e.target.value
    if(selected === 'row-5') {
      list5.style.backgroundColor = 'lightgray'
    } else if (selected !== 'row-5') {
      list5.style.backgroundColor = null
    } // here
    console.log(selected)
  })

  
}

// else if (selected === 'row-2'){
//   list2.style.backgroundColor = 'lightgray'
// } else if (selected === 'row-3'){
//   list3.style.backgroundColor = 'lightgray'
// } else if (selected === 'row-4'){
//   list4.style.backgroundColor = 'lightgray'
// } else if (selected === 'row-5'){
//   list5.style.backgroundColor = 'lightgray'
// }
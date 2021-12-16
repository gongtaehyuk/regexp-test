let str = `
010-123-4567
gongjob@hanmail.net
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
I want to get a job.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const h = `  the hello  world   !

`
// 생성자 함수 방식
const regexp = new RegExp('job', 'gi')

// 리터널 함수 방식
const regexp = /job/gi
console.log(str.match(regexp))

// 메소드

const regexp = /job/gi
console.log(regexp.test(str)) // test
str = str.replace(regexp, 'ABC')  //replace
console.log(str)

// 플래그

console.log(str.match(/\.$/gim))
// \ Escape Character \(백슬래시) 기호를 통해 원래 기능에서 벗어나 상태가 바뀌는 문자 
// $ 앞에 있는 하나의 단어로 해당되는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻



// 패턴
console.log(
  str.match(/d$/gm) //ab$
  str.match(/^0/gm) //^ab
  str.match(/h..p/g)  // .
  str.match(/job|get/g)  // |
  str.match(/https?/g)  // ?
  str.match(/d{2}/g)  // {*}
  str.match(/d{2,}/g)  // {*,}
  str.match(/\b\w{2,3}\b/g)  // {*,*} \b 경계
  str.match(/[job]/g) // [abc]
  str.match(/[0-9]{1,}/g) // [0-9] {*,}
  str.match(/[가-힣]{1,}/g) // [가-힣] {*,}
  str.match(/\w/g) // \w
  str.match(/\b/g) // \b
  str.match(/\bf\w{1,}\b/g) // \b
  str.match(/\d{1,}/g) // \d
  h.replace(/\s/g, '') // \s
  str.match(/.{1,}(?=@)/g)  //(?=)
  str.match(/(?<=@).{1,}/g)  //(?<=)
)


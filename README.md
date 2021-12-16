# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성


```js

// 생성자 방식
new RegExp('표현(패턴)', '(패턴에)옵션')
new RegExp('[a-z]', 'gi')


// 리터널 방식
/표현/옵션
/[a-z]/gi

```

## 예제 문자

```js
const str = `
010-123-4567
gongjob@hanmail.net
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
I want to get a job.
abbcccdddd
hxyp
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

```js
const regexp = /job/gi
console.log(regexp.test(str)) // test
str = str.replace(regexp, 'ABC')  //replace
console.log(str)
```

## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line) (하나의 문제데이터는 시작과 끝이 하나만 존재함)

```js
console.log(str.match(/\.$/gim))
// // \ Escape Character \(백슬래시) 기호를 통해 원래 기능에서 벗어나 상태가 바뀌는 문자 
// // $ 앞에 있는 하나의 단어로 해당되는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 뜻
```

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{5} | 5개 연속 일치
{5,} | 5개 이상 연속 일치
{5,9} | 5개 이상 9개 이하(5~9개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소문자52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계 (Boundary)
\d | 숫자 (Digit)에 일치
\s | 공백 (Space, Tab 등)에 일치
(?=) | 앞쪽 일치 (Lookahead)
(?<=) | 뒤쪽 일치 (Lookbehind)

```js
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

```
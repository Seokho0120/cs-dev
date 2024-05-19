# JSON
JSON(javascript Object Notation)은 **Javascript 객체 문법**으로 구조화된 **데이터 교환형식**이며, python, js, java 등 **여러 언어에서 데이터 교환형식**으로 사용되며, 객체문법 말고도 **단순배열, 문자열도 표현 가능**합니다.

![JSON](/images/JSON.png)

JSON이라는 파일을 기반으로 JS에서 어떤 로직을 구축한다고 했을때, json 파일 자체를 사용하는것이 아닌, `JSON.parse()` 함수를 사용해 `JS Object`로 변환해서 사용해야합니다. 만약 Python에서 JSON을 사용하려면, `JSON.loads()`라는 함수를 사용해 `dict` 타입으로 변환해야합니다. 이와같이 언어마다 JSON을 사용하는 방법은 상이합니다.

## Javascript 객체문법
key, value 형태로 구성됩니다. ex) {key: value}
이미 존재하는 키를 중복선언하면, **나중에 선언한 해당 키에 대응한 값이 덮어씌우게** 됩니다.

```json
// test.json
[
  {
  "name": "River",
  "age": 30
  },
  {
    "name": "king",
    "age": 35
  },
  {
    "name": {
      "firstName": "Lee",
      "lastName": "Seokho"
    },
    "age": 28
  }
]
```

```js
// test.js
const fs = require('fs') // file에 관한 모듈, 이 모듈을 기반으로 모든 파일을 읽고 쓸기 등이 가능
const path = require('path') // 모든 path
const a = fs.readFileSync(path.join(__dirname, 'test.json')) // fs의 메서드를 사용해서 파일을 읽기
const b = JSON.parse(a) // json이라는 파일을 javascript object로 변환

console.log(b) // { name: 'River2', age: 30 }
console.log(b[2]["name"]) // .name or ["name"] 둘다 value를 뽑기 가능
console.log(b[2].name.firstName) // "Lee"
```

## 데이터 교환형식
데이터는 추상적인 아이디어에서부터 시작해 구체적인 측정에 이르기까지 다양한 의미로 쓰입니다. 실험, 조사, 관찰 등으로 부터 얻은 사실이나 자료 등을 의미합니다. **JSON은 데이터를 주고 받기 위한 양식**이라고 보면 됩니다.

## 여러 언어에서의 사용
여러언에서 **독립적으로** 객체, 해시테이블, 딕셔너리 등으로 변환되어 사용됩니다.
<br/>
JSON은 각종 언어와 플랫폼으로부터 독립적입니다.<br/>
예를들면 자바스크립트 언어는 버전이 계속 업데이트되고, 파이썬 또한 업데이트됩니다. 
이러한 언어들과 JSON은 독립적입니다. 자바스크립트와 파이썬이 업데이트했다고 JSON에서 업데이트를 해야하거나 무언가 해야하는 것이 아닙니다. 
이렇게 독립적인 JSON을 사용하려면 자바스크립트에서는 자바스크립트 언어에 맞게(JS Object) 변환해서 사용해야하며, 다른 언어들 또한 같습니다.

## 단순 배열, 문자열 표현
JSON은 단순 배열, 문자열로도 표현 가능합니다. 하지만 일반적으로 JSON `Array`, `Object` 형태로 사용됩니다.
```json
{
  "name": "king",
  "age": 35
}

[1,2,3,4]

"River is hahaha"
```

![JSON1](/images/JSON1.png)

## 예시
JSON은 느슨한 타입입니다. 같은 key에 다른 타입으로 지정할 수 있습니다.<br/>
하지만 이러한 방식은 추천하지 않고 현업에서 또한 당연히 같은 타입으로 지정합니다. 데이터를 구축한다고 했을때, 스키마를 잘구축해야합니다.<br/>
스키마란 하나의 타입으로 이해하면 쉽습니다. 어떤 데이터를 주고 받을때 어떨때는 name이 string, 어떨때는 number로 들어온다면 name에 관한
타입체킹 로직이 추가적으로 필요하게 됩니다. 물론 다양한 상황이 있겠지만, 중요한 포인트는 어떤 key에 어떤 value type이 들어갈꺼다 라는 규칙 혹은 약속이 필요하다는 의미입니다.

```json
{
  "지브리OST리스트" : [
    {
      "name" : "마녀 배달부 키키",
      "song" : "따스함에 둘러쌓인다면"
    }, 
    {
      "name" : "하울의 움직이는 성",
      "song" : "세계의 약속"
    },
    {
      "name" : false,
      "song" : 111
    }
  ]
}
```
```js
const fs = require('fs')
const path = require('path')
const a = fs.readFileSync(path.join(__dirname, 'test.json'))
const b = JSON.parse(a)
console.log(b.지브리OST리스트[0]) // { name: '마녀 배달부 키키', song: '따스함에 둘러쌓인다면' }
console.log(b.지브리OST리스트[0].name) // 마녀 배달부 키키
console.log(b.지브리OST리스트[1]["name"]) // 하울의 움직이는 성
```

## JSON의 타입
Javascript Object와 유사하지만, undefined와 메서드 등을 포함하지 않습니다.
Javascript는 어떤 객체를 표현할때 `함수`, `undefined`를 사용할 수 있지만, JSON에서는 불가능합니다.
```js
// js
const test = {
  "a": () => {
    console.log(111)
  },
  "b": undefined
}
console.log(test) // { a: [Function: a], b: undefined }
```

#### 가능한 타입
- 수(Number)
- 문자열(String)
- 참/거짓(Boolean)
- 배열(Array)
- 객체(Object)
- null

## JSON 직렬화, 역직렬화
**직렬화**란 외부의 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터를 변환하는 기술입니다. 예를들면 JS에서 `JSON.Stringify()`를 통해 직렬화시킨 데이터를 Python에서도 사용할 수 있습니다. 

<br/>

**역직렬화** 는 반대로 JSON을 사용하는 언어와 환경에 맞게 변환해서 사용하는 기술입니다. 예를들면 JS에서 `JSON.parse()`를 통해 `JS Object` 형태로 변환해 사용합니다.

## JSON의 활용
JSON은 프로그래밍 언어와 프레임워크 등에서 독립적이기 때문에, 서로 다른 시스템간에 데이터를 교환하기 좋습니다.<br/>
그렇기에 주로 **API의 반환형태** 및 **시스템을 구성하는 설정파일(package.json)**에서 활용됩니다.

```js
// API 반환형태 예시
[
  {
    "currency":"KRW",
    "balance":"1000000.0",
    "locked":"0.0",
    "avg_buy_price":"0",
    "avg_buy_price_modified":false,
    "unit_currency": "KRW",
  },
  {
    "currency":"BTC",
    "balance":"2.0",
    "locked":"0.0",
    "avg_buy_price":"101000",
    "avg_buy_price_modified":false,
    "unit_currency": "KRW",
  }
]
```

```json
// 시스템을 구성하는 설정파일 ex) package.json
{
  "name": "cs-dev",
  "version": "1.0.0",
  "description": "#### 디자인패턴, 네트워크, 운영체제, 데이터베이스, 자료구조 등 CS 지식을 학습하고 정리합니다.",
  "main": "test.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
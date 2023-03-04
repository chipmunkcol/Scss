# 🎨 Scss 기본지식

[추천 블로그](https://nykim.work/97)

```
(주의)반드시 경로를 맞춰야합니다!
ex.src/scss/style.scss 파일 변환시
터미널에서 src/scss 까지 접근해서 아래 명령어를 입력해야합니다
```

- 파일 변환시 컴파일 명령어
  - sass [변환할 scss 파일명] [변환될 css 파일명]
- 폴더 변환시 _자동_ 컴파일 명령어(scss -> css폴더)
  - sass --watch [input폴더]:[output폴더]
- $변수명
- @mixin(Scss 함수생성)
  - @content 구문을 쓰면 @include로 불러와 쓸 때 내용을 추가로 입력할 수 있음
- @include(함수 불러오기)
- @extend(셀렉터 불러오기 %변수명 으로 only 불러오기용으로 사용가능)
- @mixin vs @extend
  - 선택자끼리 단순히 속성만 겹치는 관계면 @mixin </br>
    의미가 비슷한 관계면 @extend(ex. btn 선언 후 color나 크기가 다른 btn 생성시) 사용권장
- @use(Scss @import) </br>

  - @import도 사용가능하나 @use 시용권장

  </br>

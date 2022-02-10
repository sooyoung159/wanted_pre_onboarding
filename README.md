# wanted_pre_onboarding

---

## 1. 구현한 방법과 이유에 대한 간략한 내용

---

- 기본적으로 예시와 똑같이 표현될 수 있도록 구현하였다.
- 각각의 배경이 될 `<Card/>`와 `<Button/>`을 만들어 다른 컴포넌트에 사용하여 통일성을 주려 하였다.

---

## 2. 구현하면서 어려웠던 점과 해결 방법(error handling log)

---

#### Toggle

- 배경색을 단순히 바꾸게 아니라 왼쪽에서 오른쪽으로 색이 바뀌는 그라데이션 효과를 내는 걸 어떻게 구현해야 할지 어려웠다. 찾아보니 2개의 색을 이용하여 좌우로 움직여 필요할 때만 색을 보여줘 바뀌게 만들 수 있는 방법을 보고 적용하였다.

#### Tab

- 기본적인 구조를 만들었을 때 `DUMMYTABLE`에 `<Button/>`을 넣어두어 key 오류를 해결을 어떻게 해야할지가 어려웠다. 구현하다 컴포넌트자체를 `DUMMYTABLE`안에 뒀다는 것이 잘못됫다는 생각이 들었고 밖으로 빼 `key` 뿐만 아니라 더 보기좋게 구현할 수 있게 된것 같다.

#### Tag

- `onChange`의 값을 어떻게 `tag`에다가 전달 해 줄 수 있을지가 어려웠다. 일정한 패턴도 예상하기가 힘들어 `enter`를 클릭 하였을 때 `useRef` 이용하는 방법이 좋겠다고 판단했다.

#### AutoComplete

- 글자를 입력했을 때 단어를 어떻게 찾아야 할지 감이 잡히지 않았다. 구현 방법을 찾아 보다가 들어온 글자가 데이터에 있다는 것을 `index`의 유무로 판단하면 `map`을 이용해 나열하기도 좋겠다고 생각해 적용하였다.

---

## 3. 자세한 실행방법

---

#### Toggle

- 체크박스는 숨기고 레이블에 `<div/>` 두개를 활용하여 배경과 움직이는 스위치로 디자인하여 클릭 했을 때 `Toggle`의 느낌이 날 수 있도록 디자인 하였다.
- `Toggle` 클릭했을 때 `<checkbox/>`의 참/거짓을 판단해 동작이 이루어 질 수 있도록 css를 활용하여 구현하였다.
- 배경에는 `Toggle`의 크기의 2배로 좌우에 색을 두어 클릭 했을 시 스위치가 움직일때 같이 움직이게 만들어 배경색도 변하는 것처럼 디자인 하였다.
- `Toggle`에 따른 결과는 `state`로 관리하여 on, off를 표현하게 구현하였다.

#### Modal

- 버튼을 누르면 새로운 창이 팝업 되도록 만들었다. `onClick` 함수로 전달하여 `<ModalUI/>` 팝업 되게 구현하였다.
- 팝업이 되면 외부는 약간 흐려지게 보일 수 있도록 디자인 하였고 버튼이나 외부를 누르면 팝업이 해제할 수 있는 함수를 이용하여 팝업이 해제될 수 있도록 하였다.

#### Tab

- `DUMMYTABLE`에 버튼의 이름과 문구를 저장해 두고 버튼을 나열한 후 누를 때 그에 맞는 결과 값이 나올 수 있도록 같이 보관했다.
- 탭 부분 밑에 탭에 맞는 문구가 나올수 있도록 `state`를 이용해 표현하였다.
- 버튼 위에 포인터가 있거나 클릭했을 때 어떤 버튼이 클릭 되어있는지 css로 디자인하였다.

#### Tag

- `tag`를 배열로 된 `state`로 관리하여 map을 이용하여 `<input/>` 앞쪽에 나열하는 방식으로 구현하였다.
- `<input/>`에는 `useRef`를 사용하여 값을 확인하고 `onKeyDown` 함수로 `enter`를 입력했을 시 값을 `tag`로 만들어 추가하는 방식으로 구현하였다. 빈값을 입력했을때는 `tag`에 추가되지 않도록 했으며 `X`를 클릭했을 시 제거할 수 있도록 만들었다.

#### AutoComplete

- `<input/>` 창 밑에 글자를 치면 `DUMMYDATA`에 들어있는 단어들의 글자가 일치하는 단어들만 자동완성박스에 나열될 수 있도록 하였으며 만들고 찾고자 하는 단어를 선택하였을 때 `<input/>`창에 표시 될 수 있도록 구현하였다.
- 자동완성박스가 표현될 수 있는 자동완성박스의 참/거짓을 `state`로 관리하여 타이핑한 글자가 단어에 들어있을때만 보여질 수 있도록 했다.
- 글자가 단어에 포함된것은 `indexOf`를 사용하여 -1 초과일때 보여질 수 있도록 표현하였다.
- 글자가 다 지워졌을 때나 `<input/>`에서 `focus`가 사라졌을 때도 자동완성박스가 보이지 않게 만들었다.

#### ClickToEdit

- 이름과 나이를 입력할 수 있는 `<input/>`창을 만들어 입력하면 밑의 문구에 이름과 나이가 반영될수 있도록 구현하였다.
- 각각 `<input/>`에서 나갈 때 바로 반영 될 수 있게 `onBlur`에 이름과 나이의 `state`를 바꿀 수 있는 함수를 넣어주었다.

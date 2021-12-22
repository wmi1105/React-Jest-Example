# REACT - testing-library

- yarn add --dev @testing-library/jest-dom
- yarn add --dev @testing-library/react

```
// src/setupTest.js
import @testinglibrary/jest-dom;
```

##### toMatchSnapshot()

- `__snapshots__/Account.test.tsx.snap` 파일이 생성됨
- 컴포넌트를 수정했을 때 원하는 방식으로 렌더되는지 비교

#### getByText('')

- snapshot에서 특정 문구가 있는지 체크

## 참고

- https://blog.pumpkin-raccoon.com/81

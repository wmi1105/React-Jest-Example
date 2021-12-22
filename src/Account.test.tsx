/* eslint-disable testing-library/prefer-screen-queries */
import { Account } from "./Account";
import { render } from "@testing-library/react";

it("matched snapshot", () => {
  const utils = render(<Account name="호박너구리" mbti="ESFJ" />);
  expect(utils.container).toMatchSnapshot(); //컴포넌트를 수정했을 때 원하는 방식으로 렌더되는지 비교
});

it("shows the props correctly", () => {
  const utils = render(<Account name="호박너구리" mbti="ESFJ" />);
  utils.getByText("호박너구리"); //특정 문구가 있는지 확인
  utils.getByText("ABCD");
});

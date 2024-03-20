import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  width: 840px;
  height: 310px;

  outline: 1px solid red;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Reviews = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.black};
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const Description = styled.p`
  width: 525px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Button = styled.button`
  display: block;
  padding: 16px 40px;
  background-color: ${(p) => p.theme.colors.red};
  color: #ffffff;
  border: none;
  border-radius: 200px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: background-color ${(p) => p.theme.transition};

  &:hover,
  :focus {
    background-color: #d84343;
  }
`;

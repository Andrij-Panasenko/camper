import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.black};
`;

export const CardInfo = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Reviews = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.black};
`;

export const Location = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.black};
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 44px;
  color: ${(p) => p.theme.colors.grey};
`;

export const GalleryList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const GalleryItem = styled.li`
  /* border-radius: 10px; */
  width: 290px;
  height: 310px;
`;

export const GalleryImg = styled.img`
  border-radius: 10px;
  height: 100%;
  /* width: 290px;
  height: 310px; */
`;

export const FeaturesBtn = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.black};
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 24px;
`;

export const ReviewsBtn = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.black};
  outline: none;
  border: none;
  background-color: transparent;
  margin-bottom: 24px;
`;

export const RadioWrapper = styled.div`
  position: relative;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Radio = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;

  &:checked + label > ${FeaturesBtn} {
    &::before {
      content: "";
      display: flex;
      background-color: ${(p) => p.theme.colors.red};
      width: 85px;
      height: 5px;
      position: absolute;
      bottom: -28px;
    }
  }

  &:checked + label > ${ReviewsBtn} {
    &::before {
      content: "";
      display: flex;
      background-color: ${(p) => p.theme.colors.red};
      width: 85px;
      height: 5px;
      position: absolute;
      bottom: -28px;
    }
  }
`;

export const IconLine = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(16, 24, 40, 0.2);
  margin-bottom: 44px;
  margin-top: 24px;

`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

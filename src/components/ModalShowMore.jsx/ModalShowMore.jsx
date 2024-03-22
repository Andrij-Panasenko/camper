import Modal from "react-modal";
import sprite from "../../assets/sprite.svg";
import styles from "./ModalShowMore.module.css";
import {
  BtnWrapper,
  CardInfo,
  Description,
  FeaturesBtn,
  FeaturesWrapper,
  GalleryImg,
  GalleryItem,
  GalleryList,
  IconLine,
  Location,
  Price,
  Radio,
  RadioWrapper,
  Reviews,
  ReviewsBtn,
  Title,
} from "./ModalShowMore.styled";
import { BookingCamperForm } from "../BookingCamperForm/BookingCamperForm";
import { Features } from "../Features/Features";
// import { useSvgIcons } from "../../hooks/useSvgIcons";
Modal.setAppElement("#modal");

export const ModalShowMore = ({ isModalOpen, setIsOpen, data }) => {
  // const { ratingSVG } = useSvgIcons();

  const { name, price, rating, reviews, description, gallery, location } = data;

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(46, 47, 66, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "40px",
      maxWidth: "982px",
      maxHeight: "530px",
      borderRadius: "20px",
    },
  };

  return (
    <>
      <Modal
        // className={styles.modal}
        isOpen={isModalOpen}
        // isOpen={true}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="More info modal">
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          close
        </button>
        <div>
          <Title>{name}</Title>
          <CardInfo>
            <Reviews>
              {rating} ({reviews.length} Rewiews)
            </Reviews>
            <Location>{location}</Location>
          </CardInfo>
          <Price>€{price}.00</Price>
          <GalleryList>
            {gallery.map((item) => (
              <GalleryItem key={item}>
                <GalleryImg src={item} alt={name} />
              </GalleryItem>
            ))}
          </GalleryList>
          <Description>{description}</Description>
        </div>

       <BtnWrapper>
         <RadioWrapper>
           <Radio id="features" name="expand" type="radio" />
           <label for="features">
             <FeaturesBtn>Features</FeaturesBtn>
           </label>
         </RadioWrapper>
        
         <RadioWrapper>
           <Radio id="reviews" name="expand" type="radio" />
           <label for="reviews">
             <ReviewsBtn>Reviews</ReviewsBtn>
           </label>
         </RadioWrapper>
       </BtnWrapper>
        <IconLine>
          <use xlinkHref={sprite + "#icon-line"}></use>
        </IconLine>
        <FeaturesWrapper>
          <Features data={data} />
          <BookingCamperForm />
        </FeaturesWrapper>
      </Modal>
    </>
  );
};

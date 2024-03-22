import Modal from "react-modal";

import styles from "./ModalShowMore.module.css";
import {
    CardInfo,
  Description,
  GalleryImg,
  GalleryItem,
  GalleryList,
  Location,
  Price,
  Reviews,
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
        <div>
          <button>Features</button>
          <button>Reviews</button>
        </div>
        <div>
          <Features data={data} />
          <BookingCamperForm />
        </div>
      </Modal>
    </>
  );
};

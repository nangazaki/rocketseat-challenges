import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  padding: "2rem",
  maxWidth: 1280,
  margin: "0 auto",

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 625,
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  background: "linear-gradient(10deg, #1EA483 0%, #7465D4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const ImageContainerSkeleton = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: 625,
  borderRadius: 8,
  padding: "0.25rem",

  background: "$gray500",
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    fontSize: "$2xl",
    fontWeight: "600",
    color: "$green300",
    marginTop: "1rem",
    display: "block",
  },

  p: {
    marginTop: "2rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    padding: "0.75rem 1.5rem",
    fontSize: "$md",
    fontWeight: "bold",
    background: "$green500",
    color: "$white",
    cursor: "pointer",

    border: 0,
    borderRadius: 8,

    transition: "background 0.2s ease-in-out",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(disabled):hover": {
      background: "$green300",
    },
  },
});

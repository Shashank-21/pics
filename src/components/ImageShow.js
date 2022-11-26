function ImageShow({ image }) {
  const { alt_description, urls } = image;
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}

export default ImageShow;

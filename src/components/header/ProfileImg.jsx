const ProfileImg = (props) => {
  return (
    <img
      src="../../assets/profile.jpg"
      alt={props.alt}
      className={props.className}
    />
  );
};

export default ProfileImg;

import "./InstagramIcon.css"; // Import the CSS file
const InstagramIcon = () => {
  return (
    <div className="wrapper">
      <a
        href="https://instagram.com/"
        target="_instagram"
        aria-label="A great place to find out what friends are up to!"
      >
        <div className="bg">
          <div className="inner">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default InstagramIcon;

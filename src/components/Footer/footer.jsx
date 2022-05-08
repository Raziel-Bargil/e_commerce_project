import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    
    return (
        
      <p className="border-top pt-3 mt-2 text-center">
        Raziel Bargil <i className="fas fa-crown"></i> App &copy;{" "}
        {new Date().getFullYear()}
      </p>
    );
  };
  
  export default Footer;
  
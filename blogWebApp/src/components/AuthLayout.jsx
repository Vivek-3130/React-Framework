import { React, useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // If logined nhi h
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? (
    <div className="loader-widget">
      <div className="loader-spinner"></div>
      <p>Loading...</p>
    </div>
  ) : (
    <>{children}</>
  );
}

export default Protected;

// if(true){authentication required
//     if(false){ authstatus is not yet true so mark it true
//         navigator('/login')
//     }
// }
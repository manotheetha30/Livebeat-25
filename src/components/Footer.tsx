import React, { useEffect, useState } from "react";
import "./Footer.css";

const FooterNotice: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="footer-notice">
      Built with ❤️ by Manotheetha
    </div>
  );
};

export default FooterNotice;


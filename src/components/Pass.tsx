import React from "react";

const passes = [
  {
    name: "Gold Pass",
    description: "Access to all the events!",
    color: "linear-gradient(135deg, #ffd700 0%, #b8860b 100%)",
    price: 399,
    formlink:"https://docs.google.com/forms/d/e/1FAIpQLSfpVjmt4u2OLoSP-WZDu8R76PVLD_foUgreAwtjuCGgvgayZw/viewform?usp=dialog"
  },
  {
    name: "Silver Pass",
    description: "Access to 4 events!",
    color: "linear-gradient(135deg, #c0c0c0 0%, #808080 100%)",
    price: 249,
    formlink:"https://docs.google.com/forms/d/e/1FAIpQLScAPjPPvuEfCmCJSxn6dSrO2iJoHJwRwGGWIYMWv3-Jdx8z_A/viewform?usp=header"
  },
  {
    name: "Bronze Pass",
    description: "Access to 2 events!",
    color: "linear-gradient(135deg, #cd7f32 0%, #8c5523 100%)",
    price: 149,
    formlink:"https://docs.google.com/forms/d/e/1FAIpQLSczMfevOgeyEHSyy8MdW1_CkHbkL1P8Fpptsgfh7fPM6Q-yVg/viewform?usp=header"
  }
];

const Passes: React.FC = () => {
  return (
    <section id="pass" className="pass-section">
      <h2 className="passes-title">Event Passes</h2>
      <div className="passes-container">
        {passes.map((pass) => (
          <div key={pass.name} className="pass-card">
            <div className="pass-header" style={{ backgroundImage: pass.color }}>
              {pass.name}
            </div>
            <div className="pass-price">₹{pass.price}</div>
            <p className="pass-description">{pass.description}</p>
            <button
              className="pass-btn"
              onClick={() => window.location.href = pass.formlink} // replace with your form URL
            >
              Get Pass
            </button>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Passes;


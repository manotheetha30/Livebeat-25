import React from "react";

interface ContactInfo {
  title: string;
  content: string | { name:String;role: string; value: string };
  type?: "phone" | "email" | "social" | "address";
  link?: string;
}

const contacts: ContactInfo[] = [
  { title: "Phone", content: { name:"Vishwa R" , role: "Chairperson", value: "+91 6381655601" }, type: "phone" },
  { title: "Phone", content: { name:"Kalaiselvan L",role: "General Secretary", value: "+91 6369564232" }, type: "phone" },
  { title: "Phone", content: { name:"Karthikeyan M",role: "Event Coordinator", value: "+91 6374001217" }, type: "phone" },
  { 
    title: "Address", 
    content: "Department of Instrumentation Engineering, MIT Campus, Anna University, Chennai-600044", 
    type: "address", 
    link: "https://maps.app.goo.gl/gqmmZhM5CsnGuWdVA" 
  },
  { title: "Email", content: "iea.26.mit@gmail.com", type: "email" },
  { title: "Instagram", content: "@iea_mit", type: "social", link: "https://instagram.com/iea_mit" },
];

const ContactUs: React.FC = () => {
  const getHref = (contact: ContactInfo) => {
    switch(contact.type) {
      case "phone":
        if (typeof contact.content === "object") {
          return `tel:${contact.content.value.replace(/\s/g, "")}`;
        }
        return "#";
      case "email":
        return `mailto:${contact.content}`;
      case "social":
      case "address":
        return contact.link ? contact.link : "#";
      default:
        return "#";
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-grid">
        {contacts.map((c, idx) => (
          <div key={idx} className="contact-card">
            <h3 className="contact-card-title">{c.title}</h3>
            
     <a href={getHref(c)} className="contact-card-link">
  {typeof c.content === "string" ? (
    c.content
  ) : (
    <>
    <strong><span>{c.content.name}</span></strong>
    <br/>
      <span>{c.content.role}</span>
      <br />
      <span>{c.content.value}</span>
    </>
  )}
</a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;


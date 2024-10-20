import React from 'react'
import cssStyle from "./contact-us.module.css"

console.log(cssStyle,"CSS-Style")

const ContactUs = () => {
  return (
    <div>
      <h3 className={cssStyle.brown}>This is our contact us page</h3>
    </div>
  );
};

export default ContactUs;
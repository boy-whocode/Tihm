const Contact=()=>{
    return (
        <>
        <div className="contact">
  <ul className="p-0">
    <li><a href="tel:+918005629049">
        <img className="w-100 h-100" src="./image/contact_icons/phone.png" alt />
      </a></li>
    <li><a target="_blank" href="https://wa.me/918005629049?text=I'm%20inquiring%20about%20the%20online%20registration">
        {/* <li><a href="//api.whatsapp.com/send?phone=918696232306&amp;text=Hello"> */}
        <img className="w-100 h-100" src="./image/contact_icons/whatsapp.png" alt />
      </a></li>
    <li><a target="_blank" href="mailto:info@timesinstitute.org">
        <img className="w-100 h-100" src="./image/contact_icons/google-plus.png" alt />
      </a></li>
  </ul>
</div>

        </>
    )
}
export default Contact;
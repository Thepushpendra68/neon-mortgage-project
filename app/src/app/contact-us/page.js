import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Get Expert Mortgage Advice – Neon Mortgage",
  description: "Need mortgage assistance in Dubai? Contact Neon Mortgage for expert advice, competitive rates, and hassle-free home financing solutions. Reach out today!",
  alternates: {
        canonical: 'https://neonmortgage.com/contact-us/',
      },
       openGraph: {
    title: 'Neon Mortgage Dubai - Home Loans & Advice',
    description: 'Get expert mortgage advice and the best loan rates in Dubai with Neon Mortgage.',
    url: 'https://neonmortgage.com/',
    siteName: 'Neon Mortgage',
    images: [
      {
        url: 'https://neonmortgage.com/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Neon Mortgage Logo',
      },
    ],
    type: 'website',
  }
};

export default function Contac() {


    return (
         <div>
             <section id='about-us-hero' className="page-header contact-page-header">
            <div className="container">
                <div className="about-hero-wrapper">
                    <div className="about-page-content">
                        <h1 className='primary-heading'>Contact Us</h1>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                       <ContactForm />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="contact-right">
                            <div className="contact-info">
                                <div className="contact-row">
                                    <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                                    </div>
                                    <div className="contact-content">
                                        <h3 className="secondary-heading text-light">Address</h3>
                                        <a href="https://maps.app.goo.gl/PCjnALnxpLnC7gF27" target="_blank"><p className="text-sm text-light">Office 403, Suntech Tower, Dubai Silicon Oasis, Dubai, UAE</p></a>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                                    </div>
                                    <div className="contact-content">
                                        <h3 className="secondary-heading text-light">Phone</h3>
                                        <p className="text-sm text-light"><a href="tel:+971588002132" className="text text-light">+971 58 800 2132,</a>  <a href="tel:+971585946007" className="text text-light">+971 58 594 6007</a></p>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                                    </div>
                                    <div className="contact-content">
                                        <h3 className="secondary-heading text-light">Email</h3>
                                        <a href="mailto:info@neonmortgage.com"><p className="text-sm text-light">info@neonmortgage.com</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
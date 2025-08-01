
import Link from "next/link";
import MortgageCalculator from "@/components/MortgageCalculator";
import './calc.css'

export const metadata = {
  title: "Mortgage Calculator UAE | Estimate Your Home Loan with Neon Mortgage",
  description: "Calculate your mortgage payments with our easy-to-use mortgage calculator UAE. Get instant estimates on loan amounts, interest rates, and monthly payments.",
  alternates: {
        canonical: 'https://neonmortgage.com/calculator',
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


export default function Calculator () {
    return (
        <div style={{background: 'white'}}>
         

            <section id="calculator-hero">
                <div className="container">
                    <div className="calc-hero-wrapper">

                        <div>
                        <h1 className="primary-heading">Mortgage Calculator UAE</h1>
                        <p className="text">Buying a home in Dubai or anywhere in the UAE? Use our mortgage calculator to estimate your monthly loan repayments, interest rates, and affordability</p>
                        
                        </div>

                        <div className="calc-img">
                            <img src="/assets/images/calc-hero-2.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>

            <section id="calculator">
            <div className="container">
                <h2 className="primary-heading text-center">Mortgage Calculator</h2>
                <p className="text text-center">Use our free mortgage calculator to estimate finance payments</p>
                <div>
                    <MortgageCalculator />
                </div>
            </div>
        </section>

        <section id="calc-help">
            <div className="container">
                <h2 className="primary-heading text-center">How Our Mortgage Calculator Helps You?</h2>
                <div className="calc-help-wrapper">
                    <div className="cal-help-top">
                        <h3 className="secondary-heading">Instant & Accurate Home<br/> Loan Estimates</h3>
                        <div className="row g-3">
                            <div className=".col-sm-12 col-md-6 col-lg-4">
                                <div className="cal-help-card cal-help-card-1">
                                    <div className="calc-help-icon">
                                        
<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.347 34.6532V38.0938C18.347 38.3735 18.4397 38.6061 18.6252 38.7916C18.8107 38.9771 19.0434 39.0699 19.3231 39.0699C19.6028 39.0699 19.8354 38.9771 20.0209 38.7916C20.2064 38.6061 20.2992 38.3735 20.2992 38.0938V34.6532H23.7397C24.0195 34.6532 24.2521 34.5605 24.4376 34.375C24.6231 34.1909 24.7158 33.9583 24.7158 33.6771C24.7158 33.3959 24.6231 33.1633 24.4376 32.9793C24.2521 32.7953 24.0195 32.7025 23.7397 32.701H20.2992V29.2605C20.2992 28.9807 20.2064 28.7481 20.0209 28.5626C19.8354 28.3771 19.6028 28.2844 19.3231 28.2844C19.0434 28.2844 18.8107 28.3771 18.6252 28.5626C18.4397 28.7481 18.347 28.9807 18.347 29.2605V32.701H14.9064C14.6267 32.701 14.3941 32.7938 14.2086 32.9793C14.0231 33.1633 13.9303 33.3959 13.9303 33.6771C13.9303 33.9583 14.0231 34.1909 14.2086 34.375C14.3926 34.5605 14.6252 34.6532 14.9064 34.6532H18.347ZM30.3647 37.4136H38.0939C38.3736 37.4136 38.6062 37.3209 38.7917 37.1354C38.9772 36.9513 39.07 36.7187 39.07 36.4375C39.07 36.1563 38.9772 35.9237 38.7917 35.7397C38.6077 35.5542 38.3751 35.4615 38.0939 35.4615H30.3647C30.085 35.4615 29.8524 35.5542 29.6669 35.7397C29.4814 35.9252 29.3887 36.1578 29.3887 36.4375C29.3887 36.7173 29.4814 36.9499 29.6669 37.1354C29.8524 37.3209 30.085 37.4136 30.3647 37.4136ZM30.3647 31.8928H38.0939C38.3736 31.8928 38.6062 31.8 38.7917 31.6145C38.9772 31.4305 39.07 31.1979 39.07 30.9167C39.07 30.6355 38.9772 30.4029 38.7917 30.2189C38.6077 30.0334 38.3751 29.9406 38.0939 29.9406H30.3647C30.085 29.9406 29.8524 30.0334 29.6669 30.2189C29.4814 30.4044 29.3887 30.637 29.3887 30.9167C29.3887 31.1964 29.4814 31.429 29.6669 31.6145C29.8524 31.8 30.085 31.8928 30.3647 31.8928ZM15.4585 19.6365H23.1877C23.4674 19.6365 23.7 19.5438 23.8855 19.3583C24.071 19.1743 24.1637 18.9417 24.1637 18.6605C24.1637 18.3793 24.071 18.1467 23.8855 17.9626C23.7 17.7786 23.4674 17.6858 23.1877 17.6844H15.4585C15.1788 17.6844 14.9462 17.7771 14.7607 17.9626C14.5752 18.1481 14.4824 18.3807 14.4824 18.6605C14.4824 18.9402 14.5752 19.1728 14.7607 19.3583C14.9462 19.5438 15.1788 19.6365 15.4585 19.6365ZM12.4022 44.1667C11.3849 44.1667 10.5361 43.8266 9.85595 43.1465C9.17579 42.4663 8.83497 41.6168 8.8335 40.598V12.402C8.8335 11.3847 9.17432 10.536 9.85595 9.85583C10.5376 9.17567 11.3863 8.83485 12.4022 8.83337H40.6004C41.6162 8.83337 42.4649 9.17419 43.1466 9.85583C43.8282 10.5375 44.1683 11.3862 44.1668 12.402V40.6002C44.1668 41.6161 43.8267 42.4648 43.1466 43.1465C42.4664 43.8281 41.6169 44.1682 40.5982 44.1667H12.4022ZM12.4022 41.9584H40.6004C40.939 41.9584 41.2504 41.817 41.5345 41.5344C41.8186 41.2517 41.96 40.9396 41.9585 40.598V12.402C41.9585 12.062 41.8172 11.7498 41.5345 11.4657C41.2518 11.1816 40.9397 11.0402 40.5982 11.0417H12.4022C12.0621 11.0417 11.75 11.183 11.4658 11.4657C11.1817 11.7484 11.0404 12.0605 11.0418 12.402V40.6002C11.0418 40.9389 11.1832 41.2502 11.4658 41.5344C11.7485 41.8185 12.0599 41.9598 12.4 41.9584M34.2293 20.0716L36.6298 22.4698C36.8197 22.6597 37.0435 22.7621 37.3011 22.7768C37.5588 22.79 37.7965 22.6877 38.0144 22.4698C38.2235 22.2608 38.3302 22.0326 38.3346 21.7852C38.3376 21.5364 38.2345 21.3031 38.0255 21.0852L35.614 18.6605L38.0144 16.2622C38.2029 16.0708 38.3044 15.847 38.3192 15.5909C38.3339 15.3332 38.2323 15.0955 38.0144 14.8776C37.7965 14.6597 37.5654 14.5507 37.321 14.5507C37.0766 14.5507 36.8462 14.6597 36.6298 14.8776L34.2293 17.2758L31.8311 14.8776C31.6397 14.6862 31.4152 14.5839 31.1575 14.5706C30.8999 14.5574 30.6621 14.6597 30.4442 14.8776C30.2264 15.0955 30.1181 15.3259 30.1196 15.5688C30.1211 15.8117 30.23 16.0428 30.4465 16.2622L32.8447 18.6605L30.4332 21.0852C30.2521 21.2751 30.1542 21.4989 30.1395 21.7565C30.1248 22.0142 30.2271 22.2519 30.4465 22.4698C30.6658 22.6877 30.8962 22.7967 31.1377 22.7967C31.3791 22.7967 31.6102 22.6877 31.8311 22.4698L34.2293 20.0716Z" fill="white"/>
</svg>

                                    </div>
                                    <p className="text-sm text-light">Calculate your monthly mortgage payments instantly</p>
                                </div>
                            </div>

                            <div className=".col-sm-12 col-md-6 col-lg-4">
                                <div className="cal-help-card">
                                    <div className="calc-help-icon">
                                        

                                    
<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.7611 38.7613H16.0845C15.8048 38.7613 15.5365 38.6501 15.3387 38.4523C15.1409 38.2545 15.0298 37.9863 15.0298 37.7065V15.0299M18.985 29.5324L24.2586 24.2588L29.5323 29.5324L38.7611 20.3035" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                                    </div>
                                    <p className="text-sm">Get insights on loan affordability based on your income</p>
                                </div>
                            </div>

                            <div className=".col-sm-12 col-md-6 col-lg-4">
                                <div className="cal-help-card">
                                    <div className="calc-help-icon">
                                        

                                    
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14.9474C12 13.9005 12.4039 12.8964 13.1228 12.1562C13.8416 11.4159 14.8167 11 15.8333 11H31.1667C32.1833 11 33.1584 11.4159 33.8772 12.1562C34.5961 12.8964 35 13.9005 35 14.9474V23.6316C35 23.841 34.9192 24.0418 34.7754 24.1898C34.6317 24.3379 34.4367 24.4211 34.2333 24.4211C34.03 24.4211 33.835 24.3379 33.6912 24.1898C33.5474 24.0418 33.4667 23.841 33.4667 23.6316V14.9474C33.4667 14.3192 33.2243 13.7168 32.793 13.2726C32.3617 12.8285 31.7767 12.5789 31.1667 12.5789H15.8333C15.2233 12.5789 14.6383 12.8285 14.207 13.2726C13.7757 13.7168 13.5333 14.3192 13.5333 14.9474V37.0526C13.5333 37.6808 13.7757 38.2832 14.207 38.7274C14.6383 39.1715 15.2233 39.4211 15.8333 39.4211H26.5667C26.77 39.4211 26.965 39.5042 27.1088 39.6523C27.2526 39.8003 27.3333 40.0011 27.3333 40.2105C27.3333 40.4199 27.2526 40.6207 27.1088 40.7688C26.965 40.9168 26.77 41 26.5667 41H15.8333C14.8167 41 13.8416 40.5841 13.1228 39.8438C12.4039 39.1036 12 38.0995 12 37.0526V14.9474Z" fill="black"/>
<path d="M35.0001 28.2943C35.2122 28.2943 35.4157 28.378 35.5657 28.5269C35.7158 28.6758 35.8001 28.8778 35.8001 29.0884V30.1477H36.0704C37.5904 30.1477 39 31.2341 39 32.7937C39 33.0043 38.9157 33.2063 38.7657 33.3552C38.6157 33.5041 38.4122 33.5878 38.2 33.5878C37.9878 33.5878 37.7844 33.5041 37.6343 33.3552C37.4843 33.2063 37.4 33.0043 37.4 32.7937C37.4 32.3014 36.9104 31.736 36.0704 31.736H33.6609C32.9729 31.736 32.6001 32.2013 32.6001 32.5555C32.6001 32.8938 32.6833 33.0081 32.7329 33.0605C32.8065 33.1383 32.9553 33.2289 33.2929 33.3289L37.16 34.4423C37.5808 34.5661 38.064 34.7567 38.4336 35.1474C38.8288 35.5651 39 36.1067 39 36.7388C39 38.165 37.7024 39.1466 36.3392 39.1466H35.8001V40.2059C35.8001 40.4165 35.7158 40.6185 35.5657 40.7674C35.4157 40.9163 35.2122 41 35.0001 41C34.7879 41 34.5844 40.9163 34.4344 40.7674C34.2844 40.6185 34.2001 40.4165 34.2001 40.2059V39.1466H33.9297C32.4097 39.1466 31.0001 38.0602 31.0001 36.5006C31.0001 36.29 31.0844 36.088 31.2344 35.9391C31.3845 35.7901 31.5879 35.7065 31.8001 35.7065C32.0123 35.7065 32.2158 35.7901 32.3658 35.9391C32.5158 36.088 32.6001 36.29 32.6001 36.5006C32.6001 36.9929 33.0897 37.5583 33.9297 37.5583H36.3392C37.0272 37.5583 37.4 37.093 37.4 36.7388C37.4 36.4005 37.3168 36.2862 37.2672 36.2338C37.1936 36.156 37.0448 36.0654 36.7072 35.9654L32.8401 34.852C32.4193 34.7281 31.9361 34.5376 31.5665 34.1469C31.1713 33.7292 31.0001 33.1876 31.0001 32.5555C31.0001 31.1293 32.2977 30.1477 33.6609 30.1477H34.2001V29.0884C34.2001 28.8778 34.2844 28.6758 34.4344 28.5269C34.5844 28.378 34.7879 28.2943 35.0001 28.2943ZM16.6004 24.3238C16.6004 24.1132 16.6846 23.9112 16.8347 23.7622C16.9847 23.6133 17.1882 23.5297 17.4003 23.5297H18.2003C18.4125 23.5297 18.616 23.6133 18.766 23.7622C18.916 23.9112 19.0003 24.1132 19.0003 24.3238C19.0003 24.5344 18.916 24.7364 18.766 24.8853C18.616 25.0342 18.4125 25.1179 18.2003 25.1179H17.4003C17.1882 25.1179 16.9847 25.0342 16.8347 24.8853C16.6846 24.7364 16.6004 24.5344 16.6004 24.3238ZM21.4003 24.3238C21.4003 24.1132 21.4846 23.9112 21.6346 23.7622C21.7846 23.6133 21.9881 23.5297 22.2003 23.5297H30.2001C30.4123 23.5297 30.6158 23.6133 30.7658 23.7622C30.9158 23.9112 31.0001 24.1132 31.0001 24.3238C31.0001 24.5344 30.9158 24.7364 30.7658 24.8853C30.6158 25.0342 30.4123 25.1179 30.2001 25.1179H22.2003C21.9881 25.1179 21.7846 25.0342 21.6346 24.8853C21.4846 24.7364 21.4003 24.5344 21.4003 24.3238ZM16.6004 29.0884C16.6004 28.8778 16.6846 28.6758 16.8347 28.5269C16.9847 28.378 17.1882 28.2943 17.4003 28.2943H18.2003C18.4125 28.2943 18.616 28.378 18.766 28.5269C18.916 28.6758 19.0003 28.8778 19.0003 29.0884C19.0003 29.299 18.916 29.501 18.766 29.6499C18.616 29.7988 18.4125 29.8825 18.2003 29.8825H17.4003C17.1882 29.8825 16.9847 29.7988 16.8347 29.6499C16.6846 29.501 16.6004 29.299 16.6004 29.0884ZM21.4003 29.0884C21.4003 28.8778 21.4846 28.6758 21.6346 28.5269C21.7846 28.378 21.9881 28.2943 22.2003 28.2943H27.8002C28.0124 28.2943 28.2158 28.378 28.3659 28.5269C28.5159 28.6758 28.6002 28.8778 28.6002 29.0884C28.6002 29.299 28.5159 29.501 28.3659 29.6499C28.2158 29.7988 28.0124 29.8825 27.8002 29.8825H22.2003C21.9881 29.8825 21.7846 29.7988 21.6346 29.6499C21.4846 29.501 21.4003 29.299 21.4003 29.0884ZM16.6004 33.853C16.6004 33.6424 16.6846 33.4404 16.8347 33.2915C16.9847 33.1426 17.1882 33.0589 17.4003 33.0589H18.2003C18.4125 33.0589 18.616 33.1426 18.766 33.2915C18.916 33.4404 19.0003 33.6424 19.0003 33.853C19.0003 34.0637 18.916 34.2656 18.766 34.4146C18.616 34.5635 18.4125 34.6471 18.2003 34.6471H17.4003C17.1882 34.6471 16.9847 34.5635 16.8347 34.4146C16.6846 34.2656 16.6004 34.0637 16.6004 33.853ZM21.4003 33.853C21.4003 33.6424 21.4846 33.4404 21.6346 33.2915C21.7846 33.1426 21.9881 33.0589 22.2003 33.0589H25.4002C25.6124 33.0589 25.8159 33.1426 25.9659 33.2915C26.1159 33.4404 26.2002 33.6424 26.2002 33.853C26.2002 34.0637 26.1159 34.2656 25.9659 34.4146C25.8159 34.5635 25.6124 34.6471 25.4002 34.6471H22.2003C21.9881 34.6471 21.7846 34.5635 21.6346 34.4146C21.4846 34.2656 21.4003 34.0637 21.4003 33.853ZM17.0548 14.0004H30.5457C30.7473 14.0004 30.9441 14.0004 31.1105 14.0131C31.2929 14.029 31.5105 14.0639 31.7265 14.1735C32.0276 14.3258 32.2723 14.5687 32.4257 14.8675C32.5377 15.0835 32.5713 15.2964 32.5857 15.479C32.6001 15.6442 32.6001 15.8395 32.6001 16.0396V18.314C32.6001 18.5141 32.6001 18.7094 32.5857 18.8746C32.5742 19.087 32.5198 19.2949 32.4257 19.4861C32.2723 19.7849 32.0276 20.0279 31.7265 20.1801C31.534 20.2735 31.3245 20.3275 31.1105 20.3389C30.9225 20.3503 30.7341 20.3551 30.5457 20.3532H17.0548C16.8532 20.3532 16.6564 20.3532 16.49 20.3405C16.2759 20.3286 16.0664 20.274 15.874 20.1801C15.5729 20.0279 15.3282 19.7849 15.1748 19.4861C15.0807 19.2949 15.0263 19.087 15.0148 18.8746C15.0033 18.688 14.9985 18.501 15.0004 18.314V16.0396C15.0004 15.8395 15.0004 15.6442 15.0132 15.479C15.0292 15.298 15.0644 15.082 15.1748 14.8675C15.3282 14.5687 15.5729 14.3258 15.874 14.1735C16.0665 14.0801 16.276 14.0261 16.49 14.0147C16.678 14.0033 16.8664 13.9985 17.0548 14.0004ZM16.61 15.5981V15.6077C16.6004 15.7014 16.6004 15.83 16.6004 16.0651V18.2886C16.5978 18.4443 16.601 18.6 16.61 18.7555H16.6196C16.714 18.765 16.8436 18.765 17.0804 18.765H30.5201C30.7569 18.765 30.8881 18.765 30.9809 18.7571H30.9905V18.746C30.9993 18.5937 31.0025 18.4411 31.0001 18.2886V16.0651C31.0027 15.9094 30.9995 15.7536 30.9905 15.5981H30.9809C30.8275 15.5895 30.6738 15.5863 30.5201 15.5886H17.0804C16.9235 15.586 16.7666 15.5892 16.61 15.5981Z" fill="black"/>
</svg>


                                    </div>
                                    <p className="text-sm">Plan your down payment and loan tenure effectively</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="cal-help-bottom">
                        <h3 className="consultant-heading text-light"><strong>Simplify Your<br/> Mortgage Planning</strong></h3>
                        <div>
                           <h3 className="secondary-heading text-light"><strong>Our UAE mortgage <br/>calculator is designed to help you</strong></h3>
                           <ul className="icon-list">
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light">Understand total loan costs, including interest.</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light"> Compare different loan terms and interest rates</span>
                                        </li>
                                        <li className="icon-list-item">
                                            <span className="icon-list-icon">
                                                
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 1.76125L9.67886 17L0 9.02075L1.8262 6.85306L9.26796 12.9864L19.7743 0L22 1.76125Z" fill="#48E054"/>
</svg>

                                            </span>
                                            <span className="text icon-list-text text-light">Make informed home-buying decisions</span>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="use">
            <div className="container">
                <div className="use-wrapper">
                    <div className="use-top">
                        <h2 className="consultant-heading"><strong>How to Use the<br/> Mortgage Calculator?</strong></h2>
                        <Link href='/journey'><button className="btn btn-primary btn-rounded">
                    <span className="text text-light">Check Eligibility</span>
                    
<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.451987 1.57999L1.51299 0.519991L7.29199 6.29699C7.38514 6.38956 7.45907 6.49963 7.50952 6.62088C7.55997 6.74213 7.58594 6.87216 7.58594 7.00349C7.58594 7.13482 7.55997 7.26485 7.50952 7.3861C7.45907 7.50735 7.38514 7.61742 7.29199 7.70999L1.51299 13.49L0.452987 12.43L5.87699 7.00499L0.451987 1.57999Z" fill="white"/>
</svg>

                </button></Link>
                    </div>

                    <p className="text step-heading"><strong>Follow These Simple Steps</strong></p>

                    <div className="use-wrapper-i">
                        <div className="">
                            <div className="use-card">
                                <div className="use-icon">
                                    
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5833 41H30.75V37.5833H37.5833V3.41667H30.75V0H37.5833C38.4895 0 39.3585 0.359969 39.9993 1.00072C40.64 1.64147 41 2.51051 41 3.41667V37.5833C41 38.4895 40.64 39.3585 39.9993 39.9993C39.3585 40.64 38.4895 41 37.5833 41ZM27.3333 11.9583H23.9167L20.5 18.6157L17.0833 11.9583H13.6667L18.6294 20.5L13.6667 29.0417H17.0833L20.5 22.5517L23.9167 29.0417H27.3333L22.3757 20.5L27.3333 11.9583ZM10.25 41H3.41667C2.51051 41 1.64147 40.64 1.00072 39.9993C0.359969 39.3585 0 38.4895 0 37.5833V3.41667C0 2.51051 0.359969 1.64147 1.00072 1.00072C1.64147 0.359969 2.51051 0 3.41667 0H10.25V3.41667H3.41667V37.5833H10.25V41Z" fill="black"/>
</svg>

                                </div>
                                <div className="use-content">
                                    <h3 className="secondary-heading"><strong>Enter Property Value</strong></h3>
                                    <p className="text">Input the price of the home you’re considering</p>
                                </div>
                            </div>
                        </div>

                        <div className="use-below">
                            <div className="use-card">
                                <div className="use-icon">
                                    

                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.65557 24.8309C2.22835 23.2935 1.99997 21.6734 1.99997 20C1.99997 10.0588 10.0588 1.99997 20 1.99997C21.6734 1.99997 23.2935 2.22835 24.8309 2.65557C22.3 0.977439 19.2642 0 16 0C7.16345 0 0 7.16345 0 16C0 19.2642 0.977439 22.3 2.65557 24.8309ZM6.00001 24C6.00001 25.6734 6.22829 27.2935 6.6556 28.8308C4.97748 26.3 3.99994 23.2641 3.99994 20C3.99994 11.1634 11.1634 3.99994 20 3.99994C23.2641 3.99994 26.3 4.97738 28.8308 6.6556C27.2935 6.22829 25.6734 6.00001 24 6.00001C14.0589 6.00001 6.00001 14.0589 6.00001 24ZM36.0001 24C36.0001 30.6274 30.6274 36.0001 24 36.0001C17.3727 36.0001 12 30.6274 12 24C12 17.3727 17.3726 12 24 12C30.6274 12 36.0001 17.3726 36.0001 24ZM40 24C40 32.8365 32.8365 40 24 40C15.1634 40 7.99998 32.8365 7.99998 24C7.99998 15.1634 15.1634 7.99998 24 7.99998C32.8365 7.99998 40 15.1634 40 24ZM29 18H26V14H22V18C18.6863 18 16 20.6863 16 24C16 27.3137 18.6863 30 22 30V34H26V30H29V26H22C20.8954 26 20 25.1046 20 24C20 22.8955 20.8954 22 22 22H29V18Z" fill="black"/>
</svg>

                                </div>
                                <div className="use-content">
                                    <h3 className="secondary-heading"><strong>Down Payment</strong></h3>
                                    <p className="text">Specify the amount you plan to pay upfront</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="use-card">
                                <div className="use-icon">
                                    

                               
<svg width="55" height="27" viewBox="0 0 55 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.896 26.4375C14.4878 26.4375 14.1456 26.2995 13.8696 26.0235C13.5936 25.7475 13.4566 25.4054 13.4585 24.9971C13.4604 24.5889 13.5975 24.2477 13.8696 23.9736C14.1418 23.6995 14.4839 23.5625 14.896 23.5625H33.9688C32.3396 22.3799 31.1369 21.0325 30.3606 19.5203C29.5844 18.008 29.1321 16.4804 29.0036 14.9375H19.9819C19.5736 14.9375 19.2315 14.7995 18.9555 14.5235C18.6795 14.2475 18.5425 13.9054 18.5444 13.4971C18.5463 13.0889 18.6834 12.7477 18.9555 12.4736C19.2277 12.1995 19.5698 12.0625 19.9819 12.0625H29.0036C29.2068 10.4448 29.6956 8.87987 30.4699 7.36762C31.2481 5.85729 32.4144 4.54725 33.9688 3.4375H4.50002C4.09177 3.4375 3.7506 3.2995 3.47652 3.0235C3.20244 2.7475 3.06444 2.40538 3.06252 1.99713C3.0606 1.58888 3.1986 1.24771 3.47652 0.973625C3.75444 0.699542 4.0956 0.5625 4.50002 0.5625H41.875C45.4554 0.5625 48.5067 1.82367 51.029 4.346C53.5514 6.8645 54.8125 9.91296 54.8125 13.4914C54.8125 17.0698 53.5514 20.1221 51.029 22.6483C48.5067 25.1744 45.4554 26.4375 41.875 26.4375H14.896ZM41.875 23.5625C44.6389 23.5625 47.0069 22.5764 48.9791 20.6041C50.9514 18.6319 51.9375 16.2638 51.9375 13.5C51.9375 10.7362 50.9514 8.36813 48.9791 6.39588C47.0069 4.42363 44.6389 3.4375 41.875 3.4375C39.1112 3.4375 36.7431 4.42363 34.7709 6.39588C32.7986 8.36813 31.8125 10.7362 31.8125 13.5C31.8125 16.2638 32.7986 18.6319 34.7709 20.6041C36.7431 22.5764 39.1112 23.5625 41.875 23.5625ZM1.62502 14.9375C1.21677 14.9375 0.875603 14.7995 0.60152 14.5235C0.327437 14.2475 0.189436 13.9054 0.18752 13.4971C0.185603 13.0889 0.323603 12.7477 0.60152 12.4736C0.879436 12.1995 1.2206 12.0625 1.62502 12.0625H14.2319C14.6382 12.0625 14.9794 12.2005 15.2554 12.4765C15.5314 12.7525 15.6694 13.0946 15.6694 13.5029C15.6694 13.9111 15.5314 14.2523 15.2554 14.5264C14.9794 14.8005 14.6382 14.9375 14.2319 14.9375H1.62502ZM4.50002 26.4375C4.09177 26.4375 3.7506 26.2995 3.47652 26.0235C3.20244 25.7475 3.06444 25.4054 3.06252 24.9971C3.0606 24.5889 3.1986 24.2477 3.47652 23.9736C3.75444 23.6995 4.0956 23.5625 4.50002 23.5625H9.14602C9.55235 23.5625 9.89352 23.7005 10.1695 23.9765C10.4455 24.2525 10.5826 24.5946 10.5806 25.0029C10.5787 25.4111 10.4417 25.7523 10.1695 26.0264C9.89735 26.3005 9.55523 26.4375 9.14314 26.4375H4.50002Z" fill="black"/>
</svg>


                                </div>
                                <div className="use-content">
                                    <h3 className="secondary-heading"><strong>Loan Term</strong></h3>
                                    <p className="text">Select the repayment period (e.g., 10, 15, 25 years)</p>
                                </div>
                            </div>
                        </div>

                        <div className="use-below">
                            <div className="use-card">
                                <div className="use-icon">
                                    

                               

                                <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.5774 33.8952C39.399 26.8616 36.0313 20.379 30.954 15.3708C29.8425 14.2894 29.2878 13.7497 28.0601 13.2509C26.8325 12.75 25.7768 12.75 23.6677 12.75H19.0323C16.9231 12.75 15.8675 12.75 14.6398 13.2509C13.4143 13.7497 12.8553 14.2894 11.7459 15.3708C6.66859 20.379 3.30092 26.8616 2.12251 33.8952C1.07546 40.2119 6.90196 45 13.4122 45H29.2878C35.8001 45 41.6288 40.2119 40.5753 33.8952" stroke="black" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.8476 25.4759C24.3832 23.758 22.016 22.21 19.1759 23.3689C16.3357 24.5277 15.8864 28.2537 20.1799 28.6514C22.1235 28.8299 23.3877 28.4429 24.5466 29.5372C25.7076 30.6294 25.9226 33.6717 22.9577 34.4908C19.9972 35.31 17.0624 34.0307 16.7442 32.2118M21.0098 21.3328V22.969M21.0098 34.7424V36.385M11.1521 7.25245C10.707 6.60745 10.0642 5.73025 11.3929 5.53245C12.7581 5.32605 14.175 6.25915 15.5639 6.24195C16.8173 6.2226 17.4559 5.66575 18.1439 4.87025C18.8663 4.0339 19.9843 2 21.3495 2C22.7148 2 23.8328 4.0339 24.5552 4.87025C25.2432 5.66575 25.8817 6.22475 27.1352 6.2398C28.5241 6.2613 29.9409 5.32605 31.3062 5.5303C32.6349 5.73025 31.992 6.6053 31.547 7.2503L29.5432 10.1722C28.6832 11.4192 28.2553 12.0427 27.3566 12.3974C26.4579 12.7522 25.2991 12.75 22.9792 12.75H19.7198C17.3978 12.75 16.239 12.75 15.3424 12.3974C14.4459 12.0448 14.0159 11.417 13.1559 10.17L11.1521 7.25245Z" stroke="black" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                                </div>
                                <div className="use-content">
                                    <h3 className="secondary-heading"><strong>Interest Rate</strong></h3>
                                    <p className="text">Enter the expected or current market rate</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="use-card">
                                <div className="use-icon">
                                    

                               

                               
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2315 32.5185H12.331V27.7685H17.081V25.669H12.331V20.919H10.2315V25.669H5.4815V27.7685H10.2315V32.5185ZM22.1065 30.7372H32.5185V28.6377H22.1065V30.7372ZM22.1065 24.7997H32.5185V22.7002H22.1065V24.7997ZM23.9875 15.4114L27.3125 12.0864L30.6375 15.4114L32.1266 13.9222L28.8016 10.5687L32.1266 7.24375L30.6375 5.75462L27.3125 9.07962L23.9875 5.75462L22.4984 7.24375L25.8234 10.5687L22.4984 13.9222L23.9875 15.4114ZM6.07525 11.6185H16.4872V9.519H6.07525V11.6185ZM3.838 38C2.74392 38 1.83112 37.6342 1.09962 36.9027C0.368125 36.1712 0.00158333 35.2577 0 34.162V3.838C0 2.74392 0.366541 1.83112 1.09962 1.09962C1.83271 0.368125 2.7455 0.00158333 3.838 0H34.1644C35.2569 0 36.1697 0.366541 36.9027 1.09962C37.6358 1.83271 38.0016 2.7455 38 3.838V34.1644C38 35.2569 37.6342 36.1697 36.9027 36.9027C36.1712 37.6358 35.2577 38.0016 34.162 38H3.838ZM3.838 35.625H34.1644C34.5285 35.625 34.8634 35.473 35.169 35.169C35.4746 34.865 35.6266 34.5293 35.625 34.162V3.838C35.625 3.47225 35.473 3.13658 35.169 2.831C34.865 2.52542 34.5293 2.37342 34.162 2.375H3.838C3.47225 2.375 3.13658 2.527 2.831 2.831C2.52542 3.135 2.37342 3.47067 2.375 3.838V34.1644C2.375 34.5285 2.527 34.8634 2.831 35.169C3.135 35.4746 3.46987 35.6266 3.83562 35.625" fill="black"/>
</svg>




                                </div>
                                <div className="use-content">
                                    <h3 className="secondary-heading"><strong>Calculate</strong></h3>
                                    <p className="text-sm">Get an estimate of your monthly mortgage payments instantly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="factor">
            <h2 className="consultant-heading text-center text-light"><strong>What Factors Affect <br/>Your Mortgage in UAE?</strong></h2>
        </section>

        <section id="factor-content">
            <div className="container">
                <div className="factor-wrapper">
                    <div className="factor-card factor-card-1">
                        <h3 className="consultant-heading"><strong>Down Payment Requirements <br/>UAE mortgage laws typically require</strong></h3>
                        <p className="text">20% down payment for residents</p>
                        <p className="text">25% down payment for non-residents</p>
                    </div>
                    <div className="factor-card factor-card-2">
                        <div className="facor-content">
                            <h3 className="secondary-heading"><strong>Loan Tenure & Repayment Period</strong></h3>
                            <p className="text">Most UAE banks offer home loans for up to 25 years</p>
                        </div>
                        
<svg width="87" height="88" viewBox="0 0 87 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.3232 0.664011C30.0978 0.730656 17.0711 6.82064 8.59094 18.2835C-4.22941 35.6129 -2.26404 59.2837 12.2353 74.2783L5.39861 83.519L33.1617 79.3673L29.0095 51.6045L21.0898 62.3095C12.997 52.3253 12.3282 37.7729 20.3261 26.9622C25.958 19.3493 34.6212 15.3032 43.4145 15.2575C46.445 15.2415 49.4591 15.7042 52.3454 16.6284L51.067 8.08212C46.7706 7.20648 42.348 7.14439 38.0287 7.89907C27.1541 9.24335 17.1001 15.2278 10.828 24.6456C17.3731 12.5486 29.8803 5.19969 43.1484 4.86445C46.21 4.78763 49.2694 5.08605 52.2583 5.75305L61.1825 4.41869C55.4654 1.86563 49.3737 0.632984 43.3236 0.663644L43.3232 0.664011ZM82.4158 4.71317L54.6533 8.86423L58.8051 36.6273L66.3556 26.4217C74.104 36.389 74.6342 50.6648 66.7571 61.3124C59.373 71.2938 46.7784 75.1407 35.5113 71.8811L36.7087 79.8854C41.959 80.8959 47.3699 80.7032 52.535 79.3218C59.4102 78.2281 65.9998 75.2736 71.4745 70.5592C62.4425 80.5927 48.9632 84.7903 36.2716 82.3717L26.027 83.9036C44.2083 91.9266 66.1243 86.6153 78.4449 69.9618C91.1367 52.8059 89.3393 29.4348 75.2351 14.4192L82.4162 4.71335L82.4158 4.71317Z" fill="black"/>
</svg>

                    </div>
                    <div className="factor-card factor-card-3">
                        <div className="facor-content">
                            <h3 className="secondary-heading text-light"><strong>Interest Rate Type</strong></h3>
                            <p className="text text-light">Choose between fixed-rate or variable-rate mortgages based on market conditions</p>
                        </div>
                    </div>
                    <div className="factor-card factor-card-4">
                        <div className="facor-content">
                            <h3 className="secondary-heading"><strong>Debt-to-Income Ratio</strong></h3>
                            <p className="text">Lenders assess your income and existing debts before approving the loan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="benefit">
            <div className="container">
                <h2 className="primary-heading text-center">Benefits of Using a Mortgage Calculator in UAE</h2>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="benefit-card">
                            <h3 className="secondary-heading"><strong>Financial Clarity</strong></h3>
                            <p className="text">Get a clear picture of your home loan affordability</p>
                            <span className="benefit-number">1</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="benefit-card">
                            <h3 className="secondary-heading"><strong>Plan Ahead</strong></h3>
                            <p className="text">Know your monthly obligations before committing to a mortgage</p>
                            <span className="benefit-number">2</span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="benefit-card">
                            <h3 className="secondary-heading"><strong>Compare Loan Options</strong></h3>
                            <p className="text">Adjust interest rates, tenure, and down payment to find the best fit</p>
                            <span className="benefit-number">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="calc-cta">
            <div className="container">
                <div className="calc-cta-wrapper">
                    <div className="calc-cta-left">
                        <h2 className="secondary-heading text-light"><strong>Get the Best Mortgage Rates in UAE with Neon Mortgage</strong></h2>
                        <p className="text text-light">Looking for a home loan in Dubai, Abu Dhabi, or anywhere in the UAE? Our experts help you find the best mortgage rates, loan terms, and financing solutions tailored to your needs</p>
                    </div>
                    <div>
                        <p className="text text-light"><strong>Speak to Our Mortgage Advisor Today</strong></p>
                        <Link href='/contact-us'><button className="btn btn-secondary btn-rounded">
                    <span className="text">Get a Free Consultation</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>
                </button></Link>
                    </div>
                </div>
            </div>
        </section>
          
        </div>
    )
} 
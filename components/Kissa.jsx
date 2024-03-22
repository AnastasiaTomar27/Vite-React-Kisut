// Kovakoodattu

// import kissa1 from "../images/felix.png"

// export default function Kissa() {
//     return(
//         <div className="contact-card">
//             <img src={kissa1} alt="kissan kuva" />
//             <h3>Mr. Felix</h3>
//             <div className="info-group">
//                 <img src="../images/phone.png" alt="" />
//                 <p>(111) 123-45</p>
//             </div>
//             <div className="info-group">
//                 <img src="../images/mail.icon.png" alt="" />
//                 <p>fel@hotmail.com</p>
//             </div>
//         </div>
//     )
// }


import kissa1 from "../images/felix.png"

export default function Kissa(props) {
    return(
        <div className="contact-card">
            <img src={props.img} alt="kissan kuva" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="../images/phone.png" alt="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="../images/mail.icon.png" alt="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}



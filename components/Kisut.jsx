import kissa1 from "../images/felix.png"
import kissa2 from "../images/fluffy.png"
import kissa3 from "../images/whiskerson.png"
import kissa4 from "../images/pumpkin.png"


export default function Kisut() {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={kissa1} alt="kissan kuva" />
                <h3>Mr. Felix</h3>
                <div className="info-group">
                    <img src="../images/phone.png" alt="" />
                    <p>(111) 123-45</p>
                </div>
                <div className="info-group">
                    <img src="../images/mail.icon.png" alt="" />
                    <p>fel@hotmail.com</p>
                </div>
            </div>

            <div className="contact-card">
                <img src={kissa2} alt="kissan kuva" />
                <h3>Fluffy</h3>
                <div className="info-group">
                    <img src="../images/phone.png" alt="" />
                    <p>(222) 123-45</p>
                </div>
                <div className="info-group">
                    <img src="../images/mail.icon.png" alt="" />
                    <p>fluf@hotmail.com</p>
                </div>
            </div>

            <div className="contact-card">
                <img src={kissa3} alt="kissan kuva" />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="../images/phone.png" alt="" />
                    <p>(333) 123-45</p>
                </div>
                <div className="info-group">
                    <img src="../images/mail.icon.png" alt="" />
                    <p>whisk@hotmail.com</p>
                </div>
            </div>

            <div className="contact-card">
                <img src={kissa4} alt="kissan kuva" />
                <h3>Herra Pumpkin</h3>
                <div className="info-group">
                    <img src="../images/phone.png" alt="" />
                    <p>(444) 123-45</p>
                </div>
                <div className="info-group">
                    <img src="../images/mail.icon.png" alt="" />
                    <p>pump@hotmail.com</p>
                </div>
            </div>


        </div>
    )
}
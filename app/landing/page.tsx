import Home from "./components/sections/Home";
import Membership from "./components/sections/Membership";
import Contactus from "./components/sections/Contactus";
import ContactForm from "./components/templates/emailjscontact";

export default function PageLanding() {
	return (
		<>
			<Home />
			<Membership />
			<Contactus />
			<ContactForm/>
		</>
	);
}

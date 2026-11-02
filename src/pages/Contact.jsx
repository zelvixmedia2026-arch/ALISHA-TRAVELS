import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Phone,
  MapPin,
  MessageCircle,
  Plane,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "918151843165";

function Contact() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "2",
    vehicle: "",
    requirements: "",
    tour: searchParams.get("tour") || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello Alisha Travels Mangalore!",
      "",
      "I would like to enquire about a booking.",
      "",
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Pickup location: ${form.pickup}`,
      `Destination: ${form.destination || "Not decided"}`,
      `Travel date: ${form.date || "To be confirmed"}`,
      `Pickup time: ${form.time || "To be confirmed"}`,
      `Passengers: ${form.passengers}`,
      `Vehicle preference: ${form.vehicle || "Please suggest"}`,
      `Tour/package: ${form.tour || "Not specified"}`,
      `Additional requirements: ${form.requirements || "None"}`,
      "",
      "Please confirm availability and quotation.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">WE'RE HERE TO HELP</span>
          <h1>Book Your Taxi</h1>
          <p>
            Share your journey details to enquire about vehicle availability
            and pricing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <span className="eyebrow">CONTACT ALISHA TRAVELS</span>
            <h2>Let's Get Your Journey Planned</h2>

            <p>
              Fill out the booking enquiry form. When you submit it,
              WhatsApp will open with your details ready to send.
            </p>

            <a className="contact-method" href="tel:+918151843165">
              <span className="contact-method-icon"><Phone /></span>
              <span>
                <small>Call us</small>
                <strong>+91 81518 43165</strong>
              </span>
            </a>

            <a
              className="contact-method"
              href="https://wa.me/918151843165"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-method-icon"><MessageCircle /></span>
              <span>
                <small>WhatsApp booking</small>
                <strong>Chat with Alisha Travels</strong>
              </span>
            </a>

            <div className="contact-method">
              <span className="contact-method-icon"><MapPin /></span>
              <span>
                <small>Service location</small>
                <strong>Mangalore, Karnataka, India</strong>
              </span>
            </div>

            <div className="contact-note">
              <Plane size={22} />
              <p>
                Need an airport transfer? Include your flight arrival details
                in the additional requirements field.
              </p>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <h2>Booking Enquiry</h2>
              <p>Fields marked * are required.</p>
            </div>

            <div className="form-grid">
              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Mobile Number *
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{7,20}"
                  required
                />
              </label>

              <label>
                Pickup Location *
                <input
                  type="text"
                  name="pickup"
                  value={form.pickup}
                  onChange={handleChange}
                  placeholder="Where should we pick you up?"
                  required
                />
              </label>

              <label>
                Destination
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Where are you going?"
                />
              </label>

              <label>
                Travel Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toLocaleDateString("en-CA")}
                />
              </label>

              <label>
                Pickup Time
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </label>

              <label>
                Number of Passengers
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                >
                  {Array.from({ length: 35 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "passenger" : "passengers"}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Vehicle Preference
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                >
                  <option value="">Please suggest a vehicle</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Hyundai Exter / Compact SUV">
                    Hyundai Exter / Compact SUV
                  </option>
                  <option value="Family Car / SUV">Family Car / SUV</option>
                  <option value="Tempo Traveller">Tempo Traveller</option>
                  <option value="Air-conditioned bus">
                    Air-conditioned bus
                  </option>
                </select>
              </label>

              <label className="full-width">
                Tour Package (Optional)
                <input
                  type="text"
                  name="tour"
                  value={form.tour}
                  onChange={handleChange}
                  placeholder="Temple tour, beach trip, sightseeing..."
                />
              </label>

              <label className="full-width">
                Additional Requirements
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Flight details, stops, luggage, or other requirements"
                  rows="4"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Send Booking Enquiry <Send size={18} />
            </button>

            <p className="form-disclaimer">
              Submitting opens WhatsApp. Your enquiry is sent only after
              you review and send the message there.
            </p>
          </form>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR LOCATION</span>
            <h2>Mangalore, Karnataka</h2>
            <p>Explore the Mangalore area on Google Maps.</p>
          </div>

          <div className="map-frame">
            <iframe
              title="Map of Mangalore, Karnataka"
              src="https://maps.google.com/maps?q=Mangalore%2C%20Karnataka%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="map-note">
            This map shows Mangalore generally, not a verified business address.
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
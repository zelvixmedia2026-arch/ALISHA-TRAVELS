import { useState } from "react";
import {
  Plane,
  MapPinned,
  Compass,
  Users,
  ArrowRight,
  ShieldCheck,
  Clock,
  MessageCircle,
  CarFront,
  Bus,
  Phone,
  Send,
  CalendarDays,
  MapPin,
} from "lucide-react";

const WHATSAPP_NUMBER = "918151843165";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    text: "Convenient airport pickup and drop services to and from Mangalore International Airport.",
  },
  {
    icon: MapPinned,
    title: "Local Taxi Service",
    text: "Plan local rides around Mangalore for errands, appointments, shopping and sightseeing.",
  },
  {
    icon: Compass,
    title: "Outstation Travel",
    text: "Enquire about trips to Udupi, Manipal, Bekal and other destinations.",
  },
  {
    icon: MapPin,
    title: "Temple Tours",
    text: "Plan visits to temples and spiritual destinations across coastal Karnataka.",
  },
  {
    icon: Users,
    title: "Family & Group Travel",
    text: "Explore transport options for families, groups, sightseeing and special occasions.",
  },
  {
    icon: Bus,
    title: "Custom Tour Packages",
    text: "Discuss customised beach trips, sightseeing routes and multi-stop journeys.",
  },
];

const vehicles = [
  {
    name: "Hatchback",
    description: "A compact option for everyday city travel.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Compact SUV",
    description:
      "Compact SUV options, including Hyundai Exter, subject to availability.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Family Car / SUV",
    description: "Vehicle options for family outings and longer journeys.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tempo Traveller",
    description: "Group travel options, subject to availability.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "AC Bus",
    description: "Enquire about group transport options, including buses up to 35 seats.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
  },
];

const tours = [
  {
    title: "Coastal Karnataka",
    places: "Mangalore · Udupi · Malpe",
    description:
      "Plan a coastal trip featuring beaches, local attractions and scenic stops.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Temple Tours",
    places: "Dakshina Kannada · Coastal Karnataka",
    description:
      "Discuss a temple itinerary based on your preferred destinations and schedule.",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Nature & Sightseeing",
    places: "Beaches · Nature · Local attractions",
    description:
      "Plan a sightseeing trip with stops selected around your interests.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85",
  },
];

function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    passengers: "2",
    vehicle: "Any suitable vehicle",
    requirements: "",
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  function updateForm(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleBooking(event) {
    event.preventDefault();

    const message = [
      "Hello Alisha Travels Mangalore!",
      "",
      "I would like to enquire about a trip.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup: ${form.pickup}`,
      `Destination: ${form.destination}`,
      `Travel Date: ${form.date || "Flexible"}`,
      `Travel Time: ${form.time || "Not specified"}`,
      `Passengers: ${form.passengers}`,
      `Vehicle Preference: ${form.vehicle}`,
      `Additional Requirements: ${form.requirements || "None"}`,
      "",
      "Please confirm availability and pricing.",
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function chooseVehicle(vehicleName) {
    setForm((previous) => ({
      ...previous,
      vehicle: vehicleName,
    }));
  }

  function chooseTour(tourName) {
    setForm((previous) => ({
      ...previous,
      requirements: `I am interested in the ${tourName} tour. Please share available options.`,
    }));
  }

  const navLinks = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Our Fleet", "#fleet"],
    ["Tour Packages", "#tours"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow">YOUR JOURNEY STARTS HERE</span>

          <h1>
            ALISHA TRAVELS
            <span>MANGALORE</span>
          </h1>

          <h2>Your Travel Partner in Mangalore</h2>

          <p>
            Comfortable rides, convenient travel arrangements and
            vehicle options for every kind of journey.
          </p>

          <div className="hero-buttons">
            <a href="#booking" className="btn btn-gold">
              Book Your Taxi <ArrowRight size={18} />
            </a>

            <a href="tel:+918151843165" className="btn btn-white">
              <Phone size={17} /> Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="hero-note">
            <ShieldCheck size={18} />
            Airport Transfers · Local Trips · Outstation Travel
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <Plane />
            <span>Airport Transfers</span>
          </div>
          <div>
            <MapPinned />
            <span>Outstation Travel</span>
          </div>
          <div>
            <Clock />
            <span>Advance Enquiries</span>
          </div>
          <div>
            <Users />
            <span>Group Travel Options</span>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="section booking-section" id="booking">
        <div className="container booking-layout">
          <div className="booking-intro">
            <span className="eyebrow">PLAN YOUR JOURNEY</span>
            <h2>Where would you like to go?</h2>
            <p>
              Share your travel details and send an enquiry directly to
              Alisha Travels through WhatsApp.
            </p>

            <div className="booking-contact">
              <span className="booking-contact-icon">
                <Phone size={22} />
              </span>
              <div>
                <small>Prefer to call?</small>
                <a href="tel:+918151843165">+91 81518 43165</a>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleBooking}>
            <div className="booking-form-heading">
              <CalendarDays size={25} />
              <div>
                <span className="eyebrow">TRIP ENQUIRY</span>
                <h3>Tell us about your trip</h3>
              </div>
            </div>

            <div className="booking-form-grid">
              <label>
                Your Name *
                <input
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Phone Number *
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Your contact number"
                  autoComplete="tel"
                  pattern="[0-9+\s()-]{7,20}"
                  required
                />
              </label>

              <label>
                Pickup Location *
                <input
                  name="pickup"
                  value={form.pickup}
                  onChange={updateForm}
                  placeholder="Pickup location"
                  required
                />
              </label>

              <label>
                Destination *
                <input
                  name="destination"
                  value={form.destination}
                  onChange={updateForm}
                  placeholder="Where are you going?"
                  required
                />
              </label>

              <label>
                Travel Date
                <input
                  type="date"
                  name="date"
                  min={minDate}
                  value={form.date}
                  onChange={updateForm}
                />
              </label>

              <label>
                Preferred Time
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={updateForm}
                />
              </label>

              <label>
                Passengers
                <select
                  name="passengers"
                  value={form.passengers}
                  onChange={updateForm}
                >
                  {Array.from({ length: 35 }, (_, i) => i + 1).map(
                    (number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "Passenger" : "Passengers"}
                      </option>
                    )
                  )}
                </select>
              </label>

              <label>
                Vehicle Preference
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={updateForm}
                >
                  <option>Any suitable vehicle</option>
                  <option>Hatchback</option>
                  <option>Compact SUV</option>
                  <option>Family Car / SUV</option>
                  <option>Tempo Traveller</option>
                  <option>AC Bus</option>
                </select>
              </label>

              <label className="booking-form-full">
                Additional Requirements
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={updateForm}
                  placeholder="Return journey, sightseeing stops, luggage or other details"
                  rows="3"
                />
              </label>
            </div>

            <button type="submit" className="btn btn-primary booking-submit">
              Send Enquiry on WhatsApp <Send size={17} />
            </button>

            <p className="booking-disclaimer">
              This sends an enquiry, not a confirmed reservation.
              Availability and pricing will be confirmed by Alisha Travels.
            </p>
          </form>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Travel Made More Convenient</h2>
            <p>
              Explore travel services for local journeys, airport transfers,
              group trips and sightseeing.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={27} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>

                <a href="#booking" className="text-link">
                  Enquire Now <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AIRPORT TRANSFERS */}
      <section className="airport-section">
        <div className="container airport-grid">
          <div className="airport-image">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1100&q=85"
              alt="Airplane ready for a journey"
              loading="lazy"
            />

            <div className="image-badge">
              <Plane size={20} />
              Mangalore Airport Transfers
            </div>
          </div>

          <div className="airport-copy">
            <span className="eyebrow">START YOUR JOURNEY RIGHT</span>
            <h2>Airport Transfers Made Simple</h2>
            <p>
              Enquire about airport pickup and drop-off for family trips,
              business travel and personal journeys. Share your arrival
              details when contacting us.
            </p>

            <ul className="check-list">
              <li>Airport pickup and drop enquiries</li>
              <li>Advance booking requests</li>
              <li>Family and business travel options</li>
              <li>Vehicles subject to availability</li>
            </ul>

            <a href="#booking" className="btn btn-primary">
              Enquire About a Transfer <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="section fleet-preview" id="fleet">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">TRAVEL YOUR WAY</span>
            <h2>Explore Our Vehicle Options</h2>
            <p>
              Tell us about your group size and journey to enquire about
              suitable vehicles.
            </p>
          </div>

          <div className="fleet-grid">
            {vehicles.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                />

                <div className="fleet-card-body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>

                  <a
                    href="#booking"
                    className="text-link"
                    onClick={() => chooseVehicle(vehicle.name)}
                  >
                    Enquire About Vehicle <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="fleet-note">
            Vehicle availability depends on your selected date and journey.
            Please enquire to confirm the available options.
          </p>
        </div>
      </section>

      {/* TOUR PACKAGES */}
      <section className="section tours-section" id="tours">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">DISCOVER COASTAL KARNATAKA</span>
            <h2>Ideas for Your Next Journey</h2>
            <p>
              Explore trip ideas and enquire about an itinerary that fits
              your preferred destinations and schedule.
            </p>
          </div>

          <div className="tour-grid">
            {tours.map((tour) => (
              <article className="tour-card" key={tour.title}>
                <div className="tour-image">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                  />
                </div>

                <div className="tour-card-body">
                  <span className="tour-places">
                    <MapPin size={15} /> {tour.places}
                  </span>

                  <h3>{tour.title}</h3>
                  <p>{tour.description}</p>

                  <a
                    href="#booking"
                    className="text-link"
                    onClick={() => chooseTour(tour.title)}
                  >
                    Enquire About This Tour <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="tour-banner">
            <div className="container tour-banner-inner">
              <div>
                <span className="eyebrow">YOUR TRIP, YOUR WAY</span>
                <h2>Have a Different Destination in Mind?</h2>
                <p>
                  Share your preferred stops and ask about a customised trip.
                </p>
              </div>

              <a href="#booking" className="btn btn-gold">
                Plan a Custom Trip <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="booking-cta" id="contact">
        <div className="container booking-cta-inner">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Ready to Plan Your Next Journey?</h2>
            <p>
              Mangalore, Karnataka, India
              <br />
              Call us at +91 81518 43165 or send an enquiry through WhatsApp.
            </p>
          </div>

          <div className="contact-cta-buttons">
            <a href="#booking" className="btn btn-gold">
              Send a Booking Enquiry <ArrowRight size={18} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
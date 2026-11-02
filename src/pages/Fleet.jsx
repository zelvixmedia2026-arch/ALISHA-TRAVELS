import { Link } from "react-router-dom";
import { ArrowRight, Users, MessageCircle } from "lucide-react";

const fleet = [
  {
    name: "Hatchback",
    category: "Compact travel",
    description:
      "A compact vehicle option for everyday journeys and smaller travel groups.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85",
    alt: "Compact passenger car",
    passengers: "Capacity confirmed on enquiry",
  },
  {
    name: "Hyundai Exter & Compact SUVs",
    category: "Compact SUV",
    description:
      "Enquire about compact SUVs for city travel and regional journeys.",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
    alt: "SUV on a road",
    passengers: "Capacity confirmed on enquiry",
  },
  {
    name: "Family Cars & SUVs",
    category: "Family travel",
    description:
      "Ask about suitable car and SUV options for family trips and outstation travel.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    alt: "Passenger vehicle",
    passengers: "Capacity confirmed on enquiry",
  },
  {
    name: "Tempo Traveller",
    category: "Group transportation",
    description:
      "A group travel option for sightseeing, family outings, and tours.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=85",
    alt: "Passenger transport vehicle",
    passengers: "Seating confirmed on enquiry",
  },
  {
    name: "Air-Conditioned Bus",
    category: "Larger groups",
    description:
      "Enquire about air-conditioned bus options for larger group journeys.",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=85",
    alt: "Bus suitable for group travel",
    passengers: "Options up to 35 seats on enquiry",
  },
];

function Fleet() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR VEHICLE OPTIONS</span>
          <h1>Find a Vehicle for Your Journey</h1>
          <p>From compact cars to group transportation, enquire about availability.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE THE FLEET</span>
            <h2>Travel Together, Your Way</h2>
            <p>
              Vehicle models, seating, availability, and pricing should be
              confirmed directly before booking.
            </p>
          </div>

          <div className="fleet-grid fleet-page-grid">
            {fleet.map((vehicle) => (
              <article className="fleet-card" key={vehicle.name}>
                <div className="fleet-image">
                  <img src={vehicle.image} alt={vehicle.alt} loading="lazy" />
                  <span className="fleet-category">{vehicle.category}</span>
                </div>

                <div className="fleet-card-body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.description}</p>

                  <div className="fleet-capacity">
                    <Users size={17} />
                    <span>{vehicle.passengers}</span>
                  </div>

                  <a
                    className="text-link"
                    href={`https://wa.me/918151843165?text=${encodeURIComponent(
                      `Hello Alisha Travels, I would like to enquire about availability and pricing for: ${vehicle.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire About This Vehicle <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="center-button">
            <Link to="/contact" className="btn btn-primary">
              <MessageCircle size={18} /> Request a Booking
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fleet;
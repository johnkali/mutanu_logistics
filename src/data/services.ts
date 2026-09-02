export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: "freight-logistics",
    number: "01",
    title: "Freight & Logistics",
    description:
      "Reliable freight and logistics support tailored to your requirements, with a practical approach to the movement of goods.",
    image: "/images/services/service-freight.jpg",
    imageAlt: "Freight truck transporting goods",
    points: [
      "Road freight support",
      "Regional logistics coordination",
      "Tailored client solutions",
    ],
  },
  {
    id: "customs-clearance",
    number: "02",
    title: "Customs Clearance",
    description:
      "Professional support through customs clearance requirements, helping make the movement of goods as smooth and efficient as possible.",
    image: "/images/services/service-customs.jpg",
    imageAlt: "Customs and logistics operations",
    points: [
      "Customs clearance support",
      "Documentation coordination",
      "Practical guidance",
    ],
  },
  {
    id: "logistics-support",
    number: "03",
    title: "Logistics Support",
    description:
      "End-to-end support designed around individual client requirements, from planning and coordination through to delivery.",
    image: "/images/services/service-logistics.jpg",
    imageAlt: "Logistics personnel coordinating goods",
    points: [
      "Individualised support",
      "Clear communication",
      "Reliable coordination",
    ],
  },
];

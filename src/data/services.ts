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
    title: "Freight Forwarding",
    description:
      "Our premium freight solutions leverage optimal routes across air cargo, ocean shipping, and strategic overland transport. \
      Through verified partnerships, your assets are seamlessly managed from dispatch to delivery.",
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
      "We clear customs friction through thorough paperwork oversight, local tax optimization, and deep agency ties in East and Southern Africa. \
      Secure peace of mind knowing all compliance details are locked in.",
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
      "From temperature-controlled secure warehousing to priority last-mile secure courier services, we build the support structure your operations require. \
      Our services scale instantly to tackle sudden changes in shipment urgency.",
    image: "/images/services/service-logistics.jpg",
    imageAlt: "Logistics personnel coordinating goods",
    points: [
      "Individualised support",
      "Clear communication",
      "Reliable coordination",
    ],
  },
];

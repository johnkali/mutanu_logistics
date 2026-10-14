
export interface ClientReference {
  id: string;
  organization: string;
  title: string;
  description: string;
  pdfUrl: string;
  date?: string;
}

export const clientReferences: ClientReference[] = [
  {
    id: "ifc",
    organization: "International Finance Corporation",
    title: "Freight & Vehicle Shipping",
    description:
      "A client reference recognising Mutanu's freight and logistics services for the shipment of a personal motor vehicle.",
    pdfUrl: "/documents/references/ifc-world-bank-reference.pdf",
  },
  {
    id: "sanctuary-olan​​ana",
    organization: "Sanctuary Olonana",
    title: "Freight & Logistics Services",
    description:
      "A reference highlighting the handling of goods and the reliability of Mutanu's logistics services.",
    pdfUrl: "/documents/references/sanctuary-olan​​ana-reference.pdf",
    date: "26 August 2014",
  },
  {
    id: "virgin-limited-edition",
    organization: "Virgin Limited Edition",
    title: "International Freight Coordination",
    description:
      "A reference concerning international product shipments from South Africa to Kenya and customs coordination.",
    pdfUrl: "/documents/references/virgin-limited-edition-reference.pdf",
  },
  {
    id: "iata",
    organization: "IATA",
    title: "International Project Logistics",
    description:
      "A reference relating to the coordination and delivery of solar project equipment for a project in the Democratic Republic of Congo.",
    pdfUrl: "/documents/references/iata-reference.pdf",
    date: "28 August 2014",
  },
  {
    id: "kenya-high-commission",
    organization: "High Commission of the Republic of Kenya",
    title: "Shipping & Relocation Support",
    description:
      "A reference concerning the packing, shipping and airfreighting of personal effects and vehicles for returning officers.",
    pdfUrl: "/documents/references/kenya-high-commission-reference.pdf",
  },
];

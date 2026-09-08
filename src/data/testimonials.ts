export interface Testimonial {
  quote: string;
  organization: string;
  person?: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mutanu Holdings provided highly satisfactory freight and logistics services for a personal motor vehicle valued at over KSh 4 million. We would gladly recommend their services to potential clients.",
    organization: "International Finance Corporation",
    person: "Catherine Masinde",
    role: "World Bank Group",
  },

  {
    quote:
      "Emmanuel Mbevi has successfully handled goods for Sanctuary Olonana worth millions of shillings since 2008. We have found him to be efficient and reliable and are happy to recommend his services.",
    organization: "Sanctuary Olonana",
    person: "Ege Waitara",
    role: "Assistant Financial Controller",
  },

  {
    quote:
      "Emmanuel Mbevi has handled shipments of Africology products from South Africa to Kenya for us. These were substantial orders requiring customs coordination, which he worked tirelessly to manage.",
    organization: "Virgin Limited Edition",
    person: "Helen Cain",
    role: "Group Spa Manager",
  },

  {
    quote:
      "IATA trusted Mutanu with equipment valued at more than R1.2 million. The deliveries were completed within the promised timelines and at competitive costs under the circumstances.",
    organization: "IATA",
    person: "Regional Director",
    role: "Africa & Indian Ocean",
  },

  {
    quote:
      "Emmanuel Mbevi packed, shipped and airfreighted personal effects and vehicles for returning officers of our Mission over several years. The Mission was satisfied with his performance.",
    organization: "High Commission of the Republic of Kenya",
    person: "For the High Commissioner",
  },
];

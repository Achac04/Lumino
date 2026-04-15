export type LampCategory = "pendant" | "grand" | "petite";

export type Product = {
  id: string;
  name: string;
  category: LampCategory;
  price: number;
  image: string;
  /** Optional “lit” treatment uses same image with warm overlay on hover */
  accent?: string;
};

export const categoryLabels: Record<LampCategory, string> = {
  pendant: "Pendants (Roof)",
  grand: "Grand Statues (Tall / Floor)",
  petite: "Petite Accents (Desk / Nightstand)",
};

export const products: Product[] = [
  {
    id: "atlas-floor",
    name: "Atlas Restored Floor Standard",
    category: "grand",
    price: 2840,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "oriel-pendant",
    name: "Oriel Pleated Silk Pendant",
    category: "pendant",
    price: 920,
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "nocturne-desk",
    name: "Nocturne Bronze Desk Lamp",
    category: "petite",
    price: 640,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "velum-night",
    name: "Velum Frosted Glass Night Lamp",
    category: "petite",
    price: 510,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "lyra-chandelier",
    name: "Lyra Hand-Blown Cluster",
    category: "pendant",
    price: 3620,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "solstice-torchiere",
    name: "Solstice Torchière Revival",
    category: "grand",
    price: 1980,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
}

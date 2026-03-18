import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Weight Loss Tea",
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1760022460/Untitled_design_10_mbhvp9.jpg",
    price: 4500.00,
    category: "Wellness Tea",
    shortDescription: "A tantalizing blend to help you embrace a healthier lifestyle with every flavorful cup.",
    details: "Introducing our irresistible Weight Loss Tea, a tantalizing blend of Green Tea, Cinnamon, and Hibiscus. Each sip of the tea helps you shed unwanted pounds naturally.",
    ingredients: ["Green Tea", "Cinnamon", "Hibiscus"],
    howToUse: "Pour boiled water over a tea bag and allow to steep for 5 minutes. Allow a longer steeping time for a strong flavor. If you are pregnant, please consult your doctor before consuming."
  },
  {
    id: 2,
    name: "Digestion Tea",
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1760022799/Untitled_design_1_upggii.jpg",
    price: 3900.00,
    category: "Herbal Tea",
    shortDescription: "Revitalize your digestive system with a soothing blend that leaves you feeling refreshed and rejuvenated.",
    details: "Revitalize your digestive system with our soothing Digestion Tea made with a blend of peppermint, fennel, and ginger. Experience the natural synergy of these ingredients as they gently calm and support your digestive tract.",
    ingredients: ["Peppermint", "Fennel", "Ginger"],
    howToUse: "Pour boiled water over a tea bag and allow to steep for 5 minutes. Allow a longer steeping time for a strong flavor. If you are pregnant, please consult your doctor before consuming herbal teas."
  },
  {
    id: 3,
    name: "Tropical Relaxation Tea",
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1760022803/Untitled_design_2_khadtu.jpg",
    price: 4200.00,
    category: "Black Tea Blend",
    shortDescription: "Discover tranquility in every sip with this refreshing escape to tropical bliss.",
    details: "Blending Ceylon black tea, lemongrass, and ginger, it's a refreshing escape to tropical bliss. Discover tranquility in every sip with our Tropical Relaxation Tea.",
    ingredients: ["Ceylon black tea", "Ginger", "Lemongrass"],
    howToUse: "Pour boiled water over a tea bag and allow to steep for 5 minutes. Allow a longer steeping time for a strong flavor. If you are pregnant, please consult your doctor before consuming."
  },
  {
    id: 4,
    name: "Mint Green Tea",
    image: "https://res.cloudinary.com/dnfbik3if/image/upload/v1760022810/Untitled_design_qj7gbi.jpg",
    price: 3600.00,
    category: "Green Tea",
    shortDescription: "A refreshing and flavorful blend that offers a multitude of health benefits.",
    details: "Ancient Nutra's Ceylon Green Tea infused with Mint is a refreshing blend that helps to reduce stress, aid in digestion, and promote better sleep. It can be enjoyed hot or cold.",
    ingredients: ["100% Mint", "Green Tea"],
    howToUse: "Steep a tea bag in hot water for 3-5 minutes. For iced tea, steep in hot water, then pour over ice. Add lemon or honey for extra flavor."
  }
];
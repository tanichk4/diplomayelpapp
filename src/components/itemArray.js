import BurgerWanted from "../assets/BurgerWanted.svg";
import ButterChicken from "../assets/ButterChicken.svg";
import HiSalmon from "../assets/HiSalmon.svg";
import GreenMojito from "../assets/mojito.png";
import SweetMargarita from "../assets/margarita.png"
import CosmoCosmopolitan from "../assets/cosmopolitan.png"
import OldFashioned from "../assets/old-fashioned.png"
import PinaColada from "../assets/pina-colada.png"
import ClassicCheeseburger from "../assets/classic-cheeseburger.png"
import BBQBaconBurger from "../assets/bbqbaconburger.png"
import HawaiianBurger from "../assets/hawaiianburger.png"
import MushroomSwissBurger from "../assets/mushroomswissburger.png"
import VeggieBurger from "../assets/veggieburger.png"
import MargheritaPizza from "../assets/margheritapizza.png"
import PepperoniPizza from "../assets/pepperonipizza.png"
import BBQChickenPizza from "../assets/bbqchickenpizza.png"
import VegetarianPizza from "../assets/veggiepizza.png"
import HawaiianPizza from "../assets/hawaiianpizza.png"
import CaesarSalad from "../assets/caesarsalad.png"
import GreekSalad from "../assets/greeksalad.png"
import CapreseSalad from "../assets/capresesalad.png"
import CobbSalad from "../assets/cobbsalad.png"
import AsianSesameChickenSalad from "../assets/sesamechickensalad.png"
import GlazedDonut from "../assets/glazeddonut.png"
import ChocolateDonut from "../assets/chocolatedonut.png"
import JellyDonut from "../assets/jellydonut.png"
import MapleBaconDonut from "../assets/maplebacondonut.png"
import MatchaGreenTeaDonut from "../assets/matchagreendonut.png"
import StrawberryLemonade from "../assets/strawberrylemonade.png"
import IcedCaramelMacchiato from "../assets/icedcaramelmacchiato.png"

export const itemArray = [
  {
    type: "burger",
    image: BurgerWanted,
    title: "Burger Wanted",
    description:
      "Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade",
    price: "29",
  },
  {
    type: "drinks",
    image: GreenMojito,
    title: "Green Mojito",
    description: "Rum, fresh lime juice, sugar, mint leaves, soda water, ice..",
    price: "19",
  },
  {
    type: "drinks",
    image: SweetMargarita,
    title: "Sweet Margarita",
    description: "Tequila, lime juice, triple sec, salt (for rimming), ice.",
    price: "14",
  },
  {
    type: "drinks",
    image: CosmoCosmopolitan,
    title: "Cosmo Cosmopolitan",
    description: "Vodka, cranberry juice, lime juice, triple sec, ice.",
    price: "36",
  },
  {
    type: "drinks",
    image: OldFashioned,
    title: "Old Fashioned",
    description: "Bourbon or rye whiskey, sugar, bitters, orange peel, ice.",
    price: "37",
  },
  {
    type: "drinks",
    image: PinaColada,
    title: "Pina Colada",
    description: "Rum, coconut cream, pineapple juice, lime juice, ice.",
    price: "35",
  },
  {
    type: "burger",
    image: ClassicCheeseburger,
    title: "Classic Cheeseburger",
    description:
      "Ground beef, cheese, lettuce, tomato, onion, pickles, burger bun.",
    price: "55",
  },
  {
    type: "burger",
    image: BBQBaconBurger,
    title: "BBQ Bacon Burger",
    description:
      "Ground beef, bacon, barbecue sauce, cheddar cheese, lettuce, tomato, burger bun.",
    price: "63",
  },
  {
    type: "burger",
    image: HawaiianBurger,
    title: "Hawaiian Burger",
    description:
      "Ground beef, grilled pineapple, ham, teriyaki sauce, lettuce, tomato, burger bun.",
    price: "57",
  },
  {
    type: "burger",
    image: MushroomSwissBurger,
    title: "Mushroom Swiss Burger",
    description:
      "Ground beef, Swiss cheese, sautéed mushrooms, caramelized onions, lettuce, burger bun.",
    price: "42",
  },
  {
    type: "burger",
    image: VeggieBurger,
    title: " Veggie Burger",
    description:
      "Veggie patty (made from vegetables, beans, or grains), lettuce, tomato, onion, pickles, burger bun.",
    price: "55",
  },
  {
    type: "pizza",
    image: MargheritaPizza,
    title: " Margherita Pizza",
    description:
      "Pizza dough, tomato sauce, mozzarella cheese, fresh basil leaves, olive oil.",
    price: "25",
  },
  {
    type: "pizza",
    image: PepperoniPizza,
    title: "Pepperoni Pizza",
    description:
      "Pizza dough, tomato sauce, mozzarella cheese, pepperoni slices, oregano.",
    price: "26",
  },
  {
    type: "pizza",
    image: BBQChickenPizza,
    title: "BBQ Chicken Pizza",
    description:
      "Pizza dough, barbecue sauce, cooked chicken, red onions, mozzarella cheese, cilantro.",
    price: "43",
  },
  {
    type: "pizza",
    image: VegetarianPizza,
    title: "Vegetarian Pizza",
    description:
      "Pizza dough, tomato sauce, bell peppers, mushrooms, black olives, onions, mozzarella cheese.",
    price: "41",
  },
  {
    type: "pizza",
    image: HawaiianPizza,
    title: "Hawaiian Pizza",
    description:
      "Pizza dough, tomato sauce, ham, pineapple chunks, mozzarella cheese.",
    price: "53",
  },
  {
    type: "salads",
    image: CaesarSalad,
    title: "Caesar Salad",
    description: "Romaine lettuce, Caesar dressing, Parmesan cheese, croutons.",
    price: "23",
  },
  {
    type: "salads",
    image: GreekSalad,
    title: "Greek Salad",
    description:
      " Lettuce, tomatoes, cucumbers, red onions, Kalamata olives, feta cheese, olive oil, lemon juice.",
    price: "32",
  },
  {
    type: "salads",
    image: CapreseSalad,
    title: "Caprese Salad",
    description:
      "Fresh mozzarella cheese, tomatoes, fresh basil leaves, balsamic glaze, olive oil.",
    price: "18",
  },
  {
    type: "salads",
    image: CobbSalad,
    title: "Cobb Salad",
    description:
      "Lettuce, chicken breast, bacon, hard-boiled eggs, avocado, tomatoes, blue cheese, ranch dressing.",
    price: "32",
  },
  {
    type: "salads",
    image: AsianSesameChickenSalad,
    title: "Asian Sesame Chicken Salad",
    description:
      "Lettuce, grilled chicken, mandarin oranges, sliced almonds, crispy noodles, sesame ginger dressing.",
    price: "41",
  },
  {
    type: "donut",
    image: GlazedDonut,
    title: "Glazed Donut",
    description:
      "Flour, sugar, yeast, milk, butter, vanilla extract, powdered sugar (for glaze).",
    price: "10",
  },
  {
    type: "donut",
    image: ChocolateDonut,
    title: "Chocolate Donut",
    description:
      "Flour, sugar, cocoa powder, milk, butter, vanilla extract, powdered sugar (for glaze).",
    price: "12",
  },
  {
    type: "donut",
    image: JellyDonut,
    title: "Jelly Donut",
    description:
      "Flour, sugar, yeast, milk, butter, vanilla extract, jelly or jam filling, powdered sugar (for dusting).",
    price: "13",
  },
  {
    type: "donut",
    image: MapleBaconDonut,
    title: "Maple Bacon Donut",
    description:
      "Flour, sugar, yeast, milk, butter, vanilla extract, maple syrup glaze, cooked bacon (crumbled).",
    price: "18",
  },
  {
    type: "donut",
    image: MatchaGreenTeaDonut,
    title: "Matcha Green Tea Donut",
    description:
      "Flour, sugar, matcha green tea powder, milk, butter, vanilla extract, powdered sugar (for dusting).",
    price: "24",
  },
  {
    type: "drinks",
    image: StrawberryLemonade,
    title: "Strawberry Lemonade",
    description: "Fresh strawberries, lemon juice, sugar, water, ice.",
    price: "8",
  },
  {
    type: "drinks",
    image: IcedCaramelMacchiato,
    title: "Iced Caramel Macchiato",
    description: "Espresso, milk, caramel syrup, vanilla syrup, ice.",
    price: "38",
  },
];
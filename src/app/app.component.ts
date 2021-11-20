import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operators = ["12F", "Aak", "Absinthe", "Aciddrop", "Adnachiel", "Akafuyu", "Ambriel", "Amiya", "Amiya (Guard)", "Andreana", "Angelina", "Ansel", "Aosta", "April", "Archetto", "Arene", "Asbestos", "Ash", "Astesia", "Ayerscarpe", "Bagpipe", "Beagle", "Beanstalk", "Beehunter", "Beeswax", "Bibeak", "Bison", "Blaze", "Blemishine", "Blitz", "Blue Poison", "Breeze", "Broca", "Bubble", "Cardigan", "Castle-3", "Catapult", "Ceobe", "Ceylon", "Ch'en", "Chiave", "Click", "Cliffheart", "Conviction", "Courier", "Croissant", "Cuora", "Cutter", "Deepcolor", "Dobermann", "Dur-nar", "Durin", "Dusk", "Earthspirit", "Elysium", "Estelle", "Ethan", "Eunectes", "Executor", "Exusiai", "Eyjafjalla", "Fang", "FEater", "Firewatch", "Flamebringer", "Flint", "Folinic", "Franka", "Frost", "Frostleaf", "Gavial", "Gitano", "Gladiia", "Glaucus", "Grani", "Gravel", "GreyThroat", "Greyy", "Gummy", "Haze", "Heavyrain", "Hellagur", "Hibiscus", "Hoshiguma", "Hung", "Ifrit", "Indra", "Iris", "Istina", "Jackie", "Jaye", "Jessica", "Kafka", "Kal'tsit", "Kroos", "Lancet-2", "Lappland", "Lava", "Lava the Purgatory", "Leizi", "Leonhardt", "Liskarm", "Magallan", "Manticore", "Matoimaru", "Matterhorn", "May", "Mayer", "Melantha", "Meteor", "Meteorite", "Midnight", "Mint", "Mostima", "Mountain", "Mousse", "Mr. Nothing", "Mudrock", "Myrrh", "Myrtle", "Nearl", "Nian", "Nightingale", "Nightmare", "Noir Corne", "Orchid", "Passenger", "Perfumer", "Phantom", "Pinecone", "Platinum", "Plume", "Podenco", "Popukar", "Pramanix", "Projekt Red", "Provence", "Ptilopsis", "Purestream", "Rangers", "Reed", "Robin", "Rope", "Rosa", "Rosmontis", "Saga", "Saria", "Savage", "Scavenger", "Scene", "Schwarz", "Sesa", "Shamare", "Shaw", "Shining", "ShiraYuki", "Sideroca", "Siege", "Silence", "SilverAsh", "Skadi", "Skadi the Corrupting Heart", "Skyfire", "Snowsant", "Sora", "Specter", "Spot", "Steward", "Surtr", "Sussurro", "Suzuran", "Swire", "Tachanka", "Texas"
  , "Thorns", "THRM-EX", "Toddifons", "Tomimi", "Tsukinogi", "Tuye", "Utage", "Vanilla", "Vermeil", "Vigna", "Vulcan", "W", "Waai Fu", "Warfarin", "Weedy", "Whislash", "Whisperain", "Yato", "Zima"];

  chosenOperator = this.operators[Math.floor(Math.random() * this.operators.length)];

  title = 'arknightsproject';

  
}

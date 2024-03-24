import React, { useEffect, useState, Component } from "react"
import DrawingContent from './DrawingContent'
import SculptingContent from './SculptingContent'

// Photoshop
import PsBloodborne from '../../../images/Art/Drawings/Photoshop/bloodborne 17.png'
import PsErShrek from '../../../images/Art/Drawings/Photoshop/BeachShrekER2.png'
import PsBlueDemon from '../../../images/Art/Drawings/Photoshop/BlueDemonPractice.png'
import PsErShreakAlt from '../../../images/Art/Drawings/Photoshop/EldenRingBeachVibes.png'
import PsBog from '../../../images/Art/Drawings/Photoshop/bogdandoff.png'
import PsChimp from '../../../images/Art/Drawings/Photoshop/chimp.png'
import PsStrahd from '../../../images/Art/Drawings/Photoshop/strahdlads.png'
import PsHands from '../../../images/Art/Drawings/Photoshop/handsPrint3.jpg'
import PsBogGreek from '../../../images/Art/Drawings/Photoshop/igor_and_grichka_1.png'
import PsJeb from '../../../images/Art/Drawings/Photoshop/jebcowboy.png'
import PsMustang from '../../../images/Art/Drawings/Photoshop/mustang neon.png'
import PsCowbout from '../../../images/Art/Drawings/Photoshop/online cowboy.png'
import PsPongo from '../../../images/Art/Drawings/Photoshop/pongoColumbiaGroovy.jpg'
import PsPongoB from '../../../images/Art/Drawings/Photoshop/pongoColumbiaGroovy1.jpg'
import PsToshiro from '../../../images/Art/Drawings/Photoshop/toshiro crop.png'

// Sketchbook
import Office from '../../../images/Art/Drawings/Sketchbook/another day in the office.png'
import Beast from '../../../images/Art/Drawings/Sketchbook/beast.png'
import BogJojo from '../../../images/Art/Drawings/Sketchbook/bog jojo.png'
import BogPrac from '../../../images/Art/Drawings/Sketchbook/bog prac.png'
import Booger from '../../../images/Art/Drawings/Sketchbook/booger.png'
import Bug from '../../../images/Art/Drawings/Sketchbook/bug.png'
import Cafe from '../../../images/Art/Drawings/Sketchbook/cafe.png'
import DeepWoods from '../../../images/Art/Drawings/Sketchbook/DeepWoods.jpg'
import Donald from '../../../images/Art/Drawings/Sketchbook/donald.png'
import Drugs from '../../../images/Art/Drawings/Sketchbook/drugs.png'
import Goblino from '../../../images/Art/Drawings/Sketchbook/el goblino.png'
import Goblinos from '../../../images/Art/Drawings/Sketchbook/el goblinos.png'
import Eyesight from '../../../images/Art/Drawings/Sketchbook/eyesight.png'
import FishWar from '../../../images/Art/Drawings/Sketchbook/fish war.png'
import Web from '../../../images/Art/Drawings/Sketchbook/fun on the web.png'
import FunkGoblin from '../../../images/Art/Drawings/Sketchbook/funky goblin.png'
import GoblinFolly from '../../../images/Art/Drawings/Sketchbook/GoblinsFolly.jpg'
import GreenTotem from '../../../images/Art/Drawings/Sketchbook/GreenTotem.jpg'
import HankPrac from '../../../images/Art/Drawings/Sketchbook/hank prac.png'
import Idk from '../../../images/Art/Drawings/Sketchbook/idk what this is.png'
import Incin from '../../../images/Art/Drawings/Sketchbook/incineroar.png'
import KingEmail from '../../../images/Art/Drawings/Sketchbook/kings email.png'
import KK from '../../../images/Art/Drawings/Sketchbook/kk.png'
import Knight from '../../../images/Art/Drawings/Sketchbook/knight.png'
import Screens from '../../../images/Art/Drawings/Sketchbook/life behind a screen.png'
import Islands from '../../../images/Art/Drawings/Sketchbook/little islands.png'
import MessKid from '../../../images/Art/Drawings/Sketchbook/messy kid.png'
import Nakes from '../../../images/Art/Drawings/Sketchbook/nakes.png'
import Nasty from '../../../images/Art/Drawings/Sketchbook/nasty lil face.png'
import NewShape from '../../../images/Art/Drawings/Sketchbook/NewShapeJustDropped.jpg'
import NewShapeAlt from '../../../images/Art/Drawings/Sketchbook/NewShapeJustDropped1.jpg'
import OldGuts from '../../../images/Art/Drawings/Sketchbook/old guts.jpg'
import PadGuts from '../../../images/Art/Drawings/Sketchbook/paddington guts.png'
import PunishedHank from '../../../images/Art/Drawings/Sketchbook/punished hank.png'
import Quatch from '../../../images/Art/Drawings/Sketchbook/Quatch.jpg'
import QuatchAlt from '../../../images/Art/Drawings/Sketchbook/Quatch1.jpg'
import Shumashh from '../../../images/Art/Drawings/Sketchbook/Shumash.jpg'
import Smiles from '../../../images/Art/Drawings/Sketchbook/smiles.png'
import Smoke from '../../../images/Art/Drawings/Sketchbook/smoke.png'
import Silly from '../../../images/Art/Drawings/Sketchbook/somethin kinda silly.png'
import Something from '../../../images/Art/Drawings/Sketchbook/something.png'
import Coding from '../../../images/Art/Drawings/Sketchbook/spent the day coding.png'
import Gov from '../../../images/Art/Drawings/Sketchbook/support your local government.png'
import Trailer from '../../../images/Art/Drawings/Sketchbook/trailer park gaurdian.png'
import Traveler from '../../../images/Art/Drawings/Sketchbook/traveler.png'
import Wake from '../../../images/Art/Drawings/Sketchbook/wake up.png'
import Yojimbo from '../../../images/Art/Drawings/Sketchbook/Yojimbo.jpg'


// Sketchbook 3
import Fragile from '../../../images/Art/Drawings/Sketchbook3/8fragile.jpg'
import FragileAlt from '../../../images/Art/Drawings/Sketchbook3/8fragileAlt.jpg'
import Dragon from '../../../images/Art/Drawings/Sketchbook3/12dragon.jpg'
import DragonAlt from '../../../images/Art/Drawings/Sketchbook3/12dragonAlt.jpg'
import Wild from '../../../images/Art/Drawings/Sketchbook3/16wild.jpg'
import WildAlt from '../../../images/Art/Drawings/Sketchbook3/16wildAlt.jpg'
import Dizzy from '../../../images/Art/Drawings/Sketchbook3/2425dizzy.jpg'
import DizzyAlt from '../../../images/Art/Drawings/Sketchbook3/2425dizzyAlt.jpg'
import Ed from '../../../images/Art/Drawings/Sketchbook3/Ed.jpg'
import EdAlt from '../../../images/Art/Drawings/Sketchbook3/EdAlt.jpg'
import FunnyBot from '../../../images/Art/Drawings/Sketchbook3/funnyBoty.jpg'
import FunnyBotAlt from '../../../images/Art/Drawings/Sketchbook3/funnyBotyAlt.jpg'
import Robots from '../../../images/Art/Drawings/Sketchbook3/robots.jpg'
import RobotsAlt from '../../../images/Art/Drawings/Sketchbook3/robotsAlt.jpg'

// Crayon
import Duxiu from '../../../images/Art/Drawings/Crayon/1Duxiu.jpg'
import Zhonfa from '../../../images/Art/Drawings/Crayon/2Zhongfa.jpg'
import Gu from '../../../images/Art/Drawings/Crayon/3Gu.jpg'
import Alien from '../../../images/Art/Drawings/Crayon/alein.jpg'
import Baron from '../../../images/Art/Drawings/Crayon/baron.jpg'
import BaronAlt from '../../../images/Art/Drawings/Crayon/baronAlt.jpg'
import Marty from '../../../images/Art/Drawings/Crayon/dunsmireInTheStars.jpg'
import Gek from '../../../images/Art/Drawings/Crayon/gekyume.jpg'
import Gilgamesh from '../../../images/Art/Drawings/Crayon/gilgamesh.jpg'
import GrassKnight from '../../../images/Art/Drawings/Crayon/grassKnight.jpg'
import Jintao from '../../../images/Art/Drawings/Crayon/jintao.jpg'
import NightBeach from '../../../images/Art/Drawings/Crayon/nightBeach.jpg'
import ShapeHills from '../../../images/Art/Drawings/Crayon/shapeOverField.jpg'
import Sleeper from '../../../images/Art/Drawings/Crayon/sleeper.jpg'
import Spelbo from '../../../images/Art/Drawings/Crayon/spelbo.jpg'


// Paintings
import BlueDemon from '../../../images/Art/Paintings/blueDemon.jpg'
import DavidMeltzer from '../../../images/Art/Paintings/davidMeltzer.jpg'
import GnomeSunset from '../../../images/Art/Paintings/gnomeOverTheSound.jpg'
import GoblinChill from '../../../images/Art/Paintings/goblinChill.jpg'
import Outback from '../../../images/Art/Paintings/outback.jpg'
import ShadowMonkey from '../../../images/Art/Paintings/shadowMonkey.jpg'

// Sculptures
import Tumbo from '../../../images/3dModels/Tumbo.glb'
import Pagliombro from '../../../images/3dModels/Dentist.glb'
import Scrimblo from '../../../images/3dModels/Scrimblo.glb'
import Kvagner from '../../../images/3dModels/Floop.glb'
import Shumash from '../../../images/3dModels/Shumash.glb'
import Trungus from '../../../images/3dModels/Trungus1.glb'
import ElJefe from '../../../images/3dModels/El_Jefe1.glb'
import ImageViewer from "./PictureShow.js"

// Blender
import Legs from '../../../images/Art/Models/legs.glb'
import LegsAlt from '../../../images/Art/Models/legsNeon.glb'
import Crab from '../../../images/Art/Models/bairdiCrab.glb'



class ImageObj {
  constructor(image, nightmare, name, text, model) {
    this.image = image;
    this.nightmare = nightmare;
    this.name = name;
    this.text = text;
    this.model = model;
  }
}


class ModelObj {
  constructor(name, model, scale, position, rotation) {
    this.name = name;
    this.model = model;
    this.scale = scale;
    this.position = position;
    this.rotation = rotation;
  }
}

// Sculptures
const TumboObj = new ModelObj('Tumbo', Tumbo, [20, 20, 20]);
const TumboMdl = new ImageObj(Tumbo, null, 'Tumbo', 'It\'s Tumbo!', TumboObj);
const PagliombroObj = new ModelObj('Pagliombro', Pagliombro, [20, 20, 20]);
const PagliombroMdl = new ImageObj(Pagliombro, null, 'Pagliombro', 'Look at Pagliombro!', PagliombroObj);
const ScrimbloObj = new ModelObj('Scrimblo', Scrimblo, [20, 20, 20], [0, 0, 0], [0, 0,Math.PI]);
const ScrimbloMdl = new ImageObj(Scrimblo, null, 'Scrimblo', 'Scrimblo\s here!', ScrimbloObj);
const KvagnerObj = new ModelObj('Kvagner', Kvagner, [20, 20, 20]);
const KvagnerMdl = new ImageObj(Kvagner, null, 'Foxwood', 'Foxwood\'s at it again!', KvagnerObj);
const ShumashObj = new ModelObj('Shumash', Shumash, [20, 20, 20]);
const ShumashMdl = new ImageObj(Shumash, null, 'Shumash', 'What\'s Shumash doing here!', ShumashObj);
const TrungusObj = new ModelObj('Trungus', Trungus, [50, 50, 50], [0, -2, 0]);
const TrungusMdl = new ImageObj(Trungus, null, 'Trungus', 'Trugus is back on the scene!', TrungusObj);
const ElJefeObj = new ModelObj('ElJefe', ElJefe, [35, 35, 35], [0, -2, 0]);
const ElJefeMdl = new ImageObj(ElJefe, null, 'El Jefe', 'This guy\'s clearly the one in charge around here.', ElJefeObj);

// Models
const LegsOj = new ModelObj('Legs', Legs, [.05, .05, .05], [0, 0, 0]);
const LegsAltOj = new ModelObj('Legs', LegsAlt, [.05, .05, .05], [0, 0, 0]);
const LegsMdl = new ImageObj(Legs, LegsAltOj, '40 Legs', 'idk it\'s just 40 legs', LegsOj);
const CrabOj = new ModelObj('Crab', Crab, [.02, .02, .02], [0, 0, 0]);
const CrabMdl = new ImageObj(Crab, null, 'Crab', 'default_enemy.fbx', CrabOj);

// Photoshop
const BloobornePs = new ImageObj(PsBloodborne, null, 'Blugerborne', 'its gamieng, gotta love it')
const EldenShrekPs = new ImageObj(PsErShrek, PsErShreakAlt, 'Shrek in Thought', 'Getting the zweihander on that beach was the best part of Elden Ring')
const BlueDemonPs = new ImageObj(PsBlueDemon, null, 'Demonio de Azule - practice', 'Wrestling peaked in 60\'s lucha imo')
const JojoBogsPs = new ImageObj(PsBog, null, 'The Call', 'Igor and Grishka probably still live on within cellphones')
const ChimpPs = new ImageObj(PsChimp, null, 'Chimp on Top', 'This is what the Yankees wish they were')
const StrahdLadsPs = new ImageObj(PsStrahd, null, 'Strahd Lads', 'On their way to Bonegrinder')
const HandsPs = new ImageObj(PsHands, null, 'Hands on Rye', 'Whole lotta fingers')
const GreekBogPs = new ImageObj(PsBogGreek, null, 'The Philosophers Bogdanoff', 'The kinda stuff the feds don\'t want you to see')
const JebPs = new ImageObj(PsJeb, null, 'Jeb!', 'Elected sheriff of Florida')
const MustangPs = new ImageObj(PsMustang, null, 'Remember Drive?', 'cool movie')
const CowboyPs = new ImageObj(PsCowbout, null, 'Digital Cowboy', 'even cowboys has email')
const PongoPs = new ImageObj(PsPongo, PsPongoB, 'Guerilla Pongo', 'Pongo is coolest when he\'s some kind of contra in South America')
const ToshiroPs = new ImageObj(PsToshiro, null, 'Toshiro', 'Yojimbo is still goated')


// Sketchbook
const OfficeDr = new ImageObj(Office, null, 'Office', 'its office')
const BeastDr = new ImageObj(Beast, null, 'Reagan', 'War is smell')
const BogJojoDr = new ImageObj(BogJojo, null, 'Igor Kujo', 'The French figured out stands a long time ago')
const BogPracDr = new ImageObj(BogPrac, null, 'Whole Lotta Bog', 'Practice')
const BoogerDr = new ImageObj(Booger, null, 'Booger Like Snot', null)
const BugDr = new ImageObj(Bug, null, 'Bug Kid', 'somethin kinda stinky')
const CafeDr = new ImageObj(Cafe, null, 'Metro Cafe', 'thank god for cafes on rainy afternoons')
const DeepWoodsDr = new ImageObj(DeepWoods, null, 'Deep Woods', 'Buncha hullabaloo')
const DonaldDr = new ImageObj(Donald, null, 'Dragonslayer Donald', 'Trump was in Dark Souls 2 actually')
const DrugsDr = new ImageObj(Drugs, null, 'Mungos Mess', null)
const GoblinoDr = new ImageObj(Goblino, null, 'Goblino', 'These guy\'s are great')
const GoblinosDr = new ImageObj(Goblinos, null, 'Stinky Lil Weirdos', null)
const EyesightDr = new ImageObj(Eyesight, null, 'Foresight 20/20', null)
const FishWarDr = new ImageObj(FishWar, null, 'Trout', 'WW3 will be fought at sea')
const WebDr = new ImageObj(Web, null, 'Websites', 'Crazy how the computer keeps getting worse')
const FunkGoblinDr = new ImageObj(FunkGoblin, null, 'Funky Kinda Goblin', null)
const GoblinFollyDr = new ImageObj(GoblinFolly, null, 'Goblins Folly', 'Player characters should just look like this')
const GreenTotemDr = new ImageObj(GreenTotem, null, 'Green Totem', 'Green Totem being a cactus was Sashas best idea')
const HankPracDr = new ImageObj(HankPrac, null, 'Hank Hill', 'Hank lived many lives')
const IdkDr = new ImageObj(Idk, null, 'Egypt 2055', null)
const IncinDr = new ImageObj(Incin, null, 'Inciniroar', 'Dude has the best side B of all time')
const KingEmailDr = new ImageObj(KingEmail, null, 'The Kings Email', 'Imagine if King George had a gmail that\'d be so cool')
const KKDr = new ImageObj(KK, null, 'K.K. Slider', 'Unironically the best video game character of all time')
const KnightDr = new ImageObj(Knight, null, 'Joan d\'Arc', null)
const ScreensDr = new ImageObj(Screens, null, 'Whole lotta screens', 'its gamieng')
const IslandsDr = new ImageObj(Islands, null, 'Pocket Islands', 'Used to draw these all the time on bookmarks as a kid')
const MessKidDr = new ImageObj(MessKid, null, 'Messy Kid!', 'He\' messy!')
const NakesDr = new ImageObj(Nakes, null, 'Gargomel', 'Cruisin in a new lambo')
const NastyDr = new ImageObj(Nasty, null, 'Nasty lil Face', null)
const NewShapeDr = new ImageObj(NewShape, NewShapeAlt, 'New Shape Just Dropped', 'An the fellas gotta check it out')
const OldGutsDr = new ImageObj(OldGuts, null, 'Guts', 'but what if he old')
const PadGutsDr = new ImageObj(PadGuts, null, 'Paddington', 'but what if he Guts')
const PunishedHankDr = new ImageObj(PunishedHank, null, 'Punished Hank', 'Diamond Dog only use propane')
const QuatchDr = new ImageObj(Quatch, QuatchAlt, 'Quatch', 'Saw this guy near Mt. Baker, surpisingly funny')
const ShumashDr = new ImageObj(Shumashh, null, 'Shumash', 'Thinkin bout Sumerian gods again')
const SmilesDr = new ImageObj(Smiles, null, 'All Smiles', null)
const SmokeDr = new ImageObj(Smoke, null, 'Smoke', null)
const SillyDr = new ImageObj(Silly, null, 'blorrborne', 'its gamieng')
const SomethingDr = new ImageObj(Something, null, 'Undefined', 'sometimes you just gotta draw a cool skull guy')
const CodingDr = new ImageObj(Coding, null, 'blorrborne', 'its gamieng')
const GovDr = new ImageObj(Gov, null, 'Local Politics', 'Funniest sitcom characters imaginable')
const TrailerDr = new ImageObj(Trailer, null, 'Trailer Park Guardian', null)
const TravelerDr = new ImageObj(Traveler, null, 'Traveler', null)
const WakeDr = new ImageObj(Wake, null, 'Sleep', 'Computers don\'t really know about sleep')
const YojimboDr = new ImageObj(Yojimbo, null, 'Big Grin', null)



// Sketchbook 3
const FragileDr = new ImageObj(Fragile, FragileAlt, 'Fragile', 'Inktober #8')
const DragonDr = new ImageObj(Dragon, DragonAlt, 'Dragon', 'Inktober #12')
const WildDr = new ImageObj(Wild, WildAlt, 'Wild', 'Inktober #16')
const DizzynDr = new ImageObj(Dizzy, DizzyAlt, 'Dizzy & Tasty', 'Inktober #24 & #25')
const EdDr = new ImageObj(Ed, EdAlt, 'Monkey & Harris', 'Dastardly Duo')
const FunnyBotDr = new ImageObj(FunnyBot, FunnyBotAlt, 'Robobot?', 'This is going to be Drake in 60 years')
const RobotsDr = new ImageObj(Robots, RobotsAlt, 'Groovy', 'Robot wearing jacker > all other designs')

// Crayon


const DuxiuCr = new ImageObj(Duxiu, null, 'Duxiu', '#1')
const ZhonfaCr = new ImageObj(Zhonfa, null, 'Zhonfa', '#2')
const GuCr = new ImageObj(Gu, null, 'Gu', '#3')
const AlienCr = new ImageObj(Alien, null, 'Visitor', 'where is this fella from?')
const BaronCr = new ImageObj(Baron, BaronAlt, 'The Baron', 'new type 4 civiliation just dropped')
const MartyCr = new ImageObj(Marty, null, 'Dunsmir in Stars', 'Marty is made out of the same junk as the sun I\'m pretty sure')
const GekCr = new ImageObj(Gek, null, 'Gekyume in Orbit', 'This lil guy is kinda like a satelite probably')
const GilgameshCr = new ImageObj(Gilgamesh, null, 'Gilgamesh', 'The Sumerians were comin up with all kinds of cool stuff')
const GrassKnightCr = new ImageObj(GrassKnight, null, 'Green Knight', 'not like the movie')
const JintaoCr = new ImageObj(Jintao, null, 'Jintao', 'idk funny')
const NightBeachCr = new ImageObj(NightBeach, null, 'Kalaloch', 'Cool to see bioluminescent sand out there')
const ShapeHillsCr = new ImageObj(ShapeHills, null, 'Shape Over Yakima', 'They show up sometimes')
const SleeperCr = new ImageObj(Sleeper, null, 'Sumerian Disco', 'Mesopotamia is just fun to think about')
const SpelboCr = new ImageObj(Spelbo, null, 'Cactus Jack', 'Travis Scott is a lot like Enkidu')


// Paintings
const BlueDemonPa = new ImageObj(BlueDemon, null, 'Blue Demon', null)
const DavidMeltzerPa = new ImageObj(DavidMeltzer, null, 'Meltzer', 'David would be a lot better if he was a green fella')
const GnomeSunsetPa = new ImageObj(GnomeSunset, null, 'Gnome Over the Sound', 'Dome Gang in the clouds')
const GoblinChillPa = new ImageObj(GoblinChill, null, 'Goblin Afternoon', 'That was a good hill to chill on')
const OutbackPa = new ImageObj(Outback, null, 'Outback', 'Subaru ha served me well')
const ShadowMonkeyPa = new ImageObj(ShadowMonkey, null, 'Shadow Monkey at Dusk', 'Uncle Boonmee')






class ArtContainer extends Component{
  render() {
    return(
      <ArtContent/>
    );
  }
}




function ArtContent() {

  const mediums =[
    {
      name: 'Drawing',
      content: {
        Photoshop: {
          name: 'Photoshop',
          images: [
            EldenShrekPs,
            BloobornePs,
            BlueDemonPs,
            JojoBogsPs,
            ChimpPs,
            StrahdLadsPs,
            HandsPs,
            GreekBogPs,
            JebPs,
            MustangPs,
            CowboyPs,
            PongoPs,
            ToshiroPs,
          ]
        },
        Crayon: {
          name: 'Crayon',
          images: [
            GilgameshCr,
            SleeperCr,
            SpelboCr,
            AlienCr,
            BaronCr,
            MartyCr,
            GekCr,
            GrassKnightCr,
            NightBeachCr,
            ShapeHillsCr, 
            DuxiuCr,
            ZhonfaCr,
            GuCr,
          ]
        },
        Sketchbook1: {
          name: 'Sketchbook #1',
          images: [
            //OfficeDr,
            BeastDr,
            BogJojoDr,
            BogPracDr,
            BoogerDr,
            BugDr,
            CafeDr,
            DonaldDr,
            DrugsDr,
            GoblinoDr,
            GoblinosDr,
            EyesightDr,
            FishWarDr,
            WebDr,
            FunkGoblinDr,
            HankPracDr,
            IdkDr,
            IncinDr,
            KingEmailDr,
            KKDr,
            KnightDr,
            //ScreensDr,
            IslandsDr,
            MessKidDr,
            NakesDr,
            NastyDr,
            OldGutsDr,
            PadGutsDr,
            PunishedHankDr,
            SmilesDr,
            SmokeDr,
            //SillyDr, 
            SomethingDr,
            //CodingDr,
            GovDr,
            TrailerDr,
            TravelerDr,
            WakeDr,
          ]
        }, 
        Sketchbook2: {
          name: 'Sketchbook #2',
          images: [
            FragileDr,
            DragonDr,
            WildDr,
            DizzynDr,
            EdDr,
            FunnyBotDr,
            RobotsDr
          ]
        },
        Sketchbook3: {
          name: 'Sketchbook #3',
          images: [
            DeepWoodsDr,
            NewShapeDr,
            GoblinFollyDr,
            GreenTotemDr,
            QuatchDr,
            ShumashDr,
            YojimboDr
          ]
        }
      }
    },
    {
      name: 'Painting',
      content: {
        setOne: {
          name: 'First Batch',
          images: [
            ShadowMonkeyPa,
            DavidMeltzerPa, 
            BlueDemonPa,
            GnomeSunsetPa
          ]
        }, 
        setThree: {
          name: 'Eastern Wa',
          images: [
            GoblinChillPa,
            OutbackPa
          ]
        }
      }
    },
    {
      name: 'Sculpting',
      content: {
        setOne: {
          name: 'Pottery',
          images: [
            TumboMdl,
            PagliombroMdl,
            KvagnerMdl,
            ScrimbloMdl,
            ShumashMdl,
            TrungusMdl,
            ElJefeMdl
          ]
        }, 
        setTwo: {
          name: 'Blender',
          images: [
            LegsMdl,
            CrabMdl
          ]
        }
      }
    }
  ];

  const defaultMedium = mediums[0]; // Set your default model here

  // Initialize activeMedium from session storage or default value
  const storedMedium = sessionStorage.getItem('activeMedium');
  const initialActiveMedium = storedMedium ? JSON.parse(storedMedium) : defaultMedium;
  console.log(initialActiveMedium);
  
  const [activeMedium, setActiveMedium] = useState(initialActiveMedium);
  
  // Use an effect to save the activeMedium to session storage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('activeMedium', JSON.stringify(activeMedium));
  }, [activeMedium]);
  

  return (
    <div className="ArtPageContent">
      <div className="artInfo">
          <h1>Art</h1>
          <p>The creative process is fun.
          </p>
        </div>
      <MediumsList mediums={mediums} setActiveMedium={setActiveMedium} activeMedium={activeMedium}/>
      <ArtConent activeMedium={activeMedium}/>
    </div>
  );
}


function MediumsList({mediums, setActiveMedium, activeMedium}) {
  return (
    <div className="MediumsList">
      {mediums.map((medium, index) => (
        <li id={medium.name === activeMedium.name ? 'selected' : ''} className="MediumListItem" key={index} onClick={() => setActiveMedium(mediums[index])}>
          {medium.name}
        </li>
      ))}
    </div>
  );
}

function ArtConent({activeMedium}) {
  if (activeMedium.name === 'Sculpting') {
    return (<SculptingContent activeMedium={activeMedium}/>);
  } else {
    return (
      <DrawingContent activeMedium={activeMedium} />
    );
  }
}

export default ArtContainer;
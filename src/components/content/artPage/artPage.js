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
const TumboMdl = new ImageObj(Tumbo, null, 'Tumbo', 'Look at Tumbo!', TumboObj);
const PagliombroObj = new ModelObj('Pagliombro', Pagliombro, [20, 20, 20]);
const PagliombroMdl = new ImageObj(Pagliombro, null, 'Pagliombro', 'Look at Pagliombro!', PagliombroObj);
const ScrimbloObj = new ModelObj('Scrimblo', Scrimblo, [20, 20, 20], [0, 0, 0], [0, 0,Math.PI]);
const ScrimbloMdl = new ImageObj(Scrimblo, null, 'Scrimblo', 'Look at Scrimblo!', ScrimbloObj);
const KvagnerObj = new ModelObj('Kvagner', Kvagner, [20, 20, 20]);
const KvagnerMdl = new ImageObj(Kvagner, null, 'Kvagner', 'Look at Kvagner!', KvagnerObj);
const ShumashObj = new ModelObj('Shumash', Shumash, [20, 20, 20]);
const ShumashMdl = new ImageObj(Shumash, null, 'Shumash', 'Look at Shumash!', ShumashObj);
const TrungusObj = new ModelObj('Trungus', Trungus, [50, 50, 50], [0, -2, 0]);
const TrungusMdl = new ImageObj(Trungus, null, 'Trungus', 'Look at Trungus!', TrungusObj);
const ElJefeObj = new ModelObj('ElJefe', ElJefe, [35, 35, 35], [0, -2, 0]);
const ElJefeMdl = new ImageObj(ElJefe, null, 'ElJefe', 'Look at ElJefe!', ElJefeObj);

// Photoshop
const BloobornePs = new ImageObj(PsBloodborne, null, 'Blugerborne', 'its gamieng')
const EldenShrekPs = new ImageObj(PsErShrek, PsErShreakAlt, 'Zweihander Beach', 'its gamieng')
const BlueDemonPs = new ImageObj(PsBlueDemon, null, 'Demonio de Azule practice', 'its gamieng')
const JojoBogsPs = new ImageObj(PsBog, null, 'bogged', 'its gamieng')
const ChimpPs = new ImageObj(PsChimp, null, 'The Yankees', 'its gamieng')
const StrahdLadsPs = new ImageObj(PsStrahd, null, 'blorrborne', 'its gamieng')
const HandsPs = new ImageObj(PsHands, null, 'blorrborne', 'its gamieng')
const GreekBogPs = new ImageObj(PsBogGreek, null, 'blorrborne', 'its gamieng')
const JebPs = new ImageObj(PsJeb, null, 'Jeb!', 'its gamieng')
const MustangPs = new ImageObj(PsMustang, null, 'blorrborne', 'its gamieng')
const CowboyPs = new ImageObj(PsCowbout, null, 'blorrborne', 'its gamieng')
const PongoPs = new ImageObj(PsPongo, PsPongoB, 'blorrborne', 'its gamieng')
const ToshiroPs = new ImageObj(PsToshiro, null, 'blorrborne', 'its gamieng')


// Sketchbook
const OfficeDr = new ImageObj(Office, null, 'blorrborne', 'its gamieng')
const BeastDr = new ImageObj(Beast, null, 'blorrborne', 'its gamieng')
const BogJojoDr = new ImageObj(BogJojo, null, 'blorrborne', 'its gamieng')
const BogPracDr = new ImageObj(BogPrac, null, 'blorrborne', 'its gamieng')
const BoogerDr = new ImageObj(Booger, null, 'blorrborne', 'its gamieng')
const BugDr = new ImageObj(Bug, null, 'blorrborne', 'its gamieng')
const CafeDr = new ImageObj(Cafe, null, 'blorrborne', 'its gamieng')
const DeepWoodsDr = new ImageObj(DeepWoods, null, 'blorrborne', 'its gamieng')
const DonaldDr = new ImageObj(Donald, null, 'blorrborne', 'its gamieng')
const DrugsDr = new ImageObj(Drugs, null, 'blorrborne', 'its gamieng')
const GoblinoDr = new ImageObj(Goblino, null, 'blorrborne', 'its gamieng')
const GoblinosDr = new ImageObj(Goblinos, null, 'blorrborne', 'its gamieng')
const EyesightDr = new ImageObj(Eyesight, null, 'blorrborne', 'its gamieng')
const FishWarDr = new ImageObj(FishWar, null, 'blorrborne', 'its gamieng')
const WebDr = new ImageObj(Web, null, 'blorrborne', 'its gamieng')
const FunkGoblinDr = new ImageObj(FunkGoblin, null, 'blorrborne', 'its gamieng')
const GoblinFollyDr = new ImageObj(GoblinFolly, null, 'blorrborne', 'its gamieng')
const GreenTotemDr = new ImageObj(GreenTotem, null, 'blorrborne', 'its gamieng')
const HankPracDr = new ImageObj(HankPrac, null, 'blorrborne', 'its gamieng')
const IdkDr = new ImageObj(Idk, null, 'blorrborne', 'its gamieng')
const IncinDr = new ImageObj(Incin, null, 'blorrborne', 'its gamieng')
const KingEmailDr = new ImageObj(KingEmail, null, 'blorrborne', 'its gamieng')
const KKDr = new ImageObj(KK, null, 'blorrborne', 'its gamieng')
const KnightDr = new ImageObj(Knight, null, 'blorrborne', 'its gamieng')
const ScreensDr = new ImageObj(Screens, null, 'blorrborne', 'its gamieng')
const IslandsDr = new ImageObj(Islands, null, 'blorrborne', 'its gamieng')
const MessKidDr = new ImageObj(MessKid, null, 'blorrborne', 'its gamieng')
const NakesDr = new ImageObj(Nakes, null, 'blorrborne', 'its gamieng')
const NastyDr = new ImageObj(Nasty, null, 'blorrborne', 'its gamieng')
const NewShapeDr = new ImageObj(NewShape, NewShapeAlt, 'blorrborne', 'its gamieng')
const OldGutsDr = new ImageObj(OldGuts, null, 'blorrborne', 'its gamieng')
const PadGutsDr = new ImageObj(PadGuts, null, 'blorrborne', 'its gamieng')
const PunishedHankDr = new ImageObj(PunishedHank, null, 'blorrborne', 'its gamieng')
const QuatchDr = new ImageObj(Quatch, QuatchAlt, 'blorrborne', 'its gamieng')
const ShumashDr = new ImageObj(Shumashh, null, 'blorrborne', 'its gamieng')
const SmilesDr = new ImageObj(Smiles, null, 'blorrborne', 'its gamieng')
const SmokeDr = new ImageObj(Smoke, null, 'blorrborne', 'its gamieng')
const SillyDr = new ImageObj(Silly, null, 'blorrborne', 'its gamieng')
const SomethingDr = new ImageObj(Something, null, 'blorrborne', 'its gamieng')
const CodingDr = new ImageObj(Coding, null, 'blorrborne', 'its gamieng')
const GovDr = new ImageObj(Gov, null, 'blorrborne', 'its gamieng')
const TrailerDr = new ImageObj(Trailer, null, 'blorrborne', 'its gamieng')
const TravelerDr = new ImageObj(Traveler, null, 'blorrborne', 'its gamieng')
const WakeDr = new ImageObj(Wake, null, 'blorrborne', 'its gamieng')
const YojimboDr = new ImageObj(Yojimbo, null, 'blorrborne', 'its gamieng')



// Sketchbook 3
const FragileDr = new ImageObj(Fragile, FragileAlt, 'blorrborne', 'its gamieng')
const DragonDr = new ImageObj(Dragon, DragonAlt, 'blorrborne', 'its gamieng')
const WildDr = new ImageObj(Wild, WildAlt, 'Wild', 'its gamieng')
const DizzynDr = new ImageObj(Dizzy, DizzyAlt, 'Dizzy', 'its gamieng')
const EdDr = new ImageObj(Ed, EdAlt, 'blorrborne', 'its gamieng')
const FunnyBotDr = new ImageObj(FunnyBot, FunnyBotAlt, 'blorrborne', 'its gamieng')
const RobotsDr = new ImageObj(Robots, RobotsAlt, 'blorrborne', 'its gamieng')

// Crayon


const DuxiuCr = new ImageObj(Duxiu, null, 'blorrborne', 'its gamieng')
const ZhonfaCr = new ImageObj(Zhonfa, null, 'blorrborne', 'its gamieng')
const GuCr = new ImageObj(Gu, null, 'blorrborne', 'its gamieng')
const AlienCr = new ImageObj(Alien, null, 'blorrborne', 'its gamieng')
const BaronCr = new ImageObj(Baron, BaronAlt, 'blorrborne', 'its gamieng')
const MartyCr = new ImageObj(Marty, null, 'blorrborne', 'its gamieng')
const GekCr = new ImageObj(Gek, null, 'blorrborne', 'its gamieng')
const GilgameshCr = new ImageObj(Gilgamesh, null, 'blorrborne', 'its gamieng')
const GrassKnightCr = new ImageObj(GrassKnight, null, 'blorrborne', 'its gamieng')
const JintaoCr = new ImageObj(Jintao, null, 'blorrborne', 'its gamieng')
const NightBeachCr = new ImageObj(NightBeach, null, 'blorrborne', 'its gamieng')
const ShapeHillsCr = new ImageObj(ShapeHills, null, 'blorrborne', 'its gamieng')
const SleeperCr = new ImageObj(Sleeper, null, 'blorrborne', 'its gamieng')
const SpelboCr = new ImageObj(Spelbo, null, 'blorrborne', 'its gamieng')


// Paintings
const BlueDemonPa = new ImageObj(BlueDemon, null, 'painting', 'desc')
const DavidMeltzerPa = new ImageObj(DavidMeltzer, null, 'painting', 'desc')
const GnomeSunsetPa = new ImageObj(GnomeSunset, null, 'painting', 'desc')
const GoblinChillPa = new ImageObj(GoblinChill, null, 'painting', 'desc')
const OutbackPa = new ImageObj(Outback, null, 'painting', 'desc')
const ShadowMonkeyPa = new ImageObj(ShadowMonkey, null, 'painting', 'desc')






class ArtContainer extends Component{
  render() {
    return(
      <div>
        <ArtContent/>
      </div>
    );
  }
}




function ArtContent() {

  const mediums =[
    {
      name: 'Drawing',
      content: {
        Sketchbook1: {
          name: 'Sketchbook #1',
          images: [
            OfficeDr,
            BeastDr,
            BogJojoDr,
            BogPracDr,
            BoogerDr,
            BugDr,
            CafeDr,
            DeepWoodsDr,
            DonaldDr,
            DrugsDr,
            GoblinoDr,
            GoblinosDr,
            EyesightDr,
            FishWarDr,
            WebDr,
            FunkGoblinDr,
            GoblinFollyDr,
            GreenTotemDr,
            HankPracDr,
            IdkDr,
            IncinDr,
            KingEmailDr,
            KKDr,
            KnightDr,
            ScreensDr,
            IslandsDr,
            MessKidDr,
            NakesDr,
            NastyDr,
            NewShapeDr,
            OldGutsDr,
            PadGutsDr,
            PunishedHankDr,
            QuatchDr,
            ShumashDr,
            SmilesDr,
            SmokeDr,
            SillyDr, 
            SomethingDr,
            CodingDr,
            GovDr,
            TrailerDr,
            TravelerDr,
            WakeDr,
            YojimboDr
          ]
        }, 
        Sketchbook2: {
          name: 'Sketchbook #2',
          images: [
            BloobornePs,
            PsErShrek,
            PsBlueDemon
          ]
        }, 
        Sketchbook3: {
          name: 'Sketchbook #3',
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
        Crayon: {
          name: 'Crayon',
          images: [
            DuxiuCr,
            ZhonfaCr,
            GuCr,
            AlienCr,
            BaronCr,
            MartyCr,
            GekCr,
            GilgameshCr,
            GrassKnightCr,
            JintaoCr,
            NightBeachCr,
            ShapeHillsCr, 
            SleeperCr,
            SpelboCr
          ]
        },
        Gubo: {
          name: 'Photoshop',
          images: [
            BloobornePs,
            EldenShrekPs,
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
        setTwo: {
          name: 'Second Batch',
          images: [
            GoblinChillPa,
            OutbackPa
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
            TumboMdl,
            TumboMdl
          ]
        }
      }
    }
  ];


  const [activeMedium, setActiveMedium] = useState(mediums[0]); // Set your default model here
  
  // Define a key to store the state in localStorage
  const localStorageKey = 'activeMedium';

  


  // Load the state from localStorage when the component mounts
  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);
    console.log('set mediusm')

    if (savedState) {
      console.log('set mediusm')
      console.log(JSON.parse(savedState));
      setActiveMedium(JSON.parse(savedState));
    }
  }, []);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(activeMedium));
  }, [activeMedium]);
  
  return (
    <div className="ArtPageContent">
      <div className="ArtTitle">Art</div>
      <div className="ArtText">I just like making stuff, simple as</div>
      <div>{activeMedium.name}</div>
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
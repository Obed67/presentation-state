import Slide01Title from "./Slide01Title";
import Slide02Intro from "./Slide02Intro";
import Slide03TanStackBasics from "./Slide03TanStackBasics";
import Slide04TanStackUsage from "./Slide04TanStackUsage";
import Slide05TanStackBP from "./Slide05TanStackBP";
import Slide06TanStackFrontend from "./Slide06TanStackFrontend";
import Slide07TanStackBackend from "./Slide07TanStackBackend";
import Slide08TanStackImpact from "./Slide08TanStackImpact";
import Slide09ReduxBasics from "./Slide09ReduxBasics";
import Slide10ReduxUsage from "./Slide10ReduxUsage";
import Slide11ReduxBP from "./Slide11ReduxBP";
import Slide12ReduxFrontend from "./Slide12ReduxFrontend";
import Slide13ReduxBackend from "./Slide13ReduxBackend";
import Slide14ReduxImpact from "./Slide14ReduxImpact";
import Slide15ZustandBasics from "./Slide15ZustandBasics";
import Slide16ZustandUsage from "./Slide16ZustandUsage";
import Slide17ZustandBP from "./Slide17ZustandBP";
import Slide18ZustandFrontend from "./Slide18ZustandFrontend";
import Slide19ZustandBackend from "./Slide19ZustandBackend";
import Slide20ZustandImpact from "./Slide20ZustandImpact";
import Slide21Synth from "./Slide21Synth";
import Slide22Conclusion from "./Slide22Conclusion";

/** Ordre linéaire : intro, puis bloc TanStack → Redux → Zustand → synthèse. */
export const slides = [
  Slide01Title,
  Slide02Intro,
  Slide03TanStackBasics,
  Slide04TanStackUsage,
  Slide05TanStackBP,
  Slide06TanStackFrontend,
  Slide07TanStackBackend,
  Slide08TanStackImpact,
  Slide09ReduxBasics,
  Slide10ReduxUsage,
  Slide11ReduxBP,
  Slide12ReduxFrontend,
  Slide13ReduxBackend,
  Slide14ReduxImpact,
  Slide15ZustandBasics,
  Slide16ZustandUsage,
  Slide17ZustandBP,
  Slide18ZustandFrontend,
  Slide19ZustandBackend,
  Slide20ZustandImpact,
  Slide21Synth,
  Slide22Conclusion,
] as const;

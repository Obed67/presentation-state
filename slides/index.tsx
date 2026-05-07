import Slide01Title from "./Slide01Title";
import Slide02Intro from "./Slide02Intro";
import Slide03TanStackBasics from "./Slide03TanStackBasics";
import Slide04TanStackUsage from "./Slide04TanStackUsage";
import Slide05TanStackCache from "./Slide05TanStackCache";
import Slide06TanStackCacheCode from "./Slide06TanStackCacheCode";
import Slide09ReduxBasics from "./Slide09ReduxBasics";
import Slide10ReduxUsage from "./Slide10ReduxUsage";
import Slide15ZustandBasics from "./Slide15ZustandBasics";
import Slide16StudyZustandForServerState from "./Slide16StudyZustandForServerState";
import Slide17StudyTanStackForClientState from "./Slide17StudyTanStackForClientState";
import Slide22Conclusion from "./Slide22Conclusion";

/** Ordre linéaire (après suppressions demandées). */
export const slides = [
  Slide01Title,
  Slide02Intro,
  Slide03TanStackBasics,
  Slide04TanStackUsage,
  Slide05TanStackCache,
  Slide06TanStackCacheCode,
  Slide09ReduxBasics,
  Slide10ReduxUsage,
  Slide15ZustandBasics,
  Slide16StudyZustandForServerState,
  Slide17StudyTanStackForClientState,
  Slide22Conclusion,
] as const;

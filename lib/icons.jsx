// String keys from lib/data.js -> icon components. lucide for UI, Font Awesome 6 for brands.
import {
  ArrowLeftRight,
  Award,
  BadgeCheck,
  Calendar,
  ChartLine,
  Code,
  Compass,
  FileText,
  Gauge,
  Monitor,
  Plane,
  ReceiptText,
  Server,
  ShoppingCart,
  Sparkles,
  Video,
  Wrench,
  Zap,
} from "lucide-react";
import {
  FaFacebookF,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSlack,
  FaWordpressSimple,
  FaXTwitter,
} from "react-icons/fa6";

export const icons = {
  award: Award,
  badge: BadgeCheck,
  bolt: Zap,
  calendar: Calendar,
  cart: ShoppingCart,
  migrate: ArrowLeftRight,
  sparkles: Sparkles,
  certificate: BadgeCheck,
  chart: ChartLine,
  code: Code,
  compass: Compass,
  desktop: Monitor,
  facebook: FaFacebookF,
  figma: FaFigma,
  file: FileText,
  gauge: Gauge,
  github: FaGithub,
  instagram: FaInstagram,
  invoice: ReceiptText,
  linkedin: FaLinkedinIn,
  plane: Plane,
  server: Server,
  slack: FaSlack,
  toolbox: Wrench,
  video: Video,
  wordpress: FaWordpressSimple,
  x: FaXTwitter,
};

export function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Code;
  return <Cmp aria-hidden="true" {...props} />;
}

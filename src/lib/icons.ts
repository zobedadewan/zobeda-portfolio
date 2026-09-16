import {
  Accessibility,
  Cloud,
  Database,
  FlaskConical,
  Gauge,
  LayoutDashboard,
  ScanSearch,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

/**
 * Maps the string `icon` keys used in src/data/* to components.
 *
 * The data files stay plain serializable objects this way — they describe
 * content, not React. Add a key here when you add one to the data.
 */
export const icons: Record<string, LucideIcon> = {
  accessibility: Accessibility,
  cloud: Cloud,
  database: Database,
  'flask-conical': FlaskConical,
  gauge: Gauge,
  'layout-dashboard': LayoutDashboard,
  'scan-search': ScanSearch,
  server: Server,
  sparkles: Sparkles,
  wrench: Wrench,
}

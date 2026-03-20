export const Colors = {
  primary: '#22C55E',
  primaryDark: '#16A34A',
  primaryLight: '#86EFAC',
  warning: '#EAB308',
  warningLight: '#FEF3C7',
  danger: '#EF4444',
  dangerLight: '#FEE2E2',
  background: '#F0FDF4',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  borderLight: '#DCFCE7',
  muted: '#F9FAFB',
};

export function getEcoColor(rating: number): string {
  if (rating >= 5) return Colors.primary;
  if (rating >= 4) return '#65A30D';
  if (rating >= 3) return Colors.warning;
  if (rating >= 2) return '#F97316';
  return Colors.danger;
}

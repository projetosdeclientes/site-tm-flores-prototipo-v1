import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhatsAppIcon } from './WhatsAppIcon';

test('WhatsAppIcon renders with custom size', () => {
  render(<WhatsAppIcon size={40} data-testid="whatsapp-icon" />);
  const svg = document.querySelector('svg');
  expect(svg).toBeTruthy();
  expect(svg?.getAttribute('width')).toBe('40');
  expect(svg?.getAttribute('height')).toBe('40');
});

test('WhatsAppIcon has correct viewBox and path', () => {
  render(<WhatsAppIcon />);
  const svg = document.querySelector('svg');
  expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  const path = svg?.querySelector('path');
  expect(path?.getAttribute('d')).toContain('M17.472');
});

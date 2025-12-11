import React from 'react';

export interface CredentialItem {
  id: string;
  label: string;
  value: string;
  verified?: boolean;
  date?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface VerificationStep {
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}
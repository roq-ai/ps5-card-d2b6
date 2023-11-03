interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'PS5 Card',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage games',
    'Manage cards',
    'Manage teams',
    'Manage team members',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5320c9d7-7fcb-42db-a8ba-edc2d4bf5c0f',
};

const base = require('@actinc/docusaurus-base/docusaurus.config');

module.exports = async () => {
  const baseConfig = await base({
    css: require.resolve('./src/css/custom.css'),
    /**
     * These are the items that appear in the top NavBar
     */
    navBarItems: [
      {
        type: 'doc',
        docId: 'about',
        position: 'left',
        label: 'About',
      },
      {
        type: 'doc',
        docId: 'architecture/architecture',
        position: 'left',
        label: 'Architecture',
      },
      {
        type: 'doc',
        docId: 'features/features',
        position: 'left',
        label: 'Features',
      },
      {
        type: 'doc',
        docId: 'developers/developers',
        position: 'left',
        label: 'Developers',
      },
    ],
    /**
     * These are the items that appear in the top Footer
     */
    footerItems: [
      {
        label: 'About',
        to: '/',
      },
      {
        label: 'Architecture',
        to: '/architecture',
      },
      {
        label: 'Developers',
        to: '/developers',
      },
      {
        label: 'Features',
        to: '/features',
      }
    ]
  });
  /**
   * You can add custom configurations to the base here if necessary.  Keep in mind any customizations here 
   * may not always be compatible with version upgrades.
   * 
   * If you do make a customization here, you may want to update the package.json file to reference a specific version
   * of the @actinc/docusaurus-base component.
   */
  return {
    ...baseConfig,
  };
};
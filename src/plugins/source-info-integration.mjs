export default function sourceInfoIntegration(options = {}) {
  const { enabled = true, hideToolbar = true } = options
  return {
    name: 'astro-source-info',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        if (!enabled) return
        if (hideToolbar) updateConfig({ devToolbar: { enabled: false } })
      }
    }
  }
}

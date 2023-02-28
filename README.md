# Plasmo HMR Bug

1. `pnpm i && pnpm dev`
1. Navigate to `chrome-extension://<EXTENSION_ID>/tabs/index.html`
1. Change something in `TestPage.tsx`
1. Page HMRs
1. Uncomment the `blah()` function and make sure it's exported
1. Page doesn't HMR. Only manual refresh picks up changes

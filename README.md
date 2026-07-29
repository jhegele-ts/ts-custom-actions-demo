# ThoughtSpot Custom Actions - Simple Demo

This web application demonstrates how custom actions work in ThoughtSpot.

## Using this demo

1. Clone this repo
2. From the root of the repo run `npm install` (or equivalent if using `yarn` or `pnpm`)
3. Rename `.env.sample` to `.env` and provide relevant values
4. Login to your ThoughtSpot cluster (this demo uses `AuthType.None` so requires that you have an active session in ThoughtSpot)
5. Run `npm run dev` to launch dev server
6. Navigate to `localhost:3000` in your browser

## Important note

This demo is built **only** to showcase how code-based custom actions can be setup and used in ThoughtSpot. **This demo is not meant to illustrate best practices for anything outside of that scope.** Notably, this demo uses `AuthType.None` which is meant for development purposes only and should never be used in a production application.

## Resources

* [Code-based custom actions](https://developers.thoughtspot.com/docs/code-based-custom-action)
* [UI custom actions](https://developers.thoughtspot.com/docs/customize-actions) (NOTE: this is not used in this demo but is included here for convenience)

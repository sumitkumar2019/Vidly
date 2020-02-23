import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a9c4f3bc77564d2dbff85080130e24dd@sentry.io/2796285"
  });
}

function log(error) {
  console.error(error);
  Sentry.captureException(error);
}

export default {
  init,
  log
};

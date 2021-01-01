import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

Sentry.init({
    dsn: "https://5dac4de5b9d6402a8d32a4a3ae04b14b@o498840.ingest.sentry.io/5576737",
    tracesSampleRate: 1.0,
});